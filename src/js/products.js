$( document ).ready(function() {
  console.log( 'sanity check' );

  var allProducts = [];

  function getProductInfo() {
    $.ajax({
      url: 'http://galvanize-student-apis.herokuapp.com/gcommerce/products',
    }).done(function(productInfo) {

      productInfo.forEach(function(info) {
        allProducts.push(new Product(info.description, info.id, info.price, info.size))
      })
      console.log(allProducts);

      allProducts.forEach(function (item) {
        return appendToDom(item);
      })
    }).fail(function(error) {
      console.log(error);
    });


  };
  getProductInfo();

  $('#filterPrice').change(function() {
    var filterPrice= $('#filterPrice').val();
    if (filterPrice === 'product') {
      $('.product').show();
    } else if (filterPrice === 'cheap') {
      $('.product').hide();
      $('.cheap').show();
    } else if (filterPrice === 'expensive') {
      $('.product').hide();
      $('.expensive').show();
    }
  })

  $('#filterSize').change(function() {
    var filterSize= $('#filterSize').val();
    if (filterSize === 'product') {
      $('.product').show();
    } else if (filterSize === 'Fingerboard') {
      $('.product').hide();
      $('.Fingerboard').show();
    } else if (filterSize === 'Skateboard') {
      $('.product').hide();
      $('.Skateboard').show();
    } else if (filterSize === 'Longboard') {
      $('.product').hide();
      $('.Longboard').show();
    }
    console.log(filterSize);
  })

  $('#emailForm').on('submit', function(e) {
    e.preventDefault();

    var userEmail = $('#header-email').val();
    email = userEmail;

    if (emailValidator(userEmail)) {
      wiggle('#header-email', '30px', 40);
      $('#header-message').replaceWith('<div id="header-message" class="input-err">You didn\'t think we\'d check?</div>');
      $('.input-err').fadeIn(500).delay(2000).fadeOut(500);
    } else {
      $('#header-message').replaceWith('<div id="header-message" class="input-succ">Hang tight, we\'ll reach out!</div>');
      $('.input-succ').fadeIn(500).delay(2000).fadeOut(500);
      $('#header-email').val('');
    };
  });

});

function Product(desc, id, price, size) {
  this.description = desc;
  this.id = id;
  this.price = parseFloat(price.replace('$', '')).toFixed(2);
  this.range = priceRanges(price);
  this.size = sizeOfBoard(size);
  this.img = 'images/productimg/' + id + '.jpeg';
}

function appendToDom(eachProduct) {
  $('.productList').append('<div class=" product product' + eachProduct.id + ' ' + eachProduct.size + ' ' + eachProduct.range + '"><img class="productImage" src="' + eachProduct.img + '"><p class="' + eachProduct.size + '">' + eachProduct.size + '</p><p class="description">' + eachProduct.description + '</p><p>$' + eachProduct.price + '</p></div>');
}

function priceRanges(num) {
  var price = parseFloat(num.replace('$', '')).toFixed(2);
  if (price <= 50) {
    return 'cheap';
  }
  return 'expensive';
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
};

function emailValidator(email) {
  var specChar = "<>!#$%^&*()[]{}?:;|\"',/~`=";
  if (email === '' || email === undefined || email.length < 7 || !email.includes('@') || !email.includes('.') || email.includes('@.') || email.indexOf('@') === 0 || email.indexOf('.') === email.length-1 || specCharCheck(specChar, email)) {
    return true;
  } else {
    return false;
  };
};
