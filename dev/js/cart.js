$( window ).on('load', function() {

  $('.cart-menu').hide();

  function cartopen() {
    if ($('.cart-menu-icon').hasClass('menu-menu-close-cart')) {
      $('.cart-menu-icon').removeClass('menu-menu-close-cart');
      $('.cart-menu').hide("slide", { direction: "right" }, 400);
      $('.menu-logo').show(10);
      $('.menu-elements-cart').delay( 300 ).queue(function (next) {
        $('.menu-elements-cart').accordion("destroy");
      });
    } else {
      $('.cart-menu-icon').addClass('menu-menu-close-cart');
      $('.cart-menu').show("slide", { direction: "right" }, 400);
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
