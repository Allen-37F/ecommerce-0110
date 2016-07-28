$(document).ready(function(){
  console.log( "ready!" );

  $('#importShip').click(function(){
    if($('#checkboxImport').is(':checked')){

      $('#firstNameBill').val($('#firstNameShip').val());
      $('#lastNameBill').val($('#lastNameShip').val());
      $('#address1Bill').val($('#address1Ship').val());
      $('#address2Bill').val($('#address2Ship').val());
      $('#cityBill').val($('#cityShip').val());
      $('#zipBill').val($('#zipShip').val());
      var state = $('#stateShip option:selected').val();
      $('#stateBill option[value=' + state + ']').attr('selected','selected');
      validateBillShip();
    } else {
      $('#firstNameBill').val((''));
      $('#lastNameBill').val((''));
      $('#address1Bill').val((''));
      $('#address2Bill').val((''));
      $('#cityBill').val((''));
      $('#zipBill').val((''));
      validateBillShip();

    }
  });
});

  function validateBillShip() {
    console.log("validating billing and shipping fields")
  }

// this handles the dropdown in the nav bar
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
  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
