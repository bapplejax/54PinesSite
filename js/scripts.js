/* ---------------------------------------------
 common scripts
 --------------------------------------------- */
(function ($) {
    "use strict"; // use strict to start
    //Home Screen Optimize
    //==============================
    (function () {
        /* ---------------------------------------------
         st preloader init
         --------------------------------------------- */
        $(window).load(function () {
            $('#st-preloader').fadeOut();
            $('.st-preloader-circle').delay(350).fadeOut('slow');
        });

        ////////////////////////////////////////////////////////////////////
        // full screen home section
/////////////////////////////////////////////////////////////////////

        var slideHeight = $(window).height();
        $('.section-height').css('height', slideHeight);

        $(window).resize(function () {
            $('.section-height').css('height', slideHeight);

        });

        ////////////////////////////////////////////////////////////////////
        //logo carousel
/////////////////////////////////////////////////////////////////////

        $('.client-logo').owlCarousel({
            pagination: false,
            items: 5
        });
        //blog-thumb
        $('#post-slider').owlCarousel({
            pagination: false,
            singleItem: true,
            navigation: true,
            navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            autoPlay: true
        });
////////////////////////////////////////////////////////////////////
//single portfolio carousel
/////////////////////////////////////////////////////////////////////

        $('.single-portfolio-carousel').owlCarousel({
            pagination: true,
            singleItem: true

        });


        // ----------------------------------------------
        //  Isotope Filter
        // ----------------------------------------------
        (function () {
            var winDow = $(window);
            var $container=$('.filter-project');
            var $filter=$('.project-btn');

            try{
                $container.imagesLoaded( function(){
                    $container.show();
                    $container.isotope({
                        filter:'*',
                        layoutMode:'masonry',
                        animationOptions:{
                            duration:750,
                            easing:'linear'
                        }
                    });
                });
            } catch(err) {
            }

            winDow.bind('resize', function(){
                var selector = $filter.find('li.active').attr('data-filter');

                try {
                    $container.isotope({
                        filter : selector,
                        animationOptions: {
                            duration: 750,
                            easing : 'linear',
                            queue : false
                        }
                    });
                } catch(err) {
                }
                return false;
            });

            $filter.find('li').click(function(){
                var selector = $(this).attr('data-filter');

                try {
                    $container.isotope({
                        filter : selector,
                        animationOptions: {
                            duration: 750,
                            easing : 'linear',
                            queue : false
                        }
                    });
                } catch(err) {

                }
                return false;
            });


            var filterItemA = $('.project-btn li');

            filterItemA.on('click', function(){
                var $this = $(this);
                if ( !$this.hasClass('active')) {
                    filterItemA.removeClass('active');
                    $this.addClass('active');
                }
            });
        }());


////////////////////////////////////////////////////////////////////
// jQuery for page scrolling feature - requires jQuery Easing plugin
/////////////////////////////////////////////////////////////////////

        $('.page-scroll').bind('click', function (event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 0
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });

        /*--------------------------
         scrollUp
         ---------------------------- */
        $.scrollUp({
            scrollText: '<i class="fa fa-angle-up"></i>',
            easingType: 'linear',
            scrollSpeed: 900,
            animation: 'fade'
        });
    }());
})(jQuery);

