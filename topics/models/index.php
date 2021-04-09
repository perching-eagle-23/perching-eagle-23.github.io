 <?php 
      $root = "https://room202math.github.io/";
      $pagetitle = 'Topics / Symmetry'; 
      $pagescripts = "<!-- MathJax --> 
         <script async src='https://polyfill.io/v3/polyfill.min.js?features=es6'></script>
         <script async id='MathJax-script' src='https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js'></script>
         <script defer src='" . $root . "topics/models/models.js' type='text/javascript'></script>"; 
      include("../../templates/head.php"); 
   ?>
   
   <div class="midsection">
      <h1>Mathematical Modelling</h1>
      <p>The Greek philosopher Zeno posed the following argument in the 5th century BC.  An arrow shot at a target must travel half the distance, then half the remaining distance, then half of the distance remaining after that, and so on.  Since (according to this argument) there is always another half distance to go, how can the arrow ever reach the target?  
      </p>
      
      <div class="inline_figure">
         <img src="../../figures/images/jan_baptist.jpg" alt="Jan Baptist Van Helmont waiting for scorpions to materialize" width="300px">
         <p class="figure__label inline_figure__label">Major doofus Jan Baptist Van Helmont</p>
      </div>
      <p>
      It was once believed that small organisms formed spontaneously from nonliving stuff, ie fleas from dust.  This was called "spontaneous generation".  Jan Baptist van Helmont (1500's) helpfully determined that basil left between bricks in the sun would turn into scorpions. 
      </p>
      
      <p>These are examples of models; in particular, bad ones.</p>
      
      <p class="definition">Mathematical model \( := \) A toy system which is posited to describe the behavior of some other system or phenomenon.</p>
      
      <p>I choose "toys" not to belittle the importance of models but because they are ... things ... with behavior and state, little worlds of their own: toys, systems, mechanisms.  They do not necessarily have much to do with reality besides being concieved within it.  For example, the Boston Dynamics robots could be instructed to move in four spatial dimensions and this would be a perfectly valid conceptual model, but not a good model for our world, nor a good business decision.  The rules of chess and the names of pieces are a model; the fact that someone could pick up a physical piece and eat it does not obey this model.</p>
     
   </div>
</body>
</html>