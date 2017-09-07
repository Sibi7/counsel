if ($('#map').length > 0) {
    var map = new Map();
    map.init({
        selector: '#map',
        center: $('.concreate-adress').html(),
        zoom: 17,
        placemarks: [
            {
                address: $(".concreate-adress").html(),
                options: [
                    {key: 'draggable', value: false},
                    {key: 'iconLayout', value: 'default#image'},
                    {key: 'iconImageHref', value: '/img/icons/map-marker-icon.png'}
                ]
            }
        ]
    });
}

$(document).ready(function() {

    /*header slider*/
    $('.top-slider').owlCarousel({
        loop: true,
        margin: 0,
        responsiveClass: true,
        navText: ["<i class='fa fa-2x fa-angle-left'></i>", "<i class='fa fa-2x fa-angle-right'></i>"],
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 1,
                nav: true
            },
            1000: {
                items: 1,
                nav: true,
                loop: true
            }
        }
    });
    /*close*/

    /*go to top scroll*/
    $.fn.scrollToTop = function () {
        $(this).hide().removeAttr("href");
        if ($(window).scrollTop() >= "250") $(this).fadeIn("slow");
        var scrollDiv = $(this);
        $(window).scroll(function () {
            if ($(window).scrollTop() <= "250") {
                $(scrollDiv).fadeOut("slow")
            }
            else {
                $(scrollDiv).fadeIn("slow")
            }
        });
        $(this).click(function () {
            $("html, body").animate({scrollTop: 0}, "slow")
        })
    };
    $('#Go_Top').scrollToTop();
    /*close go to top scroll*/


    $(".header__menu__list").click(function () {
        $("#dropdown").slideToggle("slow", function () {
            // Animation complete.
        });
    });
    //js
    $(document).ready(function () {
        var link = $('.menu-link');
        var link_active = $('.menu-link_active');

        link.click(function () {
            link.toggleClass('menu-link_active');
        })
    });
    $(".menu-link").click(function () {
        $(".header__menu").slideToggle("slow", function () {
        });
    });

    /*services dropdown*/
    $(document).on('click', '.promotion__right-menu > li > a', function () {
        event.preventDefault();
        dropdownList = $(this).next('.dropdown');
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            dropdownList.slideUp(500);
        } else {
            $('.promotion__right-menu > li > a').removeClass('active');
            $('.promotion__right-menu > li > .dropdown').slideUp(500);
            $(this).addClass('active');
            dropdownList.slideDown(500);
        }
    });
    /*close*/

    /*rev slider*/
    $('.about__rev-slider').owlCarousel({
        loop: false,
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        margin: 0,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 1,
                nav: true
            },
            1000: {
                items: 1,
                nav: true
            }
        }
    });
    /*close*/
});