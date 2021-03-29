<?php// include("../configuration/config.php"); ?>

<div class="header">
   <div class="header__navicon"></div>
   <h1 class="pagetitle">
      <a href="/">
         Room 202 Math<?= " / ".$pagetitle ?>
      </a>
   </h1>
</div>
   
<div id="mySidenav" class="sidenav">
   <a href="javascript:void(0)" class="closebtn">&times;</a>
   <a href= <?= $hostname . $projectpath?> >Home</a>
   <a href= <?= $hostname . $projectpath . "/topics/triangles.php"?> >Topics</a>
   <a href= <?= $hostname . $projectpath . "/assignments/quadratic_eqns_1.php"?> >Assignments</a>
   <a href= <?= $hostname . $projectpath . "/references/references.php"?> >References</a>
</div>