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
    $("h1").animate({color:"#ffffff"}, 600);
    $("h3").animate({color:"#ffffff"}, 600);
    $("header").animate({backgroundColor:"#131314", opacity:".99"}, 0);
	$('.concept-statement').waypoint(function(direction) {
		if (direction == "up") {
            $("h1").animate({color:"#ffffff"}, 600);
			$("body").animate({ backgroundColor: "#131314" }, 600);
            $("h3").animate({color:"#ffffff"}, 600);
            $("header").animate({backgroundColor:"#131314"}, 600);
		} else if (direction == "down") { 
            $("h1").animate({color:"#131314"}, 600);
            $("body").animate({ backgroundColor: "#ffffff" }, 600);
            $("h3").animate({color:"#131314"}, 600);
            $("header").animate({backgroundColor:"#ffffff", opacity:".99"}, 600);
		}
	},
	{offset: function() {
	   return 0;
	}
});
}); 




