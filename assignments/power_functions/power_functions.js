window.onload = function(){
   attachNavHandlers();
   
   // turn on equation numbering
   window.MathJax = {
      tex: {
         tags: 'ams'
      }
   };
};