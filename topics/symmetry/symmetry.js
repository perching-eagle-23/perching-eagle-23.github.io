// Create data: coordinates of start and end
var legLength = 10; 

window.onload = function(){
   drawCircles();
   attachNavHandlers();
}; 

function drawCircles() {
   var svg = d3.select("#circleholder")
      .append("circle")
      .attr("cx", 50)
      .attr("cy", 50)
      .attr("r", 20)
      .attr("fill", "blue"); 
      
  svg.attr("background-color", "blue"); 
}