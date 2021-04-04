<?php 
   //echo realpath(''); 
   // $root = "http://localhost/learn/room202/persistence";
   $root = "https://perching-eagle-23.github.io/";
?>

<!doctype html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <title><?= $pagetitle ?></title>
   <link href="<?= $root . '/styles/all.css' ?>" rel="stylesheet" type="text/css" />
   <!-- Load d3.js.  Even if there are no shiny d3 gizmos in a page, other scripts use d3 for concise element selection. -->
   <script src='https://d3js.org/d3.v6.js'></script>
   <!-- Navbar functionality -->
   <script defer src="<?= $root . '/styles/nav.js' ?>" type="text/javascript"></script>
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
         <a href="<?= $root ?>">
            <?= $pagetitle ?>
         </a>
      </h1>
   </div>
   
   <nav id="mySidenav" class="sidenav">
      <a href="javascript:void(0)" class="closebtn">&times;</a>
      <a href="<?= $root ?>">Home</a>
      <a href="<?= $root . '/assignments' ?>">Assignments</a>
      <a href="<?= $root . '/topics' ?>">Topics</a>
      <a href="<?= $root . '/resources' ?>">Resources</a>
   </nav>
