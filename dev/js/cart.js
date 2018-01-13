$( window ).on('load', function() {

  $('.cart-menu').hide();


  function removeItem() {
    $('.cart-remove').on("click", function() {
      console.log('dgfhfd');
      return jQuery.ajax({
        url: 'http://localhost:8888/removeproduct.php',
        type: "POST",
        async: 0,
        data: {},
      });
    });
  }

  function cartopen() {
    if ($('.cart-menu-icon').hasClass('menu-menu-close-cart')) {
      $('.cart-menu-icon').removeClass('menu-menu-close-cart');
      $('.cart-menu').removeClass('cart-menu--open');
      $('.cart-menu').hide("slide", { direction: "right" }, 400);
      $('.menu-logo').show(10);
      removeItem();
      $('.menu-elements-cart').delay( 300 ).queue(function (next) {
        // $('.menu-elements-cart').accordion("destroy");
      });
    } else {
      $('.cart-menu-icon').addClass('menu-menu-close-cart');
      setTimeout( function() {
        $('.cart-menu').addClass('cart-menu--open');
      }, 400)
      $('.cart-menu').show("slide", { direction: "right" }, 400);
      removeItem();
      $('.menu-elements-cart').accordion({
        collapsible: true,
        autoHeight: true,
        clearStyle: true,
        active: false,
        heightStyle: "content",
      });
    }
  }

  $('.cart, .menu-content-cart .menu-closing').on('click', function() {
    cartopen();
  })

});
