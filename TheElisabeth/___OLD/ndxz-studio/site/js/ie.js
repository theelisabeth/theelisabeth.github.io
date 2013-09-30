   1. function ndxz_contented() 
   2. { 
   3.     var frame_x = $('body').width(); 
   4.     $('#menu').css('width', 215);
   5.     $('#content').css('width', frame_x-215);
   6. }
   7. $(document).ready( function() { ndxz_contented(); } );
   8. $(window).resize( function() { ndxz_contented(); } );