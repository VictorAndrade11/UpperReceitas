(function(a) {
    a(window).on("load", function() {
        a(".loade").delay(0).fadeOut("slow");
        a(".preloader").delay(0).fadeOut("slow")
    });
    a("a[data-rel^=lightcase]").lightcase();
    a(".menu li ul").parent("li").children("a").addClass("dd-icon-down");
    a(".main-menu li ul").parent("li").children("a").addClass("dd-icon-right");
    a(document).on("click", ".header-bar", function() {
        a(".header-bar").toggleClass("close");
        a(".menu").toggleClass("open")
    });
    a(".mobile-menu-area ul li a").on("click", function(f) {
        var g = a(this).parent("li");
        if (g.hasClass("open")) {
            g.removeClass("open");
            g.find("li").removeClass("open");
            g.find("ul").slideUp(1000, "swing")
        } else {
            g.addClass("open");
            g.children("ul").slideDown(1000, "swing");
            g.siblings("li").children("ul").slideUp(1000, "swing");
            g.siblings("li").removeClass("open");
            g.siblings("li").find("li").removeClass("open");
            g.siblings("li").find("ul").slideUp(1000, "swing")
        }
    });
    a("ul").parent().on("hover", function() {
        var f = a(this).find("ul");
        var g = a(f).offset();
        if (g.left + f.width() > a(window).width()) {
            var h = -a(f).width();
            f.css({ left: h })
        }
    });
    a(function() {
        a(window).scroll(function() { if (a(this).scrollTop() > 300) { a(".scrollToTop").css({ bottom: "2%", opacity: "1", transition: "all .5s ease" }) } else { a(".scrollToTop").css({ bottom: "-30%", opacity: "0", transition: "all .5s ease" }) } });
        a(".scrollToTop").on("click", function() { a("html, body").animate({ scrollTop: 0 }, 500); return false })
    });
    a(function() {
        a(".product-view-mode").on("click", "a", function(f) {
            f.preventDefault();
            var g = a(".shop-product-wrap");
            var h = a(this).data("target");
            a(".product-view-mode a").removeClass("active");
            a(this).addClass("active");
            g.removeClass("grid list").addClass(h)
        })
    });
    a(document).on("click", ".search-start, .search-close", function() { a(".search-area").toggleClass("open") });
    var e = new Swiper(".banner-slider", { slidesPerView: 1, spaceBetween: 10, autoplay: { delay: 5000, disableOnInteraction: false, }, pagination: { el: ".banner-pagination", clickable: true, }, loop: true, });
    var e = new Swiper(".banner-slider-2", { slidesPerView: 1, spaceBetween: 10, autoplay: { delay: 5000, disableOnInteraction: false, }, pagination: { el: ".banner-pagination-2", clickable: true, }, loop: true, });
    var e = new Swiper(".food-slider", { slidesPerView: 8, autoplay: { delay: 2000, disableOnInteraction: false, }, navigation: { nextEl: ".food-slider-next", prevEl: ".food-slider-prev", }, loop: true, breakpoints: { 1024: { slidesPerView: 5, }, 992: { slidesPerView: 4, }, 576: { slidesPerView: 2, }, 340: { slidesPerView: 1, } } });
    a(".counter").counterUp({ delay: 10, time: 2000 });
    var e = new Swiper(".sponsor-slider", { slidesPerView: 6, spaceBetween: 10, autoplay: { delay: 5000, disableOnInteraction: false, }, breakpoints: { 992: { slidesPerView: 3, }, 576: { slidesPerView: 2, }, 420: { slidesPerView: 1, }, }, loop: true, });
    var e = new Swiper(".post-thumb-slider", { slidesPerView: 1, autoplay: { delay: 5000, disableOnInteraction: false, }, navigation: { nextEl: ".post-thumb-slider-next", prevEl: ".post-thumb-slider-prev", }, loop: true, });
    var b = a(".cart-plus-minus");
    b.prepend('<div class="dec qtybutton">-</div>');
    b.append('<div class="inc qtybutton">+</div>');
    a(".qtybutton").on("click", function() {
        var f = a(this);
        var h = f.parent().find("input").val();
        if (f.text() === "+") { var g = parseFloat(h) + 1 } else { if (h > 0) { var g = parseFloat(h) - 1 } else { g = 1 } }
        f.parent().find("input").val(g)
    });
    var c = new Swiper(".gallery-thumbs", { spaceBetween: 10, slidesPerView: 4, freeMode: true, watchSlidesVisibility: true, watchSlidesProgress: true, breakpoints: { 768: { slidesPerView: 3, }, 576: { slidesPerView: 2, }, 450: { slidesPerView: 1, } } });
    var d = new Swiper(".gallery-top", { spaceBetween: 10, autoplay: { delay: 3000, disableOnInteraction: false, }, thumbs: { swiper: c }, loop: true, });
    var c = new Swiper(".testi-thumbs", { spaceBetween: 20, slidesPerView: 1, freeMode: true, watchSlidesVisibility: true, watchSlidesProgress: true, loop: true });
    var d = new Swiper(".testi-top", { spaceBetween: 0, autoplay: { delay: 3000, disableOnInteraction: false, }, thumbs: { swiper: c }, loop: true })



}(jQuery));