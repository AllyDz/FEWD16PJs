


  
  $('.readmore').click(
    function(){ 
        console.log(".readmore");

        $('#show-this-on-click').slideDown();
        console.log(".post p");

        // $('.post p').slideDown(); < This also
        // console.log(".post p"); < Works to show more

        $('.readmore').hide();
        console.log(".hide");

        $('.readless').show();
        console.log(".show");

        return false;

    }
  );

  $('.readless').click(
    function(){
        console.log(".readless");

        $('.hide').slideUp();
        console.log(".hide");

        $('.readmore').show(); 
        // function(){
        //     $('.readmore').show();
        // }
        console.log(".show");

        $('.readless').hide();
        console.log(".hide");

        return false;

    }
  );

$('.learnmore').click(
    function(){
        console.log(".learnmore");

        $('.learnmore').hide();
        console.log(".hide");

        $('#learnmoretext').slideDown();
        console.log("#learnmoretext");

        return false;

    }
  );
});
  