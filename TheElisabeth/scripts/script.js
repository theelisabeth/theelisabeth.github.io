/* $(document).ready(function(){       
            var scroll_pos = 0;
            $(document).scroll(function() { 
                scroll_pos = $(this).scrollTop();
                if(scroll_pos > 400) {
                    $("body").css('background-color', 'white');
                } else {
                    $("body").css('background-color', 'white');
                }
var tStart = 100 // Start transition 100px from top
  , tEnd = 400   // End at 400px
  , cStart = [46, 47, 47]  // Gray
  , cEnd = [255, 255, 255]   // white

$(document).ready(function(){
    $(document).scroll(function() {
        var p = ($(this).scrollTop() - tStart) / (tEnd - tStart); // % of transition
        p = Math.min(1, Math.max(0, p)); // Clamp to [0, 1]
        var cBg = [Math.round(cStart[0] + cDiff[0] * p), Math.round(cStart[1] + cDiff[1] * p), Math.round(cStart[2] + cDiff[2] * p)];
        $("body").css('background-color', 'rgb(' + cBg.join(',') +')');
    });
});
                   var alpha = Math.min(0.1 + 0.8 * $(this).scrollTop() / 200, 0.9);
        var channel = Math.round(alpha * 255);
        $("body").css('background-color', 'rgb(' + channel + ',' + channel + ',' + channel + ')');
            });
        });*/

$( document ).ready(function() {     
	console.log( "ready!" ); 
	$('.concept-statement').waypoint(function(direction) {
		if (direction == "up") {
			$("body").animate({ backgroundColor: "#131314" }, 500 );
		} else if (direction == "down") { 
			$("body").animate({ backgroundColor: "#ffffff" }, 500 );
		}
	},
	{offset: function() {
	   return 0;
	}
});
}); 




