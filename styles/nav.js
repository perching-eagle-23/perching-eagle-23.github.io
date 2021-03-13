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
}