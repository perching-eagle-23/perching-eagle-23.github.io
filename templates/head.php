<!doctype html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <title><?= $pagetitle ?></title>
   <link href="http://localhost/learn/persistence/math/main/styles/all.css" rel="stylesheet" type="text/css" />
   <!-- Load d3.js.  Even if there are no shiny d3 gizmos in a page, other scripts use d3 for concise element selection. -->
   <script src='https://d3js.org/d3.v6.js'></script>
   <!-- Navbar functionality -->
   <script defer src="http://localhost/learn/persistence/math/main/styles/nav.js" type="text/javascript"></script>
   <?php
      // Include page specific scripts. 
      if (isset($pagescripts)) {
         print($pagescripts); 
      }
   ?>
</head>
<body>
   <div class="header">
      <div class="header__navicon"></div>
      <h1 class="pagetitle">
         <a href="http://localhost/learn/persistence/math/main">
            <?= $pagetitle ?>
         </a>
      </h1>
   </div>
   
   <nav id="mySidenav" class="sidenav">
      <a href="javascript:void(0)" class="closebtn">&times;</a>
      <a href="http://localhost/learn/persistence/math/main">Home</a>
      <a href="http://localhost/learn/persistence/math/main/assignments">Assignments</a>
      <a href="http://localhost/learn/persistence/math/main/topics">Topics</a>
      <a href="http://localhost/learn/persistence/math/main/resources/resources.php">Resources</a>
   </nav>
