window.onload = function(){
   // nav panel functions
   attachNavHandlers();
   
   var width = 900; 
   var height = 500;
   var barwidth = 35;
   var pairwidth = 100;
   var betweenwidth = 5; 
   drawGraphic();
   
   let die = new Die();
   
   d3.selectAll("button").on("click", function() {
      // isolate number part from the pressed button's text, pass to the roll function
      die.roll(parseInt(this.innerText.replace(/\D/g,'')));
      updateGraphic(die.tally);
   }); 
   d3.select("#clear").on("click", function() {
      die.clear();
      updateGraphic(die.tally); 
   }); 
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

   var counts = [1/6, 1/6, 1/6, 1/6, 1/6, 1/6]; 
   var heightScale = d3.scaleLinear()
      .domain([0, 1])
      .range([0, height - 20]); 
   var axis = d3.axisLeft(heightScale)
      .tickValues([0, 1/6, 2/6, 3/6, 4/6, 5/6, 1]);
   
   var svg = d3.select("svg#die")
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [0, 0, width, height]);
   
   // The reference uniform distribution
   svg.append('g')
      .attr("transform", "translate(100, -20)")
      .classed("uniform", true);
   // The moving bars
   svg.append('g')
      .attr("transform", "translate(" + (100 + barwidth + betweenwidth) + ", -20)")
      .classed("actual", true);
   // The vertical axis
   svg.append('g')
      .attr("transform", "translate(60)")
      .call(axis);
   // The horizontal axis
    
   
   d3.select(".uniform").selectAll("rect")
      .data(counts)
      .join("rect")
         .attr("width", barwidth)
         .attr("height", function(d) {return heightScale(d);})
         .attr("y", function(d) {return height - heightScale(d);})
         .attr("x", function(d, i) {return i * pairwidth ;})
         .attr("fill", "#33dd44aa");
}

function updateGraphic(tally) {

   var counts = tally;
   var heightScale = d3.scaleLinear()
      // If no rolls are tallied, make sure the domain is not {0} so that 0 values actually map to the bottom of the range
      .domain([0, Math.max(d3.sum(counts), 0.1)])
      .range([0, height - 20]); 

   d3.select(".actual").selectAll("rect")
      .data(counts)
      .join("rect")
         .transition()
         .duration(400)
         .attr("width", barwidth)
         .attr("height", function(d) {return heightScale(d);})
         .attr("y", function(d) {return height - heightScale(d);})
         .attr("x", function(d, i) {return i * pairwidth ;})
         .attr("fill", "#8844dd99");
}
