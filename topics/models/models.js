window.onload = function(){
   // nav panel functions
   attachNavHandlers();
   
   let die = new Die();
   drawGraphic();
   d3.selectAll("button").on("click", function() {
      // isolate number part from the pressed button's text, pass to the roll function
      die.roll(parseInt(this.innerText.replace(/\D/g,'')));
      updateGraphic(die.tally);
   }); 
   d3.select("#showsteps").on("click", function() {
      for (let i = 0; i < 10; i++) {
         die.roll(); 
         console.log(die.tally);
         updateGraphic(die.tally); 
      }
   }); 
   d3.select("#clear").on("click", function() {
      die.clear();
      console.log(die.tally);
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
   var width = "900"; 
   var height = "500";
   var barwidth = 35;
   var pairwidth = 100;
   var betweenwidth = 5; 
   var afterwidth = 20; 
   
   
   var counts = [1/6, 1/6, 1/6, 1/6, 1/6, 1/6]; 
   var heightScale = d3.scaleLinear()
      .domain([0, 1])
      .range([0, height - 20]); 
   
   var svg = d3.select("svg#die")
      .attr("width", width + "px")
      .attr("height", height + "px");
   svg.append('g')
      .attr("transform", "translate(100,10)")
      .classed("uniform", true);
   svg.append('g')
      .attr("transform", "translate(" + (100 + barwidth + betweenwidth) + ",10)")
      .classed("actual", true);
   
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
   var width = "600"; 
   var height = "500"; 
   var barwidth = 35;
   var pairwidth = 100;
   var betweenwidth = 5; 
   
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
