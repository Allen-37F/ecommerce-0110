$( document ).ready(function() {
    console.log( "ready!" );

    var allPhotos = $('.carouselBox li');

    console.log(allPhotos);

    function cyclePhotos () {
      for(li in allPhotos) {
        $('li').css('display', 'inline-block');
        $('li').fadeIn(200).delay(2000).fadeOut(200);
        
      }
    }


    //This code works, but won't reset the timer or cycle images on it's own once clicked. Gonna start fresh.

    // var currentIndex = 0,
    // items = $('.carouselBox li'),
    // itemAmt = items.length;
    //
    // function cycleItems() {
    //   var item = $('.carouselBox li').eq(currentIndex);
    //   items.hide();
    //   item.css('display','inline-block');
    // }
    //
    // var autoSlide = setInterval(function() {
    //   currentIndex += 1;
    //   if (currentIndex > itemAmt - 1) {
    //     currentIndex = 0;
    //   }
    //   cycleItems();
    // }, 3000);
    //
    // $('.next').click(function() {
    //   clearInterval(autoSlide);
    //   currentIndex += 1;
    //   if (currentIndex > itemAmt - 1) {
    //     currentIndex = 0;
    //   }
    //   cycleItems();
    // });
    //
    // $('.prev').click(function() {
    //   clearInterval(autoSlide);
    //   currentIndex -= 1;
    //   if (currentIndex < 0) {
    //     currentIndex = itemAmt - 1;
    //   }
    //   cycleItems();
    // });

});
