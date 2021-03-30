// Create data: coordinates of start and end
var legLength = 10; 
var origin = [75,75]; 

window.onload = function(){
   drawCircles();
   attachNavHandlers();
   console.log('what');
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
   console.log(changeOrigin([75,75])); 
   console.log(changeOrigin([0,0], false));
   console.log(changeOrigin([75,75], false)); 
   console.log(changeOrigin([0,0]));
}; 

function drawCircles() {
   var svg = d3.select("#circleholder");
   var moving = svg.append("g")
      .classed("movingCircles", true); 
   
   // var origin = [75, 75];  
   var coords = [[50,50],[100,50],[50,100],[100,100]];
  
   coords.forEach(function(item, index) {    
      svg.append("circle")
         .attr("cx", item[0])
         .attr("cy", item[1])
         .attr("r", 25)
         .attr("fill", "none")
         .attr("stroke", "black")
         .attr("stroke-width", 1.5); 
         
      moving.append("circle")
         .attr("cx", item[0])
         .attr("cy", item[1])
         .attr("r", 10)
         .attr("fill", getRandColor([14,16]))
         .classed("movable", true); 
   }); 

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

function changeOrigin(coords, areWindow = true) {
   // areWindow == True means translate viewport coordinates to the origin of the system of objects.  If false, translate back to viewport coordinates. 
   if (areWindow) {
      coords[0] = coords[0] - origin[0]
      coords[1] = origin[1] - coords[1];
   } else {
      coords[0] = (origin[0] + coords[0]); 
      coords[1] = origin[1] - coords[1]; 
   }
   return coords; 
}

function rotateCoords(coords, angle) {
   rotMat = [[Math.cos(angle), -1 * Math.sin(angle)], [Math.sin(angle), Math.cos(angle)]]; 
   outx = rotMat[0][0] * coords[0] + rotMat[0][1] * coords[1]; 
   outy = rotMat[1][0] * coords[0] + rotMat[1][1] * coords[1]; 

   return [outx, outy]; 
}

function transformCoords(coords, angle, type, isX = true) {
   coords = changeOrigin(coords, origin); 
   
   if (type == 'rotate') {
      coords = rotateCoords(coords, angle); 
   }
   
   coords = changeOrigin(coords, false); 
   if (isX) {
      return coords[0]; 
   } else {
      return coords[1]; 
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