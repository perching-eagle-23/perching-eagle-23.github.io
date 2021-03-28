<!doctype html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <title>Room 202 Math</title>
   <link href="styles/all.css" rel="stylesheet" type="text/css" />
   <!--
   <link href="styles/main.css" rel="stylesheet" type="text/css" />
   -->
   <!-- Load d3.js -->
   <script src="https://d3js.org/d3.v6.js"></script> 
   
   <script defer src="styles/nav.js" type="text/javascript"></script>
   <script defer src="collapsible.js" type="text/javascript"></script>
</head>
<body>
   <!-- <div class="header">
      <div class="header__navicon"></div>
      <h1 class="pagetitle"><a href="#">Room 202 Math</a></h1>
   </div>
   
   <div id="mySidenav" class="sidenav">
      <a href="javascript:void(0)" class="closebtn">&times;</a>
      <a href="../index.html">Home</a>
      <a href="topics/triangles.html">Topics</a>
      <a href="assignments/quadratic_eqns_1.html">Assignments</a>
   </div> -->
   
   <?php 
      $pagetitle = ''; 
      include("templates/headerandnav.php"); 
   ?>
   
   <div class="mainwrapper">
      <div class="subwrapper">
         <h1 class="subsection" id="sub1">Curriculum</h2>
         <div id="sub1content">
            <p>The overall learning objectives.  Click on a node to expand/collapse its component topics.  If on a small screen or not working, find the state's static version here: <a href="https://www.sde.idaho.gov/academic/shared/math/ICS-Mathematics.pdf" target="_blank">Idaho State Curriculum</a></p>
         </div>
      </div>
   </div>
</body>
</html>