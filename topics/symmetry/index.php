 <?php 
      $pagetitle = 'Topics / Triangles'; 
      $pagescripts = "<!-- MathJax --> 
         <script async src='https://polyfill.io/v3/polyfill.min.js?features=es6'></script>
         <script src='symmetry.js' type='text/javascript'></script>"; 
      include("../../templates/head.php"); 
   ?>
   
   <div class="midsection">
      <h1>Applications of Symmetry</h1>
      <p>Symmetry is an ubiquitous topic in mathematics.  It underlies many physical phenomena, and when symmetry is recognized in a problem, it often provides a much shorter way of solving the problem.</p>
      
      <p class="definition">Symmetry \( := \)"A symmetry" of collection of objects is an operation which, after it is performed, leaves the objects unchanged.</p>
      
      <p>Many shapes are symmetrical, but it's not just about shapes, or rather, it's not just about literal shapes.  By considering functions and/or data in a time series or along another axis, we can use the same geometric and algebraic techniques to reveal and understand patterns in many situations.  I'll start with a literal shape: we can then understand the underlying geometry of the more abstract examples.</p>
      
      <h2 class="subsection" id="sub1">Section 1: Crystals</h2>
      <div id="sub1content">
         <p>How are snowflakes so diverse, and yet so many have six sides?  Why are table salt crystals, and many other mineral crystals, cubic?  This question led Johannes Kepler to the first really solid (ha!) argument that matter is atomic; that it is built of building blocks which are, except in extreme physical circumstances, indivisible. {build : page from Strena seu de Nive Sexangula} By constructing large solids out of regular building blocks that lock together at regular angles, we can put the blocks together in any of quadrillions of ways, and still arrive at large shapes which are similar.  Actually, this is what "crystal" means - a solid in which the constituent atoms are arranged periodically, ie in a repeating pattern.  (Periodicity, which we study with the unit circle and trigonometric functions, is an instance of translational symmetry). {build : d3 circle packing with buttons for the different symmetry operations corresponding to animated transitions}</p>
         
         <div id="circles" width="100px" height="100px" style="border:3px solid black;">
            <svg id="circleholder"></svg>
         </div>

         <p>To get direct evidence of this, we shot X-rays through cyrstals, and got these patterns out the other side.  {build : simple cubic and hcp diffraction patterns} These images are in some sense the geometric "inverse" of the actual arrangment of the atoms; still, the symmetry survives this transformation.  (This is an example of an extremely powerful area of study called the inverse scattering problem, which describes optics, collisions, particle interactions, and much more).  For the first time, atomicity was no longer a philosophical quandry: symmetry in X-ray projections closed the case.</p>
         
      </div>
      
      <h2 class="subsection" id="sub2">Section 2: Rhymes</h2>
      <div id="sub2content">
         <p> I have a theory about why sayings and songs that rhyme are more memorable than those that don't.</p>  

         <p>The humble rhyme 
            is a link in time
            these lines will match
            when ends attach
            a single point 
            from thoughts disjoint
            links made through time
            with simple rhyme</p>

         {build : arrows showing semantic connections }

         <p>The rhyming lines have mirrored symmetry.  In our heads, this attaches points in the story or case being made.  What would otherwise be a lengthy and cumbersome sentence is percieved to have reduced complexity; the connection of two points is made for the price of one.  In the same way one needs only a triangle to construct a hexagon, a rhyme builds up the semantic content of lines from a single anchor.  </p>

         <p>This same technique is used on larger scales.  Rambling comedians or films surprise and impress us when they "bring it back" or "end where they began"; what seemed to be a freeform narrative now takes on a cohesion and purposefulness from the symmetry of the beginning and end.   </p>   
      </div>
      
      <h2 class="subsection" id="sub3">Section 3: Conservation Laws / Noether</h2>
      <div id="sub3content">
         <p>You've probably heard of the conservation of energy, of mass, and maybe of momentum.  These laws all spring from a beautiful mathematical truth identified by Emmy Noether in the early 20th century.  {build : write more on Noether}</p>
   
         <p>In "Zero to Infinity", Rowlands discusses a variant of this symmetry.  The </p>
      </div>
   </div>
</body>
</html>