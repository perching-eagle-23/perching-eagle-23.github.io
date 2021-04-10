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
      updateGraphic('what', true); 
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
}

function drawGraphic() {
   var width = "600"; 
   var height = "500"; 
   
   var counts = [1,1,1,1,1,1]; 
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
      .attr("transform", "translate(100,10)")
      .classed("actual", true);
   
   d3.select(".uniform").selectAll("rect")
      .data(counts)
      .join("rect")
         .attr("width", (width - 100) / 6)
         .attr("height", function(d) {return heightScale(d);})
         .attr("y", function(d) {return height - heightScale(d);})
         .attr("x", function(d, i) {return i * ((width - 80) / 6) ;})
         .attr("fill", "#33dd44aa");
}

function updateGraphic(tally, clear=false) {
   var width = "600"; 
   var height = "500"; 
   var counts;
   var heightScale; 
   if (clear) {
      counts = [0,0,0,0,0,0]; 
      heightScale = d => 10;
      console.log("clear");
   } else {
      counts = tally;
      heightScale = d3.scaleLinear()
         .domain([0, d3.max(counts)])
         .range([0, height - 20]); 
   }
   
   d3.select(".actual").selectAll("rect")
      .data(counts)
      .join("rect")
         .transition()
         .duration(400)
         .attr("width", (width - 100) / 6)
         .attr("height", function(d) {return heightScale(d);})
         .attr("y", function(d) {return height - heightScale(d);})
         .attr("x", function(d, i) {return i * ((width - 80) / 6) ;})
         .attr("fill", "#8844dd99");
}
