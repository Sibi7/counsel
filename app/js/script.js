$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        responsiveClass:true,
        navText: ["<i class='fa fa-2x fa-angle-left'></i>","<i class='fa fa-2x fa-angle-right'></i>"],
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:1,
                nav:false
            },
            1000:{
                items:1,
                nav:true,
                loop:true
            }
        }
    });
    // $('.car').owlCarousel({
    //     loop:true,
    //     margin:0,
    //     nav: false,
    //     responsiveClass:true,
    //     // navText: ["<i class='fa fa-2x fa-angle-left'></i>","<i class='fa fa-2x fa-angle-right'></i>"],
    //     responsive:{
    //         0:{
    //             items:1,
    //             nav:true
    //         },
    //         600:{
    //             items:1,
    //             nav:false
    //         },
    //         1000:{
    //             items:1,
    //             nav:false,
    //             loop:true
    //         }
    //     }
    // })
});