$( window ).on('load', function() {
  var windowsize = $(window).width();

  function centerload() {
    if (windowsize < 992 && windowsize > 0) {
      var winwidth = $( window ).width();
      var docwidth = 1500;
      var sizewidth = (docwidth - winwidth);
      var haflfscrollleft = sizewidth / 2;
      var winheight = $( window ).height();
      var docheight = 1900;
      var sizeheight = (docheight - winheight);
      var haflfscrolltop = sizeheight / 2;
      $('.home-page').scrollLeft( haflfscrollleft );
      $('.home-page').scrollTop( haflfscrolltop );
    }
    if (windowsize < 1600 && windowsize > 992) {
      var winwidth = $( window ).width();
      var docwidth = 1650;
      var sizewidth = (docwidth - winwidth);
      var haflfscrollleft = sizewidth / 2;
      var winheight = $( window ).height();
      var docheight = 1900;
      var sizeheight = (docheight - winheight);
      var haflfscrolltop = sizeheight / 2;
      $('.home-page').scrollLeft( haflfscrollleft );
      $('.home-page').scrollTop( haflfscrolltop );
    }
    if (windowsize < 2000 && windowsize > 1600) {
      var winwidth = $( window ).width();
      var docwidth = 2000;
      var sizewidth = (docwidth - winwidth);
      var haflfscrollleft = sizewidth / 2;
      var winheight = $( window ).height();
      var docheight = 1900;
      var sizeheight = (docheight - winheight);
      var haflfscrolltop = sizeheight / 2;
      $('.home-page').scrollLeft( haflfscrollleft );
      $('.home-page').scrollTop( haflfscrolltop );
    }
    if (windowsize < 8000 && windowsize > 2000) {
      var winwidth = $( window ).width();
      var docwidth = 1900;
      var sizewidth = (docwidth - winwidth);
      var haflfscrollleft = sizewidth / 2;
      var winheight = $( window ).height();
      var docheight = 2400;
      var sizeheight = (docheight - winheight);
      var haflfscrolltop = sizeheight / 2;
      $('.home-page').scrollLeft( haflfscrollleft );
      $('.home-page').scrollTop( haflfscrolltop );
    }
  }
  centerload();

  $('.producthover').hide();
  $('.productcontainer').hide();

});

function hoveroverprod() {
  $('.product').mouseenter( function() {
    $(this).find('.producthover').show('fast');
    $(this).find('.productcontainer').show('fast');
  });
}

function hoveroutprod() {
  $('.product').mouseleave( function() {
    $(this).find('.producthover').hide('fast');
    $(this).find('.productcontainer').hide('fast');
  });

}

var curYPos = 0,
  curXPos = 0,
  curDown = false;

window.addEventListener('mousemove', function(e){
  if(curDown === true){
    window.scrollTo(document.body.scrollLeft + (curXPos - e.pageX), document.body.scrollTop + (curYPos - e.pageY));
  }
});

window.addEventListener('mousedown', function(e){ curDown = true; curYPos = e.pageY; curXPos = e.pageX; });
window.addEventListener('mouseup', function(e){ curDown = false; });
