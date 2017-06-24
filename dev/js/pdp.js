var prodURL = "",
    prodNane = "123";
$(window).on("load", function() {
    $(".pdpinfo").hide(), $("body").on("click", ".moreinfo", function() {
        prodURL = $(this).attr("href"), console.log(prodURL), window.location.href = "http://localhost:8888/wordpress/#1";
        jQuery(this).data("id");
        return jQuery.ajax({
            url: prodURL,
            type: "POST",
            async: 0,
            data: {},
            success: function(o) {
                $(".pdpinfo").html(o), $(".woocommerce-Price-amount").appendTo(".in-stock"), $(".pdp-discription").append('<span class="menu-menu-closepdp">close</span>'), $("body").on("click", ".menu-menu-closepdp", function() {
                    $(".pdpinfo").delay(500).hide("slide", {
                        direction: "right"
                    }, 400), $(".pdpinfo").empty(), window.location.href = "http://localhost:8888/wordpress/#12"
                }), setTimeout(function() {
                    new Swiper(".swiper-container", {
                        loop: 0,
                        nextButton: ".swiper-button-next",
                        prevButton: ".swiper-button-prev",
                        pagination: ".swiper-pagination",
                        paginationClickable: 0,
                        effect: "cube",
                        grabCursor: 0,
                        cube: {
                            shadow: 0,
                            slideShadows: 0,
                            shadowOffset: 20,
                            shadowScale: .94
                        }
                    })
                }, 1e3)
            }
        }), $(".pdpinfo").delay(500).show("slide", {
            direction: "right"
        }, 400), !1
    })
});
