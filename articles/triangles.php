<!doctype html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <title>Triangles</title>
   <link href="../styles/article.css" rel="stylesheet" type="text/css" />

   <!-- Load d3.js -->
   <script src="https://d3js.org/d3.v4.js"></script>
   <!-- d3 map stuff ; working without now, irregular.  Map doesn't work with d3.v6-->
   <!-- <script src="https://d3js.org/d3-scale-chromatic.v1.min.js"></script> -->
   <!-- <script src="https://d3js.org/d3-geo-projection.v2.min.js"></script> -->
   <!-- d3 slider  -->
   <script src="https://unpkg.com/d3-simple-slider"></script>
   <!-- MathJax --> 
   <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
   <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
   <!-- Page specific.  "defer" means load after the page, instead of when the tag is encountered. -->
   <script defer src="../styles/nav.js" type="text/javascript"></script>
   <script defer src="triangles.js" type="text/javascript"></script>
</head>
<body>
  <!--  <div class="header">
      <div class="header__navicon"></div>
      <h1 class="pagetitle">
         <a href="../index.html">Room 202 Math</a>
         <a href=""> / Articles</a>
      </h1>
   </div>
   
   <div id="mySidenav" class="sidenav">
      <a href="javascript:void(0)" class="closebtn">&times;</a>
      <a href="../index.html">Home</a>
      <a href="#">Articles</a>
      <a href="#">Assignments</a>
   </div> -->
 <?php 
      $pagetitle = 'Articles / Triangles'; 
      include("../templates/headerandnav.php"); 
   ?>
   

   <div class="midsection">
      <h1>Why Triangles?</h1> 
      <p>Why is the math curriculum so concerned with the Pythagorean Theorem, the relation of triangle angles and sides, and trigonometric functions?</p>
      <p>Triangles are tied up with <em>distance</em>.  Distance is important, so triangles are important.</p>
      <!-- subsection 1 -->
      <h2 class="subsection" id="sub1">Distance and the Shape of Spaces</h2>
      <div id="sub1content">
         <p>Here is an unusual "triangle".  It has three right angles, for an angle sum of \( 270^{\circ} \).</p>
         
         <h2><span class="eqn">\(\angle{a} + \angle{b} + \angle{c} = ?\)</span></h2>
         <div class="svg_wrapper" id="globe">
            <svg class="large_graphic" id="triangle_on_sphere" height=400 width=600> 
            </svg>
         </div>
         
         <p>Clearly, this is not quite a triangle in the sense in which we've defined it so far. <span class="definition">Triangle \( :=  \) A polygon composed of three line segments connecting any three points in the plane which are not colinear.</span> Here's a broader definition.  <span class="definition">Triangle-y thing \( :=  \) A shape composed of the three shortest paths in a space between any three points in that space which are not on a the same path.</span>  (If you want to look more into it the shortest path on a surface is called a  <em>geodesic.</em>)</p>
         
         <p>You know that if a surface is flat, the angle sum of a triangle is \(180^{\circ}\). The <!-- BUILD FLAG : popup definition --> <a href="">contrapositive</a> is more interesting: if the angle sum of a triangle is not \(180^{\circ}\), it is on a curved surface.</p>
         
         <p>Why should we care about spaces that are flat (Euclidean spaces)?  Because they're easier.</p>
         
         <p>
            <img src="https://research.umn.edu/sites/research.umn.edu/files/ligo-hanford-aerial-02-blog.jpg" alt="Hanford LIGO Detector" style="width:30%; float:right;">
            <div class="keep_left" style="width: 65%;">Why should we care about spaces that are not flat?  Because not all physical geometries are actually flat. For example, when one is walking along a geodesic on Earth's surface, one cannot tell that it is not a flat line without travelling quite some distance: but, over long distances, failing to account for this will cause issues. Here is the LIGO detector at Hanford, a double example of this. It measures the warping, by gravitational waves, of 3D space away from its usual flatness.  In order to do so, it needs long, straight arms at right angles; and, in order to build them with sufficient accuracy, its designers needed to account for the curvature of Earth.
            </div>
         </p>
      </div>
      
      <h2 class="subsection" id="sub2">Circles and Cycles</h2>
      <div id="sub2content">
         <p>Triangles can define circles, because circles are the shape with a constant distance from some point; circles define cycles, so cyclic behavior can be described by trigonometric functions.</p>
      </div>
      
      <h2 class="subsection" id="sub3">Distance in Higher Dimensional Spaces and Image Interpolation</h2>
      <div id="sub3content">
         <p>The Pythagorean Theorem extends straightforwardly to higher dimensions.  In the following list, "d" means the distance between two points, and terms on the right hand side are the distance between the points on a given axis.   
            <ul class="definition">
               <li><span class="eqn">2D : \( d^2 := x^2 + y^2 \)</span></li>
               <li><span class="eqn">3D : \( d^2 := x^2 + y^2 + z^2 \)</span></li>
               <li><span class="eqn">nD : \( \begin{eqnarray*} d^2 := \sum_{i=1}^n x_i^2 \end{eqnarray*} \) with n any positive integer</span></li>
            </ul>
         </p>
         
         <p>We cannot visualize higher dimensional spaces fully; the trick is not to try, and to let all the algebra chops we've been developing pay off.  Trusting in the equations we've justified in dimensions we can picture, we can apply the methods of Euclidean geometry to such spaces, often with extremely powerful results.</p>
         
         <p>One such result is the ability to take the "average" of two images.  Note that the operation "find the midpoint" makes sense in 2 in and in 3 dimensions.  We'll define the average of two points as their midpoint; encode the information of our image as a point in a large dimensional Euclidean space; and find the average of two images as the midpoint of their two points.</p>
      </div>
      
      <!-- <div class="svg_wrapper">
         <img src="https://research.umn.edu/sites/research.umn.edu/files/ligo-hanford-aerial-02-blog.jpg" alt="Girl in a jacket">
      </div> -->
   </div>
</body>
</html>