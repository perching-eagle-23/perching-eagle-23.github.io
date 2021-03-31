// Create data: coordinates of start and end

var origin = [50,50];
var circleRadius =  10; 

window.onload = function(){
   drawCircles();
   attachNavHandlers();
    
   d3.select(".button_label8").selectAll("button").on("click", function() {
      var operations = this.innerText; 
      rotateGroup(this.innerText, ".squareGroupToMove");
   }); 
   
   d3.select(".button_label12").selectAll("button").on("click", function() {
      var operations = this.innerText; 
      rotateGroup(this.innerText, ".hexagonGroupToMove");
   }); 
   
   d3.select("#squareRef1").on("click", reflect); 
   d3.select("#squareRot1").on("click", function() {
      d3.selectAll("g")
         // .attr("transform", "rotate(0)")
         // .transition()
            // .duration(750)
            // .attr("transform-origin", "75 75")
            // .attr("transform", "rotate(270)")
         .attr("transform", "none")
         .transition()
            .duration(750)
            .attr("transform-origin", "75 75")
            .attr("transform", "scale(-1,1)"); 
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
         .attr("fill", getRandColor([15,16]))
         .classed("movable", true); 
   }); 
}

function rotateGroup(operations, classname) {
   var type = operations[0]; 
   var angle = parseInt(operations.replace(/\D/g,''));
   
   console.log(type);
   console.log(angle); 
   
   var transString = ''; 
   if (type == "r") {
         // In three frames since otherwise the larger rotations transition in the opposite direction
         var transString1 = "rotate(" + (angle / 3) + ")"; 
         var transString2 = "rotate(" + (2 * angle / 3) + ")"; 
         var transString3 = "rotate(" + (angle) + ")"; 
         d3.select(classname).selectAll("circle")
            // Reset, otherwise the transform will not be repeatable since the DOM state is same at start and end
            .attr("transform", "rotate(0)")
            .transition()
               .duration(250)
               .ease(d3.easeLinear)
               .attr("transform-origin", "50 50")
               .attr("transform", transString1)
            .transition()
               .duration(250)
               .ease(d3.easeLinear)
               .attr("transform-origin", "50 50")
               .attr("transform", transString2)
            .transition()
               .duration(250)
               .ease(d3.easeLinear)
               .attr("transform-origin", "50 50")
               .attr("transform", transString3)
          
   } else {
      var offset = 2 ** (-1 / 2) 
      var transString = "scale(" + -1 + "," + 1 + ")";
      d3.select(classname).selectAll("circle")
         .attr("transform", "scale(1)")
         .transition()
            .duration(250)
            .ease(d3.easeLinear)
            .attr("transform-origin", "50 50")
            .attr("transform", "rotate(" + angle + ")scale(-1,1)")
   }
   
   // fancy color change not working
   // .each(function() {
                  // d3.select(this)
                     // .attr("fill", getRandColor([15,16]))
               // })
     // .transition()
               // .duration(1000)
            // .each(function() {
                  // d3.select(this)
                     // .attr("fill", "blue")
               // })
               
}

function reflect(angle) {
   var t = d3.transition()
      .duration(250)
      .ease(d3.easeLinear); 
   
   // d3.select("svg").attr("transform-box", "fill-box"); 
            
   // d3.selectAll("circle[fill=blue]")
    d3.selectAll(".movable")
      .transition(t)
      .attr("cx", function() {
         var xCoord = parseFloat(d3.select(this).style("cx")); 
         var yCoord = parseFloat(d3.select(this).style("cy")); 
         return transformCoords([xCoord, yCoord], Math.PI, 'rotate'); 
      })
      .attr("cy", function() {
         var xCoord = parseFloat(d3.select(this).style("cx")); 
         var yCoord = parseFloat(d3.select(this).style("cy")); 
         return transformCoords([xCoord, yCoord], Math.PI, 'rotate', false); 
      });


   // These transforms show weird movement of the objects' origin during transition
   // d3.select("g")
      // this line necessary to make the operation repeatable
      // .attr("transform", "rotate(0, 75, 75)")
      // .transition(t)
      // .attr("transform", "rotate(90, 75, 75)");
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