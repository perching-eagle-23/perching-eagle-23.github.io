<!doctype html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <title>References</title>
   <link href="../styles/all.css" rel="stylesheet" type="text/css" />

   <!-- Load d3.js -->
   <script src="https://d3js.org/d3.v6.js"></script>
   <!-- MathJax -->
   <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
   <!-- Page specific -->
   <script defer src="../styles/nav.js" type="text/javascript"></script>
   <script defer src="triangles.js" type="text/javascript"></script>
</head>
<body>
   <?php 
      $pagetitle = 'References'; 
      include("../templates/headerandnav.php"); 
   ?>
   
   <div class="ouptut">
      <?php
         $db = new PDO("mysql:dbname=mathsite;host=localhost","root"); 
         $rows = $db->query("SELECT title, link, description FROM reference"); 
      ?> 
      <ul> 
      <?php
      foreach ($rows as $row) {
         ?>
         <li>
            <a href="<?= $row['link'] ?>" target="blank"><?= $row['title'] ?></a>
            : <?= $row['description'] ?>
         </li>
         <?php
      }
      ?>
      </ul>
   </div>
</body>