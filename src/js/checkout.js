$(document).ready(function(){
  console.log( "ready!" );


// Lines 6 - 30 control the import of values from shipping into billing.
  $('#importShip').click(function(){
    if($('#checkboxImport').is(':checked')){
      $('#firstNameBill').val($('#firstNameShip').val());
      $('#lastNameBill').val($('#lastNameShip').val());
      $('#address1Bill').val($('#address1Ship').val());
      $('#address2Bill').val($('#address2Ship').val());
      $('#companyBill').val($('#companyShip').val());
      $('#cityBill').val($('#cityShip').val());
      $('#zipBill').val($('#zipShip').val());
      var state = $('#stateShip option:selected').val();
      $('#stateBill option[value=' + state + ']').attr('selected','selected');
      // validateBillShip();
    } else {
      $('#firstNameBill').val('');
      $('#lastNameBill').val('');
      $('#address1Bill').val('');
      $('#address2Bill').val('');
      $('#companyBill').val('');
      $('#cityBill').val('');
      $('#zipBill').val('');
      // validateBillShip();
    }
  });
});


// The following command validates every damn thing when the Submit button in the credit card window is clicked.
$("#masterBuy").click(function(event) {
  event.preventDefault();
  console.log("validating errything");

    var firstNameBill = $("#firstNameBill").val();
    var lastNameBill = $("#lastNameBill").val();
    var address1Bill = $("#address1Bill").val();
    var address2Bill = $("#address2Bill").val();
    var companyBill = $("#companyBill").val();
    var cityBill = $("#cityBill").val();
    var stateBill = $('#stateBill option:selected').val();
    var zipBill = $("#zipBill").val();
    var firstNameShip = $("#firstNameShip").val();
    var lastNameShip = $("#lastNameShip").val();
    var address1Ship = $("#address1Ship").val();
    var address2Ship = $("#address2Ship").val();
    var companyShip = $("#companyShip").val();
    var cityShip = $("#cityShip").val();
    var stateShip = $('#stateShip option:selected').val();
    var zipShip = $("#zipShip").val();
    var cardNum = $("cardNum").val();
    var ccvCode = $("ccvCode").val();
    var cardExp = $("cardExp").val();

    var message = " * You're missing input in a required field";
    var message2 = " * Please enter a valid numeric value";

    console.log("User is " + firstNameBill);

    if((zipShip.length >9) || (zipShip.length <4) || (zipBill.length >9) || (zipBill.length <4) || (firstNameBill.length < 1) || (lastNameBill.length < 1) || (address1Bill.length < 1) || (cityBill.length < 1) || (stateBill == "Select a state") || (firstNameShip.length < 1) || (lastNameShip.length < 1) || (address1Ship.length < 1)) {
      $('#errorList').append(message + "<br>")
    }

    else {
      $('#errorList').append("Your order was successful! Your 3 items are on their way to "+ cityShip + " and your credit card has been charged $110.11. Have a radical day!");
    };
    // if (lastName.length < 5 || lastName[0].toUpperCase() !== lastName[0]) {
    //   $('.error1').removeClass('hidden'); $('.error1').append(message2 + "<br>");
    // }

  });


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
