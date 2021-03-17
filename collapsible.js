(function() {
   //Mostly working
   
   window.onload = function() {
      attachNavHandlers();
      // Original using json
      //var data = d3.json("treedata.json").then(function(data) {
      /* DSV SPECIFIC */
      /* working with file "../curriculum/curriculum_out1WithParent.txt" */
      d3.dsv("	", "../curriculum/curriculum_outWithParent.txt").then(function(data) {
         // Runs the layout and returns the objects from the data
         // See this page for description : https://stackoverflow.com/questions/41087568/d3js-tree-nodes-is-not-a-function
         var childColumn = data.columns[0];
         var parentColumn = data.columns[1];
         
         var stratify = d3.stratify()
            .id(d => d[childColumn])
            .parentId(d => d[parentColumn]);
            // .id(data.columns[0])
            // .parentId(data.columns[1]);
         /* END DSV SPECIFIC STUFF */ 
         
         var width = 500; 
         var margin = ({top: 10, right: 120, bottom: 10, left: 40}); 
         var diagonal = d3.linkHorizontal().x(d => d.y).y(d => d.x); 
         var dx = 10;
         // original over 6
         var dy = width / 7;
         // original is tree
         var tree = d3.tree().nodeSize([dx, dy]);
          
         console.log(data); 
         // var chart = {
         const root = stratify(data);
         // Original (json) 
         // const root = d3.hierarchy(data);
         console.log(root);
         

         root.x0 = dy / 2;
         root.y0 = 0;
         root.descendants().forEach((d, i) => {
            d.id = i;
            d._children = d.children;
            // REPLACE 'CONTENT' WITH THE ORIGINAL 'NAME' ONCE DB TABLE UPDATED WITH NAMES
            if (d.depth && d.data.content.length !== 7) d.children = null;
         });

         // Original
         //const svg = d3.create("svg")
         const svg = d3.select(".mainwrapper").append("svg")
            .attr("viewBox", [-1 * margin.left, -1 * margin.top, width, dx])
            .style("font", "10px sans-serif")
            .style("user-select", "none")
            .classed("fullwidth", true)
            // .style("background-color", "steelblue");
      

         const gLink = svg.append("g")
            .attr("fill", "none")
            //.attr("stroke", "#555")
            .attr("stroke", "steelblue")
            .attr("stroke-opacity", 0.4)
            .attr("stroke-width", 1.5);

         const gNode = svg.append("g")
            .attr("cursor", "pointer")
            .attr("pointer-events", "all");

         function update(source) {
            const duration = d3.event && d3.event.altKey ? 2500 : 250;
            const nodes = root.descendants().reverse();
            const links = root.links();

            // Compute the new tree layout.
            tree(root);
            console.log(root);

            let left = root;
            let right = root;
            root.eachBefore(node => {
               if (node.x < left.x) left = node;
               if (node.x > right.x) right = node;
            });
            
            // replace 2 with left.x and 4 with right.x
            const height = right.x - left.x + margin.top + margin.bottom;

            const transition = svg.transition()
               .duration(duration)
               .attr("viewBox", [-margin.left, left.x - margin.top, width, height])
               .tween("resize", window.ResizeObserver ? null : () => () => svg.dispatch("toggle"));

            // Update the nodes…
            const node = gNode.selectAll("g")
               .data(nodes, d => d.id);

            // Enter any new nodes at the parent's previous position.
            const nodeEnter = node.enter().append("g")
               // .attr("transform", d => `translate(${source.y0},${source.x0})`)
               .attr("transform", d => "translate(" + source.y0 + ", " + source.x0 + ")")
               .attr("fill-opacity", 0)
               .attr("stroke-opacity", 0)
               .on("click", (event, d) => {
                  d.children = d.children ? null : d._children;
                  update(d);
               });

            nodeEnter.append("circle")
               .attr("r", 2.5)
               .attr("fill", d => d._children ? "#555" : "#999")
               .attr("stroke-width", 10);

            nodeEnter.append("text")
               // original "0.31em"
               .attr("dy", "0.31em")
               .attr("x", d => d._children ? -6 : 6)
               //mine
               // .attr("textLength", "10%")
               // .attr("lengthAdjust", "spacingAndGlyphs")
               .attr("font-size", "5")
               // end mine
               .attr("text-anchor", d => d._children ? "end" : "start")
               .text(d => d.data.name)
               // Wrong syntax below
               // .on("mouseover", function(d) {
                  // alert(d3.select(this).data()
               // })
               //original
                  .clone(true).lower()
                  .attr("stroke-linejoin", "round")
                  // original 3
                  .attr("stroke-width", 1)
                  .attr("stroke", "white")
               

            // Transition nodes to their new position.
            const nodeUpdate = node.merge(nodeEnter).transition(transition)
               // .attr("transform", d => `translate(${d.y},${d.x})`)
               .attr("transform", d => "translate(" + d.y + ", " + d.x + ")")
               .attr("fill-opacity", 1)
               .attr("stroke-opacity", 1);

            // Transition exiting nodes to the parent's new position.
            const nodeExit = node.exit().transition(transition).remove()
               // .attr("transform", d => `translate(${source.y},${source.x})`)
               .attr("transform", d => "translate(" + source.y + ", " + source.x + ")")
               .attr("fill-opacity", 0)
               .attr("stroke-opacity", 0);

            // Update the links…
            const link = gLink.selectAll("path")
               .data(links, d => d.target.id);

            // Enter any new links at the parent's previous position.
            const linkEnter = link.enter().append("path")
               .attr("d", d => {
                  const o = {x: source.x0, y: source.y0};
                  return diagonal({source: o, target: o});
            });

            // Transition links to their new position.
            link.merge(linkEnter).transition(transition)
               .attr("d", diagonal);

            // Transition exiting nodes to the parent's new position.
            link.exit().transition(transition).remove()
               .attr("d", d => {
                  const o = {x: source.x, y: source.y};
                  return diagonal({source: o, target: o});
               });

            // Stash the old positions for transition.
            root.eachBefore(d => {
               d.x0 = d.x;
               d.y0 = d.y;
            });
         }

         update(root);

         return svg.node();
         // }
      
      });
   };
})();