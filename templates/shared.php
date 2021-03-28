<!doctype html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <title><?= $pagetitle ?></title>
</head>
<body>
   <h1><?= $pagetitle ?></h1>
   <nav id="mySidenav" class="sidenav">
      <a href="javascript:void(0)" class="closebtn">&times;</a>
      <a href= <?= $hostname . $projectpath?> >Home</a>
      <a href= <?= $hostname . $projectpath . "/topics/triangles.php"?> >Topics</a>
      <a href= <?= $hostname . $projectpath . "/assignments/quadratic_eqns_1.php"?> >Assignments</a>
      <a href= <?= $hostname . $projectpath . "/references/references.php"?> >References</a>
   </nav>