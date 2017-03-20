$( window ).on('load', function() {

  $(".pdpinfo").hide();
  $('body').on( 'click', '.moreinfo', function() {
    window.location.href = 'http://localhost:8888/wordpress/#127';
    var post_id = jQuery(this).data('id');
  	jQuery.ajax({
  		url : 'http://localhost:8888/wordpress/product/gf-ddfgh-h-gfd-hdfg/',
  		type: 'POST',
      async: true,
  		data : {

  		},
  		success : function( response ) {
  			$('.pdpinfo').html( response );
        $('.woocommerce-Price-amount').appendTo( ".in-stock" );
        $('.pdp-discription').append( '<span class="menu-menu-closepdp">close</span>' );
        $('body').on( 'click', '.menu-menu-closepdp', function() {
          $('.pdpinfo').delay(500).hide("slide", { direction: "right" }, 400);
          $('.pdpinfo').empty();
          window.location.href = 'http://localhost:8888/wordpress/#';
        });

        $('.swiper-container').data('swiper').reInit();
        var mySwiper = new Swiper ('.swiper-container', {
          paginationClickable: true,
          loop: true,
          direction: 'horizontal',
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
          pagination: '.swiper-pagination',
          paginationClickable: true
        })
  		}
  	});
    $(".pdpinfo").delay(500).show("slide", { direction: "right" }, 400);
	  return false;
  })

});

$(document).ready( function() {
  var testpageURL = function() {
    if (window.location.href === 'http://localhost:8888/wordpress/') {
      return true;
    }
  };
  if (!testpageURL() === true) {
    window.location.href = 'http://localhost:8888/wordpress/';
  }
});


$( window ).on('load', function() {
  $(".checkoutajax").hide();
  $('.checkout-button').on( 'click', function() {
    $('.cart-menu').hide("slide", { direction: "right" }, 400);
    $('.menu-elements-cart').delay( 300 ).queue(function (next) {
      $('.menu-elements-cart').accordion("destroy");
    });
    var post_id = jQuery(this).data('id');
    jQuery.ajax({
      url : 'http://localhost:8888/wordpress/checkout/',
      type: 'POST',
      async: true,
      data : {
      },
      success : function( response ) {
        $('.checkoutajax').html( response );
        $('.woocommerce-billing-fields').prepend( '<span class="menu-menu-closecheckout">close</span>' );
        $(document).on( 'click', '.menu-menu-closecheckout', function() {
          console.log('dasffas');
          $('.checkoutajax').hide("slide", { direction: "right" }, 800);
        });
      }
    });
    $(".checkoutajax").delay(500).show("slide", { direction: "right" }, 800);
    return false;
  })
});
