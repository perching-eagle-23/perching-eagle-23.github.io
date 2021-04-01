   <?php 
      $pagescripts = "<!-- MathJax --> 
         <script async src='https://polyfill.io/v3/polyfill.min.js?features=es6'></script>
         <script async id='MathJax-script' src='https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js'></script>
         <script defer src='quad_1.js' type='text/javascript'></script>"; 
      $pagetitle = 'Quadratic Equations 1'; 
      include("../../templates/head.php"); 
   ?>


   <div class="midsection pset">
      <h1>Quadratic equations 1</h1>
      <ol>
         <li>State whether the product xy is negative or positive, and why.
            <ol>
               <li>x,y both positive</li>
               <li>x positive, y negative</li>
               <li>x,y both negative</li>
            </ol>
         </li>
         <li>What is the minimum value of \( x^2 \)?</li>
         <li>Minimum of \( (x - 1)^2 \)?  Hint: \(x -1\) takes all the same values as \(x\).</li>
         <li>Minimum of \( (x - 1)(x + 1) \)? Hint: expand.</li>
         <li>Let a,b be real numbers.  Find the minimum of \( ax^2 + bx \) in x.  ("Find the minimum in x" means to treat the other variables as constant, and find the value of x for which the function is minimized.)</li>
         <li>What does the minimum of a quadratic expression tell us about the existence of real zeros for that expression?</li>
         <li>To "find the zeros" of a quadratic expression is to find the value/s of x for which the equation \( ax^2 + bx + c = 0 \) holds.  Once you know how to do this, you can solve an equation of the form \( ax^2 + bx + c = d \), where d is a constant, with no new techniques.  Why is this so? Draw a to illustrate your point.
         </li>
         <li>Use the app to experiment and develop an intuition for coefficients vs. shape, but answer the questions with exact answers, not estimates from the graph.
            <ol>
               <li>Fix \( a=1 \) .  For what values of \( b \) and \( c \) does the curve have two zeros?</li>
               <li>Fix \( c=-1, b=1 \).  For what value/s of \( a \) does the curve have one zero?</li>
               <li>The curve has two zeros.  What can be said about \( a, b, \) and \( c \) ?</li>
            </ol>
         
         </li>
         <!--
         <div style="text-align:center; margin-top:20px;">
            <iframe src="https://www.desmos.com/calculator/zukjgk9iry" name="frame_1" height="500" width="90%" title="Desmos"> </iframe>
         </div>
         -->
      </ol>
   </div>
   
   <div style="text-align:center; margin-top:20px;">
            <iframe src="https://www.desmos.com/calculator/zukjgk9iry" name="frame_1" height="500" width="90%" title="Desmos"> </iframe>
         </div>
</body>
</html>