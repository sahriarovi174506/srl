(function ($) {
    "use strict";

    // ------- Prealoder ------
    $(window).on('load', function () {
        $("#preloader").delay(300).fadeOut("slow");
    });


    // Handle Menu on Sreen scrolling
    function MenuOnScrol() {
        const elementToModify = document.querySelector(".site_header");
        let lastScrollTop = 0;
        window.addEventListener("scroll", () => {
            const scrollTop = window.scrollY || window.pageYOffset;
            if (scrollTop > lastScrollTop && lastScrollTop > 200) {
                elementToModify.classList.add("sticky");
            } else if (lastScrollTop < 210) {
                elementToModify.classList.remove("menu_up");
                elementToModify.classList.remove("sticky");
            } else {
                elementToModify.classList.remove("menu_up");
            }
            if (scrollTop > lastScrollTop) {
                elementToModify.classList.add("menu_up");
            }
            lastScrollTop = scrollTop;
        });
    }


    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').addClass("topbtn_hide");
        } else {
            $('.back-to-top').removeClass("topbtn_hide");
        }
    });
    $('.back-to-top').on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0,
        }, 1500);


        // Menu Hide
        MenuOnScrol()
    });


    $(document).ready(function () {

        // header scroling
        MenuOnScrol()


        // Toggle Menu
        $('.navbar-toggler').click(function (e) {
            $('.navbar-collapse').toggleClass("show");
            setTimeout(function () {
                $('.navbar-collapse').toggleClass('fadein');
            }, 200);
            $(this).toggleClass("active");
            $('header').toggleClass("active");
        });


    });

})(jQuery);