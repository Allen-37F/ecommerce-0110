$( document ).ready(function() {
  console.log( 'sanity check' );

  function getProductInfo() {
    $.ajax({
      url: 'http://galvanize-student-apis.herokuapp.com/gcommerce/products'
    }).done(function(productInfo) {
      console.log(productInfo);

      productInfo.forEach(function(eachProduct) {
        $('.productList').append('<div class="fullProduct"><img class="productImage" src="images/productimg/' + eachProduct.id + '.jpeg"><p>' + eachProduct.description + '</p><br><p>' + eachProduct.price + '</p></div>')

      })

    }).fail(function(error) {
      console.log(error);
    });
  };
  getProductInfo();



});
