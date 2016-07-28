$(document).ready(function(){
  console.log( "ready!" );

  $('#importShip').click(function(){
    $('#firstNameBill').val($('#firstNameShip').val());
    $('#lastNameBill').val($('#lastNameShip').val());
    $('#address1Bill').val($('#address1Ship').val());
    $('#address2Bill').val($('#address2Ship').val());
    $('#cityBill').val($('#cityShip').val());
    $('#zipBill').val($('#zipShip').val());
    var state = $('#stateShip option:selected').val();
    $('#stateBill option[value=' + state + ']').attr('selected','selected');

  });
});
