$( document ).ready(function() {
    console.log( "ready!" );

    var imgDisplayTime = 4000;
    var transition_speed = 0;

    var carouselSlide = $('.carouselBox');
    var listItems = carouselSlide.children('li');
    var listLen = listItems.length;
    var i = 0;

    var changeList = function() {

      listItems.eq(i).fadeOut(transition_speed, function () {
        i += 1;
        if (i === listLen) {
          i = 0;
        }
        listItems.eq(i).fadeIn(transition_speed);
      });

    };

    var reverseList = function() {

      listItems.eq(i).fadeOut(transition_speed, function () {
        i -= 1;
        if (i === listLen) {
          i = 0;
        }
        listItems.eq(i).fadeIn(transition_speed);
      });

    };

    listItems.not(':first').hide();

    var newInterval = function(){
      clearInterval(interval)
      imgDisplayTime = 4000;
      interval = setInterval(changeList, imgDisplayTime);
    }

    var interval = setInterval(newInterval, imgDisplayTime)
    newInterval(changeList, imgDisplayTime);


    $('.next').on('click', function() {
      newInterval();
      changeList();
    })

    $('.prev').on('click', function() {
      newInterval();
      reverseList();
    })

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
