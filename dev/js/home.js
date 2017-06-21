setTimeout(function() {
    function o() {
        $(".home-page").scrollLeft(($(document).width() - e) / 2), $(document).scrollTop(($(document).height() - $(window).height()) / 2)
    }

    function n() {
        992 > e && e > 0 && o(), 1600 > e && e > 992 && o(), 2e3 > e && e > 1600 && o(), 8e3 > e && e > 2e3 && o()
    }
    var e = $(window).width();
    n()
}, 1e3), $(".home-page .product").mouseenter(function() {
    $(this).find(".producthover").addClass("producthover--show"), $(this).find(".productcontainer").addClass("productcontainer--show")
}).mouseleave(function() {
    $(this).find(".producthover").removeClass("producthover--show"), $(this).find(".productcontainer").removeClass("productcontainer--show")
}), $(document).ready(function() {
    var o = "http://localhost:8888/wordpress/",
        n = function() {
            return window.location.href === o ? !0 : void 0
        };
    !n() == !0 && (window.location.href = o)
});
var curYPos = 0,
    curXPos = 0,
    curDown = !1;
window.addEventListener("mousemove", function(o) {
    curDown === !0 && window.scrollTo(document.body.scrollLeft + (curXPos - o.pageX), document.body.scrollTop + (curYPos - o.pageY))
}), window.addEventListener("mousedown", function(o) {
    curDown = !0, curYPos = o.pageY, curXPos = o.pageX
}), window.addEventListener("mouseup", function(o) {
    curDown = !1
});
