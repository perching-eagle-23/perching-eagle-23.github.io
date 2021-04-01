window.onload = function(){
   // nav panel functions
   attachNavHandlers();
   
   var width; 
   var height;
   var projection;
   var path;
   
   drawGlobe();
   
   d3.select("#legLength").on("change", function(event) {
      // These, plus .innerText and .innerHtml versions, are all returning undefined. 
      //console.log(d3.select(this).value);
      //console.log(d3.select("#legLength").value); 
      
      console.log(document.getElementById("legLength").value);
      let offset = byId("legLength").value; 
      drawTriangle(path, offset, true);} ); 
}; 

function drawGlobe() {
  width = d3.select("#globe").node().getBoundingClientRect().width
  height = 500
  const sensitivity = 75

  projection = d3.geoOrthographic()
     .scale(250)
     .center([0, 0])
     .rotate([0,-30])
     .translate([width / 2, height / 2])

  const initialScale = projection.scale()
  path = d3.geoPath().projection(projection)

  let svg = d3.select("#globe")
     .append("svg")
     .attr("width", width)
     .attr("height", height)

  let globe = svg.append("circle")
     .attr("fill", "#EEE")
     .attr("stroke", "#000")
     .attr("stroke-width", "0.2")
     .attr("cx", width/2)
     .attr("cy", height/2)
     .attr("r", initialScale)

   svg.call(d3.drag().on('drag', (event) => {
    const rotate = projection.rotate()
    const k = sensitivity / projection.scale()
    projection.rotate([
      rotate[0] + event.dx * k,
      rotate[1] - event.dy * k
    ])
    path = d3.geoPath().projection(projection)
    svg.selectAll("path").attr("d", path)
   }))
   .call(d3.zoom().on('zoom', (event) => {
    if(event.transform.k > 0.3) {
      projection.scale(initialScale * event.transform.k)
      path = d3.geoPath().projection(projection)
      svg.selectAll("path").attr("d", path)
      globe.attr("r", projection.scale())
    }
    else {
      event.transform.k = 0.3
    }
  }))


  let map = svg.append("g")

  d3.json("https://raw.githubusercontent.com/michael-keith/mps_interests/master/view/js/charts/data/world_map.json").then(function(d) {
    map.append("g")
      .attr("class", "countries" )
      .selectAll("path")
      .data(d.features)
      .enter().append("path")
      .attr("class", d => "country_" + d.properties.name.replace(" ","_"))
      .attr("d", path)
      .attr("fill", "white")
      .style('stroke', 'black')
      .style('stroke-width', 0.3)
      .style("opacity",0.8)
      
      console.log(d);
  })
   
  // let offset = 90; 
  // let polyLegs = [{"type":"Feature","properties":{"name":"Triangle"},"geometry":{"type":"Polygon","coordinates":[[[0,0],[0,offset],[offset,0],[0,0]]]},"id":"Triangle"}];
   
   svg.append("g")
      .classed("triangle", true)
      // .selectAll("path")
      // .data(polyLegs)
      // .enter().append("path")
      // .attr("d", path)
      // .attr("fill", "none")
      // .attr("stroke", "blue")
      // .attr("stroke-width", 3)
   
   drawTriangle(path, 90, false);
}

function drawTriangle(path, offsetString, clear = true) {
   let offset = parseInt(offsetString); 
   if (offset % 360 == 0) {
      alert("This triangle is just a point and will not render.  Try another value.");
   } else if (offset % 180 == 0) {
      alert("The points of this triple lie on opposite poles; cannot draw a triangle.  Try another value.");
   }
   let polyLegs = [{"type":"Feature","properties":{"name":"Triangle"},"geometry":{"type":"Polygon","coordinates":[[[0,0],[0,offset],[offset,0],[0,0]]]},"id":"Triangle"}];
   
   if (clear) {
      d3.select("g.triangle")
         .selectAll("*")
         .remove()         
   }
   
   d3.select("g.triangle")
      .selectAll("path")
      .data(polyLegs)
      .enter().append("path")
      .attr("d", path)
      .attr("fill", "none")
      .attr("stroke", "blue")
      .attr("stroke-width", 3)
}

// Save time with most common DOM get
function byId(id) { return document.getElementById(id); }