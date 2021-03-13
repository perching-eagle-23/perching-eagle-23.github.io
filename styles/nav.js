function attachNavHandlers() {
   d3.selectAll(".subsection")
      .on("click", collapseSection);
   d3.select(".header__navicon") 
      .on("click", openNav); 
   d3.select(".closebtn")
      .on("click", closeNav);
}

function collapseSection() {
   // The page convention is to give a div the id 'subNcontent' if it follows the h2 with id 'subN'
   // This achieves section hierachy and hiding without hiding the header. 
   var section = byId(this.id + "content")
   if (this.classList.contains('subsection--collapsed')) {
      // Gives elements back their default display, ie, shows the section
      section.style.display = ''; 
      this.classList.remove('subsection--collapsed');
   } else {
      // Hides the section
      section.style.display = 'none'; 
      this.classList.add('subsection--collapsed'); 
   }
   console.log("collapseSection"); 
}

function openNav() {
   document.getElementById("mySidenav").style.width = "250px";
   console.log("openNav"); 
}

function closeNav() {
   document.getElementById("mySidenav").style.width = "0";
   console.log("closeNav"); 
}