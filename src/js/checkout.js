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

  }
