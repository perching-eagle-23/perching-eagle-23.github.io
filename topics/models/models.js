window.onload = function(){
   // nav panel functions
   attachNavHandlers();
   
   // The uniform distribution die roll graphic
   drawGraphic();
}

function Die() {
   this.tally = [0,0,0,0,0,0];
   
   this.roll = function(count = 1) {
      for (let i = 0; i < count; i++) {
         let outcome = Math.floor(Math.random() * 6); 
         this.tally[outcome] += 1;
      }
   }
   
   this.clear = function() {
      this.tally = [0,0,0,0,0,0];
   }
}

function drawGraphic() {
   let width = 900; 
   let height = 500;
   let margin = {top: 20, right: 10, bottom: 60, left: 80};
   // Total width of both bars for a given roll value
   let pairwidth = (width - margin.left - margin.right) / 6; 
   // The individual bars
   let barwidth = pairwidth * (4 / 11);
   // Their separation
   let betweenwidth = pairwidth * (1 / 22); 
   // This leaves a separation between column pairs of pairwidth - 2 * barwidth - betweenwidth
      
   drawBaseGraph();
   
   let die = new Die();
   
   d3.selectAll("button").on("click", function() {
      // isolate number part from the pressed button's text, pass to the roll function
      die.roll(parseInt(this.innerText.replace(/\D/g,'')));
      updateGraph(die.tally);
   }); 
   d3.select("#clear").on("click", function() {
      die.clear();
      updateGraph(die.tally); 
   }); 

   function drawBaseGraph() {
      let counts = [1/6, 1/6, 1/6, 1/6, 1/6, 1/6]; 
      let rollValues = ['1', '2', '3', '4', '5', '6'];
      
      // Bars
      let heightScale = d3.scaleLinear()
         .domain([0, 1])
         .range([0, height - margin.bottom - margin.top]); 
         
      // Bottom Axis
      let categoryScaleBottom = d3.scaleBand()
         .domain(d3.range(6))
         .range([0, width - margin.left - margin.right]);
      let bottomAxis = d3.axisBottom(categoryScaleBottom)
         .tickFormat(i => rollValues[i])
         .tickSizeOuter(0);
      
      // Left Axis
      let heightScaleLeft = d3.scaleLinear()
         .domain([1,0])
         .range([0, height - margin.bottom - margin.top]); 
      let leftAxis = d3.axisLeft(heightScaleLeft)
         .tickValues([0, 1/6, 2/6, 3/6, 4/6, 5/6, 1])
         .tickFormat(x => x.toFixed(2));
         
      let svg = d3.select("svg#die")
         .attr("viewBox", [0, 0, width, height]);
      
      // The reference uniform distribution
      svg.append('g')
         .attr("transform", "translate(" + margin.left + ", " + (height - margin.bottom) + ")")
         .classed("uniform", true);
      // The moving bars
      svg.append('g')
         .attr("transform", "translate(" + (margin.left + barwidth + betweenwidth) + ", " + (height - margin.bottom) + ")")
         .classed("actual", true);
      // Left Axis
      svg.append('g')
         .attr("transform", "translate(" + margin.left + ", " + margin.top + ")")
         .call(leftAxis);
      // Bottom Axis
      svg.append('g')
         // HACKISH, to be improved. Dunno what the scaleBand labels are aligned to, moved here with magic number.
         .attr("transform", "translate(" + (margin.left - pairwidth * 1 / 9) + ", " + (height - margin.bottom) + ")")
         .call(bottomAxis); 
      
      // Bottom Axis Label
      svg.append("text")
         .attr("x", margin.left + (width - margin.left - margin.right) / 2)
         .attr("y", height - margin.bottom / 3)
         .style("text-anchor", "middle")
         .style("font-size", "1em")
         .text("Roll Value");
      
      // Left Axis Label
      let xcenter = margin.left / 3
      let ycenter = margin.top + (height - margin.top - margin.right) / 2
      svg.append("text")
         .attr("transform", "rotate(-90," + xcenter + ", " + ycenter + ")")
         .attr("x", xcenter)
         .attr("y", ycenter)
         .style("text-anchor", "middle")
         .style("font-size", "1em")
         .text("Fraction of Total Rolls");
      
      d3.selectAll("text")
         .attr("font-size", "1.5em");
      
      // Uniform Bars
      d3.select(".uniform").selectAll("rect")
         .data(counts)
         .join("rect")
            .attr("y", d => -1 * heightScale(d))
            .attr("height", d => heightScale(d))
            .attr("x", function(d, i) {return i * pairwidth ;})
            .attr("width", barwidth)
            .attr("fill", "#33dd44aa");
   }

   function updateGraph(tally) {
      let counts = tally;
      let heightScale = d3.scaleLinear()
         // If no rolls are tallied, make sure the domain is not {0} so that 0 values actually map to the bottom of the range
         .domain([0, Math.max(d3.sum(counts), 0.1)])
         .range([0, height - margin.bottom - margin.top]); 

      d3.select(".actual").selectAll("rect")
         .data(counts)
         .join("rect")
            .transition()
            .duration(400)
            .attr("y", d => -1 * heightScale(d))
            .attr("height", d => heightScale(d))
            .attr("x", function(d, i) {return i * pairwidth ;})
            .attr("width", barwidth)
            .attr("fill", "#8844dd99");
   }
}