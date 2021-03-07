// Create data: coordinates of start and end
var legLength = 10; 

window.onload = function(){
   drawGreatCircles(); 
   drawSlider();
   // byId("globe").onclick = drawGreatCircles;
   d3.selectAll(".subsection")
      .on("click", collapseSection); 
}; 

function collapseSection() {
   // The page convention is to give a div the id 'subNcontent' if it follows the h2 with id 'subN'
   // This achieves section hierachy and hiding without hiding the header. 
   var section = byId(this.id + "content")
   if (section.style.display == 'none') {
      // Gives elements back their default display, ie, shows the section
      section.style.display = ''; 
      this.style.backgroundImage = "url('icons/up_arrow.svg')"; 
   } else {
      // Hides the section
      section.style.display = 'none'; 
      this.style.backgroundImage = "url('icons/down_arrow.svg')"; 
   }
}

function drawBlankMap() {
   // The svg
   var svg = d3.select("svg"),
       width = +svg.attr("width"),
       height = +svg.attr("height");

   // Map and projection
   var projection = d3.geoOrthographic()
       .scale(width / 1.3 / Math.PI)
       .translate([width / 2, height / 2])

   // Load external data and boot
   d3.json("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson", function(data){

       // Draw the map with multiple path elms
       svg.append("g")
           .selectAll("path")
           .data(data.features)
           .enter().append("path")
               .attr("fill", "#69b3a2")
               .attr("d", d3.geoPath()
                  .projection(projection)
               )
               .style("stroke", "#fff")
               
      // Draw the map with a single elm
      /* svg.selectAll("path")
         .data(data.features)
         .enter().append("path")
         .attr("d", d3.geoPath().projection(projection));  */
   })
}

function drawGreatCircles() {
   // The svg
   var svg = d3.select("svg"),
       width = +svg.attr("width"),
       height = +svg.attr("height");

   // Map and projection
   var projection = d3.geoOrthographic()
      // original translate factor width / 1.3
      .scale(width / 1 / Math.PI)
      .translate([width / 2, height / 2])
       /* original with this function, too small
       .scale(85)
       .translate([width/2, height/2*1.3]) */
   
   var link = [{type: "LineString", coordinates: [[0, 0], [0, legLength]]},
      {type: "LineString", coordinates: [[0, 0], [legLength, 0]]},
      {type: "LineString", coordinates: [[0, legLength], [legLength, 0]]}
   ]; 
   // Change these data to see ho the great circle reacts

   // A path generator
   var path = d3.geoPath()
       .projection(projection)

   // Load world shape
   d3.json("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson", function(data){

       // Draw the map
       svg.append("g")
           .selectAll("path")
           .data(data.features)
           .enter().append("path")
               .attr("fill", "#b8b8b8")
               .attr("d", d3.geoPath()
                   .projection(projection)
               )
               .style("stroke", "#fff")
               .style("stroke-width", 0)
               
      svg.selectAll("myPath")
         .data(link)
         .enter()
         .append("path")
           .attr("d", function(d){ return path(d)})
           .style("fill", "none")
           .style("stroke", "blue")
           .style("stroke-width", 4)


       // Add single path (change link from array to single object)
      /*  svg.append("path")
         .attr("d", path(link))
         .style("fill", "none")
         .style("stroke", "orange")
         .style("stroke-width", 7) */

   })
}

function drawSlider(){
   var data = [1, 10, 40, 60, 90];

   var sliderSimple = d3
    .sliderBottom()
    .min(d3.min(data))
    .max(d3.max(data))
    .width(300)
    .tickFormat(d3.format('.2%'))
    .ticks(5)
    .default(0.015)
    .on('onchange', val => {
      d3.select('p#value-simple').text(d3.format('.2%')(val));
      legLength = val; 
    });

   var gSimple = d3
    .select('div#globe')
    .append('svg')
    .attr('width', 500)
    .attr('height', 100)
    .append('g')
    .attr('transform', 'translate(30,30)');

   gSimple.call(sliderSimple);

   d3.select('p#value-simple').text(d3.format('.2%')(sliderSimple.value()));
}

// Save time with most common DOM get
function byId(id) { return document.getElementById(id); }