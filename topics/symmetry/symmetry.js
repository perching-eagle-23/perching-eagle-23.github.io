// Create data: coordinates of start and end
var legLength = 10; 
var origin = [75, 75]; 

window.onload = function(){
   drawCircles();
   attachNavHandlers();
   console.log('what');
   d3.select("#squareRef1").on("click", reflect); 
   d3.selectAll("circle").on("click", reflect); 
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
         .attr("fill", "blue"); 
   }); 

}

function reflect(angle) {
   var t = d3.transition()
            .duration(1000)
            .ease(d3.easeLinear); 
            
   d3.selectAll("circle[fill=blue]")
      .transition(t)
      // .attr("cx", function() { return d3.select(this).style("cy"); } )
      // .attr("cy", function() { return d3.select(this).style("cx"); } )
      .attr("cx", function() {
         var xCoord = parseFloat(d3.select(this).style("cx")); 
         var yCoord = parseFloat(d3.select(this).style("cy")); 
         return transformCoords([xCoord, yCoord], Math.PI / 2, 'rotate'); 
      })
      .attr("cy", function() {
         var xCoord = parseFloat(d3.select(this).style("cx")); 
         var yCoord = parseFloat(d3.select(this).style("cy")); 
         return transformCoords([xCoord, yCoord], Math.PI / 2, 'rotate', false); 
      });
      // .attr("cy", transformCoords(Math.PI / 2, 'rotate', false)); 
      
      
      
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
   console.log(coords);
   rotMat = [[Math.cos(angle), -1 * Math.sin(angle)], [Math.sin(angle), Math.cos(angle)]]; 
   outx = rotMat[0][0] * coords[0] + rotMat[0][1] * coords[1]; 
   outy = rotMat[1][0] * coords[0] + rotMat[1][1] * coords[1]; 
   console.log(outx, outy); 
   
   return [outx, outy]; 
}

function transformCoords(coords, angle, type, isX = true) {
   // console.log(this); 
   // coords = [d3.select(this).style("cx"), d3.select(this).style("cy")]; 
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