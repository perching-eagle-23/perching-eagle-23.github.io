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