$( window ).on('load', function() {
  var windowsize = $(window).width();

  function accrdiangrowsize() {
    if (windowsize < 992) {
      $('.menu-closing-main').on("click", function() {
        if ($('.menu').hasClass('menu-close')) {
          $('.menu').animate({'width': wthSelected});
          $('.menu-closing-main').addClass('menu-menu-close');
        } else {
          $('.menu').animate({'width':'45'});
          $('.menu-closing-main').removeClass('menu-menu-close');
        }
        $('.menu').toggleClass('menu-close');
        $('.menu').toggleClass('overflow');
        removeaccordian();
      })
    } else {
      $('.menu-closing-main').on("click", function() {
        if ($('.menu').hasClass('menu-close')) {
          $('.menu').animate({'width': wthSelected});
          $('.menu-closing-main').addClass('menu-menu-close');
          $('.menu-logo').css('z-index', '0');
          $('.menu-logo').hide(200);
        } else {
          $('.menu').animate({'width':'45'});
          $('.menu-closing-main').removeClass('menu-menu-close');
          $('.menu-logo').delay( 200 ).queue(function (next) {
            $('.menu-logo').css('z-index', '4000');
            $('.menu-logo').show(10);
            $('.menu-logo').dequeue();
          });
        }
        $('.menu').toggleClass('menu-close');
        $('.menu').toggleClass('overflow');
        removeaccordian();
      })
    }
  }

  if (windowsize < 992) {
    function accrdiangrowsizesmall() {
      wthSelected = '75%';
      accrdiangrowsize();
    }
    accrdiangrowsizesmall();
  } else {
    function accrdiangrowsizelarge() {
      wthSelected = '33.3333333%';
       accrdiangrowsize();
     }
     accrdiangrowsizelarge();
  }

  function removeaccordian() {
    if ($('.menu').hasClass('menu-close')) {
      // $('.menu-elements').accordion("destroy");
      // $('.menu-info').accordion("destroy");
    } else {
      $('.menu-elements').accordion({
        collapsible: true,
        autoHeight: true,
        clearStyle: true,
        active: false,
        heightStyle: "content",
      });
      $('.menu-info').accordion({
        collapsible: true,
        autoHeight: true,
        clearStyle: true,
        active: false,
        heightStyle: "content",
      });
    }
  }
  removeaccordian();
});
