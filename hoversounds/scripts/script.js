$(document).ready(function(){
 
        animationmouseover('.circle-c', 'bounce');
        animationmouseover('.circle-d', 'bounce');
        animationmouseover('.circle-e', 'bounce');
        animationmouseover('.circle-f', 'bounce');
        animationmouseover('.circle-g', 'bounce');
        animationmouseover('.circle-a', 'bounce');
        animationmouseover('.circle-b', 'bounce');
        animationmouseover('.circle-ch', 'bounce');
        animationmouseover('.circle-special', 'bounce');

        $('audio').each(function(){
            this.volume = 0.3;
        });

        $("#audio").attr("id", "audio-0");
            $(".circle-c").mouseover(function(){
              $("#audioc").trigger('play');
        });

            $(".circle-d").mouseover(function(){
              $("#audiod").trigger('play');
        });
            $(".circle-e").mouseover(function(){
              $("#audioe").trigger('play');
        });
            $(".circle-f").mouseover(function(){
              $("#audiof").trigger('play');
        });
            $(".circle-g").mouseover(function(){
              $("#audiog").trigger('play');
        });
            $(".circle-a").mouseover(function(){
              $("#audioa").trigger('play');
        });
            $(".circle-b").mouseover(function(){
              $("#audiob").trigger('play');
        });
            $(".circle-ch").mouseover(function(){
              $("#audioch").trigger('play');
        });
            $(".circle-special").mouseover(function(){
              $("#audioch, #audioe, #audiog, #audioyeah").trigger('play');
        });
            $("h1").mouseover(function(){
              $("#audiob").trigger('play');
              $("#audioe").trigger('play');
              $("#audiog").trigger('play');
        });


  function animationmouseover(element, animation){
      element = $(element);
      element.mouseover(
          function() {
              element.addClass('animated ' + animation);          
              //wait for animation to finish before removing classes
              window.setTimeout( function(){
                  element.removeClass('animated ' + animation);
              }, 800);           
           })  
           }  
           }); 
