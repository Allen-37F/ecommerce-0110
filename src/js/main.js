$( document ).ready(function() {
    console.log( "ready!" );

    var email;

    $('#signup-form').on('submit', function(e) {
      e.preventDefault();

      var userEmail = $('#signup-input').val();
      email = userEmail;

      if (userEmail === '' || userEmail === undefined) {
        wiggle('#signup-input', '40px', 40);
        $('#input-message').replaceWith('<div id="input-message" class="input-err">You didn\'t think we\'d check?</div>');
        $('.input-err').fadeIn(500).delay(2000).fadeOut(500);
      } else {
        $('#input-message').replaceWith('<div id="input-message" class="input-succ">Hang tight, we\'ll reach out!</div>');
        $('.input-succ').fadeIn(500).delay(2000).fadeOut(500);
      };
    });

    $('#emailForm').on('submit', function(e) {
      e.preventDefault();

      var userEmail = $('#header-email').val();
      email = userEmail;

      if (userEmail === '' || userEmail === undefined) {
        wiggle('#header-email', '30px', 40);
        $('#header-message').replaceWith('<div id="header-message" class="input-err">You didn\'t think we\'d check?</div>');
        $('.input-err').fadeIn(500).delay(2000).fadeOut(500);
      } else {
        $('#header-message').replaceWith('<div id="header-message" class="input-succ">Hang tight, we\'ll reach out!</div>');
        $('.input-succ').fadeIn(500).delay(2000).fadeOut(500);
      }
    })

  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {

      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

});

function wiggle(id, px, time) {
  $(id).animate({
    "margin-left": px
  },time);
  $(id).animate({
    "margin-left": '-'+px
  },time);
  $(id).animate({
    "margin-left": "0px"
  },time);
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
