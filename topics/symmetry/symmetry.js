var origin = [50,50];
var circleRadius =  10; 

window.onload = function(){
   // nav panel functions
   attachNavHandlers();
   
   // the "Symmetry Transforms" graphic
   drawCircles();
   d3.select(".button_label8").selectAll("button").on("click", function() {
      var operations = this.innerText; 
      rotateGroup(this.innerText, ".squareGroupToMove");
   }); 
   
   d3.select(".button_label12").selectAll("button").on("click", function() {
      var operations = this.innerText; 
      rotateGroup(this.innerText, ".hexagonGroupToMove");
   }); 
}; 

function drawCircles() {
   // square coords
   var squareCoords = [
      [origin[0] + circleRadius, origin[1] + circleRadius],
      [origin[0] - circleRadius, origin[1] + circleRadius],
      [origin[0] - circleRadius, origin[1] - circleRadius],
      [origin[0] + circleRadius, origin[1] - circleRadius]
   ]; 
   var offset = circleRadius * 3 ** (1 / 2); 
   var hexCoords = [
      origin, 
      [origin[0] + 2 * circleRadius, origin[1]], 
      [origin[0] + circleRadius, origin[1] + offset], 
      [origin[0] - circleRadius, origin[1] + offset],
      [origin[0] - 2 * circleRadius, origin[1]],
      [origin[0] - circleRadius, origin[1] - offset],
      [origin[0] + circleRadius, origin[1] - offset],      
   ]; 
      
   drawCirclesHelper(squareCoords, "squareGroup"); 
   drawCirclesHelper(hexCoords, "hexagonGroup"); 
}

function drawCirclesHelper(coords, classname) {
   var svg = d3.select("#" + classname);
   var toMove = svg.append("g")
      .classed(classname + "ToMove", true); 
   
   coords.forEach(function(item, index) {    
      svg.append("circle")
         .attr("cx", item[0])
         .attr("cy", item[1])
         .attr("r", circleRadius)
         .attr("fill", "none")
         .attr("stroke", "black")
         .attr("stroke-width", (1 / 25) * circleRadius); 
         
      toMove.append("circle")
         .attr("cx", item[0])
         .attr("cy", item[1])
         .attr("r", (2 / 5) * circleRadius)
         .attr("fill", "blue")
         .classed("movable", true); 
   }); 
}

function rotateGroup(operations, classname) {
   var type = operations[0]; 
   var angle = parseInt(operations.replace(/\D/g,''));
   
   var t = d3.transition()
      .duration(400)
      .ease(d3.easeLinear); 
   
   var t_del = d3.transition()
      .delay(1000)
      .duration(300)
      .ease(d3.easeLinear); 
    
   if (type == "r") {
         // In three frames since otherwise the larger rotations transition in the opposite direction
         var transString1 = "rotate(" + (angle / 3) + ")"; 
         var transString2 = "rotate(" + (2 * angle / 3) + ")"; 
         var transString3 = "rotate(" + (angle) + ")"; 

         d3.select(classname).selectAll("circle")
            // Reset, otherwise the transform will not be repeatable since the DOM state is same at start and end
            .attr("transform", "rotate(0)")
            .each(function( ){
                  d3.select(this).transition(t).attr("fill", getRandColor([14,16]));
            })
            .transition(t_del)
               .attr("transform-origin", "50 50")
               .attr("transform", transString1)
            .transition(t)
               .attr("transform-origin", "50 50")
               .attr("transform", transString2)
            .transition(t)
               .attr("transform-origin", "50 50")
               .attr("transform", transString3)
            .transition()
               .delay(400)
               .duration(300)
               .attr("fill", "blue");
          
   } else {
      d3.select(classname).selectAll("circle")
         // Reset
         .attr("transform", "scale(1)")
         .each(function( ){
            d3.select(this).transition(t).attr("fill", getRandColor([14,16]));
         })
         .transition(t_del)
            .attr("transform-origin", "50 50")
            .attr("transform", "rotate(" + angle + ")scale(-1,1)")
         .transition()
               .delay(400)
               .duration(300)
               .attr("fill", "blue");
   }
}

function getRandColor(alpha=[0,16], red=[0,16], green=[0,16], blue=[0,16]) {
   var hexChars = "0123456789abcdef";
   var color = "#";
   var agg = [red, green, blue, alpha]; 
   // The parameters have syntax [minimum, range].  This allows for more green, less transparent, etc. color selection.
   // Passing ([10,6],[10,4],[0,3],[4,5]), for example, gives Valentine's Day colors.
   for (var i = 0; i < 4; i++) {
      for (var j = 0; j < 2; j++) {
         // Append the hex character at index miminum + x, where x is an integer less than range. 
         color += hexChars.charAt(Math.floor(Math.random() * agg[i][1]) + agg[i][0]);
      }
   }
   return color; 
}