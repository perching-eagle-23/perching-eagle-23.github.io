<!doctype html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <title>Triangles</title>
   <link href="../styles/article.css" rel="stylesheet" type="text/css" />
   

   <!-- Load d3.js -->
   <script src="https://d3js.org/d3.v6.js"></script>
   <!-- MathJax -->
   <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
   <!-- Page specific -->
   <script defer src="../styles/nav.js" type="text/javascript"></script>
   <script defer src="quadratic_eqns_1.js" type="text/javascript"></script>
</head>
<body>
   <!-- <div class="header">
      <div class="header__navicon"></div>
      <h1 class="pagetitle">
         <a href="../index.html">Room 202 Math</a>
         <a href=""> / Assignments</a>
      </h1>
   </div>
   
   <div id="mySidenav" class="sidenav">
      <a href="javascript:void(0)" class="closebtn">&times;</a>
      <a href="../index.html">Home</a>
      <a href="#">Articles</a>
      <a href="#">Assignments</a>
   </div> -->
   <?php 
      $pagetitle = 'Quadratic Equations 1'; 
      include("../templates/headerandnav.php"); 
   ?>


   <div class="midsection">
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
         <li>To "find the zeros" of a quadratic expression is to find the value/s of x for which the equation \( ax^2 + bx + c = 0 \) holds.  Once you know how to do this, you can solve an equation of the form \( ax^2 + bx + c = d \), where d is a constant, with no new techniques.  Why is this so? Draw sketches to illustrate your point.
         </li>
         <li>Experiment with zeros.</li>
         
         <div style="text-align:center; margin-top:20px;">
            <iframe src="https://www.desmos.com/calculator/zukjgk9iry" name="frame_1" height="500" width="90%" title="Desmos"> </iframe>
         </div>
      </ol>
   </div>
</body>
</html>