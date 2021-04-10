 <?php 
      $root = "https://room202math.github.io/";
      $dev_root = "http://localhost/learn/room202/persistence/";
      $pagetitle = 'Topics / Symmetry'; 
      $pagescripts = "<!-- MathJax --> 
         <script async src='https://polyfill.io/v3/polyfill.min.js?features=es6'></script>
         <script async id='MathJax-script' src='https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js'></script>
         <script defer src='" . $dev_root . "topics/models/models.js' type='text/javascript'></script>"; 
      include("../../templates/head.php"); 
   ?>
   
   <div class="midsection">
      <h1>Mathematical Modelling</h1>
      <p>The Greek philosopher Zeno posed the following argument in the 5th century BC.  An arrow shot at a target must travel half the distance, then half the remaining distance, then half of the distance remaining after that, and so on.  Since (according to this argument) there is always another half distance to go, how can the arrow ever reach the target?  
      </p>
      
      <div class="center_quote">\( \begin{eqnarray*} \sum_{i=1}^\infty \frac{1}{2^i} = \frac{1}{2} + \frac{1}{4} + \frac{1}{8} + ... = ? \end{eqnarray*} \)</div>
      
      <div class="inline_figure">
         <img src="../../figures/images/jan_baptist.jpg" alt="Jan Baptist Van Helmont waiting for scorpions to materialize" width="300px">
         <p class="figure__label inline_figure__label">Major doofus Jan Baptist Van Helmont</p>
      </div>
      <p>
      It was once believed that small organisms formed spontaneously from nonliving stuff, ie fleas from dust.  This was called "spontaneous generation".  Jan Baptist van Helmont (1500's) helpfully determined that basil left between bricks in the sun would turn into scorpions. 
      </p>
      
      <p>These are examples of models, in particular bad ones.</p>
      
      <p class="definition">Mathematical model \( := \) A toy system which is posited to describe the behavior of some other system or phenomenon.</p>
      
      <p>I choose "toys" not to belittle the importance of models but because they are ... things ... with behavior and state, little worlds of their own: toys, systems, mechanisms.  They do not necessarily have much to do with reality besides being concieved within it.  The rules of chess and the names of pieces are a model of chess play; the fact that someone could pick up a physical piece and eat it does not obey this model.</p>
      
      <p>In order to test how well a model describes something, we must make observations and/or measurements of that thing.  If the observations closely match what the model predicts, we say the model is a good model and give it a name, much like we would with a dog.</p>
      
      <p>Let's start quantifying the efficacy of models in describing phenomena with the following case study.</p>
      
      <h2 class="subsection" id="sub1">Section 1: Is this die a fair die?</h2>
      <div id="sub1content">
         <p>In the gizmo below, the blue bars tally the number of rolls of each value, while the green bars are fixed at equal numbers of rolls.  Roll a few times, and ask: is this a fair die?  Then roll a thousand, then a million times, and ask again.  (Obviously the "die" here is a piece of code, which makes the question more interesting.  The experiment tells us something useful - did I write a good die function?)</p>
      
         <div style="border:2px solid black;">
            <svg id="die"></svg>
         </div>
         <button id="roll">Roll 1 time</button><button>Roll 1000 times</button><button>Roll 1000000 times</button>
         <button id="showsteps">show steps</button><button id="clear">clear</button>
         
         <p>After a million rolls, you were probably convinced the die was fair.  But hopefully your takeaway after a few rolls was "I'm not sure, there is not enough data."  This is the crux of our study of statistics; the merit of our assessment of a model depends on how much quality data we collect.  This is why an anecdote is absolutely no grounds to, say, decide something about human nature.  One needs many, many data points to infer something about a large population.</p>
         
         <p>We'd like to measure how confident we are that the six sides of the die are equally likely - a model of the behavior of the die - which leads to the requirement of studying a little probability before statistics.  To measure our confidence in the hypothesis requires us to ask:</p>
         
         <div class="center_quote">
            <p>Given that the hypothesis is true, how likely is it that the given data would be observed?</p>
         </div>
      </div>     
   </div>
</body>
</html>