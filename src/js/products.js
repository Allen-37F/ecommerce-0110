$( document ).ready(function() {
  console.log( 'sanity check' );

  var allProducts = [];

  function getProductInfo() {
    $.ajax({
      url: 'http://galvanize-student-apis.herokuapp.com/gcommerce/products',
    }).done(function(productInfo) {
      console.log(productInfo);

      productInfo.forEach(function(info) {
        allProducts.push(new product(info.description, info.id, info.price, info.size))
      })
      console.log(allProducts);
      console.log(typeof allProducts[1].price);
    }).fail(function(error) {
      console.log(error);
    });

    allProducts.forEach(appendToDom(this));

  };
  getProductInfo();

  $('#filterPrice').change(function() {
    var filterPrice= $('#filterPrice').val();
    if (filterPrice === 'cheap') {
      $()
    }
  })


});

function product(desc, id, price, size) {
  this.description = desc;
  this.id = id;
  this.price = parseFloat(price.replace('$', ''));
  this.size = sizeOfBoard(size);
  this.img = 'images/productimg/' + id + '.jpeg';
}

function appendToDom(eachProduct) {
  $('.productList').append('<div class="product' + eachProduct.id + ' ' + eachProduct.size + '"><img class="productImage" src="' + eachProduct.img + '"><p class="description">' + eachProduct.description + '</p><br><p class="price">$' + eachProduct.price + '</p><br><p class="' + eachProduct.size + '">' + eachProduct.size + '</p></div>');
  console.log('test');
  console.log(allProducts);
}

function sizeOfBoard(num) {
  if (num < 2) {
    return "Fingerboard";
  } else if (num < 4) {
    return "Skateboard";
  } else {
    return "Longboard";
  }
}
