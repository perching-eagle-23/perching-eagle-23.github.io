   <?php 
      $pagetitle = 'Topics'; 
      include('../templates/head.php'); 
   ?>
   
   <div class="mainwrapper">
      <div class="subwrapper">
         <?php 
            $topics = [
                  [
                     "./symmetry",
                     'Applications of Symmetry',
                     'Symmetry is an ubiquitous topic in mathematics.  It underlies many physical phenomena, and when symmetry is recognized in a problem, it often provides a much shorter way of solving the problem.'
                  ],
                  [
                     "./triangles",
                     'Why Triangles?',
                     'The motivation for studying the geometry of triangles and the behavior of trigonometric functions.'
                  ],
                  [
                     "./logic",
                     'Logic and Proof', 
                     "Why can't we divide by zero?  How does symbol manipulation perform computation and describe geometries? An explanation of what's under the hood of the math we've been doing so far."
                  ]         
               ];
               
            foreach ($topics as $topic) {
               ?>
               <div class="definition listitem">
                  <h2>
                     <a href="<?= $topic[0] ?>"><?= $topic[1] ?></a>
                  </h2>
                  <p><?= $topic[2] ?></p>
               </div>
               <?php
            }
         ?>
      </div>
   </div>
</body>
</html>