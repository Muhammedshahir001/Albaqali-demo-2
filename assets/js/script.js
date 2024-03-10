(function($) {
	
	"use strict";
	$(function() {  
		$('.btn-1')
		.on('mouseenter', function(e) {
				var parentOffset = $(this).offset(),
				relX = e.pageX - parentOffset.left,
				relY = e.pageY - parentOffset.top;
				$(this).find('span').css({top:relY, left:relX})
		})
		.on('mouseout', function(e) {
				var parentOffset = $(this).offset(),
				relX = e.pageX - parentOffset.left,
				relY = e.pageY - parentOffset.top;
			$(this).find('span').css({top:relY, left:relX})
		});
	});
	

	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if($('.loader-wrap').length){
			$('.loader-wrap').delay(1000).fadeOut(500);
		}
	}

	if ($(".preloader-close").length) {
        $(".preloader-close").on("click", function(){
            $('.loader-wrap').delay(200).fadeOut(500);
        })
    }

	if ($('.side-navigation').length) {
        $('.side-nav-opener, .side-nav').on('click', function() {
            $('.side-navigation').toggleClass('open');
            $('.side-nav').toggleClass('hiddenbtn');
            return false;
        });
    };
	
	
	//Update Header Style and Scroll to Top
	function headerStyle() {
		if($('.main-header').length){
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.main-header');
			var scrollLink = $('.scroll-top');
			if (windowpos >= 110) {
				siteHeader.addClass('fixed-header');
				scrollLink.addClass('open');
			} else {
				siteHeader.removeClass('fixed-header');
				scrollLink.removeClass('open');
			}
		}
	}
	
	headerStyle();


	//Submenu Dropdown Toggle
	if($('.main-header li.dropdown ul').length){
		$('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>');
		
	}

	//Mobile Nav Hide Show
	if($('.mobile-menu').length){
		
		$('.mobile-menu .menu-box').mCustomScrollbar();
		
		var mobileMenuContent = $('.main-header .menu-area .main-menu').html();
		$('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);
		$('.sticky-header .main-menu').append(mobileMenuContent);
		
		//Dropdown Button
		$('.mobile-menu li.dropdown .dropdown-btn').on('click', function() {
			$(this).toggleClass('open');
			$(this).prev('ul').slideToggle(500);
		});
		//Dropdown Button
		$('.mobile-menu li.dropdown .dropdown-btn').on('click', function() {
			$(this).prev('.megamenu').slideToggle(900);
		});
		//Menu Toggle Btn
		$('.mobile-nav-toggler').on('click', function() {
			$('body').addClass('mobile-menu-visible');
		});

		//Menu Toggle Btn
		$('.mobile-menu .menu-backdrop,.mobile-menu .close-btn').on('click', function() {
			$('body').removeClass('mobile-menu-visible');
		});
	}

	function dynamicCurrentMenuClass(selector) {
        let FileName = window.location.href.split('/').reverse()[0];

        selector.find('li').each(function () {
            let anchor = $(this).find('a');
            if ($(anchor).attr('href') == FileName) {
                $(this).addClass('current');
            }
        });
        // if any li has .current elmnt add class
        selector.children('li').each(function () {
            if ($(this).find('.current').length) {
                $(this).addClass('current');
            }
        });
        // if no file name return 
        if ('' == FileName) {
            selector.find('li').eq(0).addClass('current');
        }
    }

    // dynamic current class        
    let mainNavUL = $('.main-menu').find('.navigation');
    dynamicCurrentMenuClass(mainNavUL);
	
	// Scroll to a Specific Div
	if($('.scroll-to-target').length){
		$(".scroll-to-target").on('click', function() {
			var target = $(this).attr('data-target');
		   // animate
		   $('html, body').animate({
			   scrollTop: $(target).offset().top
			 }, 1000);
	
		});
	}

	//Search Popup
	if($('#search-popup').length){
		//Show Popup
		$('.search-toggler').on('click', function() {
			$('#search-popup').addClass('popup-visible');
		});
		$(document).keydown(function(e){
			if(e.keyCode === 27) {
				$('#search-popup').removeClass('popup-visible');
			}
		});
		//Hide Popup
		$('.close-search,.search-popup .overlay-layer').on('click', function() {
			$('#search-popup').removeClass('popup-visible');
		});
	}



	$('select:not(.ignore)').niceSelect();


	// Elements Animation
	if($('.wow').length){
		var wow = new WOW({
		mobile:       false
		});
		wow.init();
	}

	//Contact Form Validation
	if($('#contact-form').length){
		$('#contact-form').validate({
			rules: {
				username: {
					required: true
				},
				email: {
					required: true,
					email: true
				},
				phone: {
					required: true
				},
				subject: {
					required: true
				},
				message: {
					required: true
				}
			}
		});
	}

	//Fact Counter + Text Count
	if($('.count-box').length){
		$('.count-box').appear(function(){
	
			var $t = $(this),
				n = $t.find(".count-text").attr("data-stop"),
				r = parseInt($t.find(".count-text").attr("data-speed"), 10);
				
			if (!$t.hasClass("counted")) {
				$t.addClass("counted");
				$({
					countNum: $t.find(".count-text").text()
				}).animate({
					countNum: n
				}, {
					duration: r,
					easing: "linear",
					step: function() {
						$t.find(".count-text").text(Math.floor(this.countNum));
					},
					complete: function() {
						$t.find(".count-text").text(this.countNum);
					}
				});
			}
			
		},{accY: 0});
	}


	//LightBox / Fancybox
	if($('.lightbox-image').length) {
		$('.lightbox-image').fancybox({
			openEffect  : 'fade',
			closeEffect : 'fade',
			helpers : {
				media : {}
			}
		});
	}



	// Date picker
	function datepicker () {
	    if ($('#datepicker').length) {
	        $('#datepicker').datepicker();
	    };
	}
	// Time picker
	function timepicker () {
	    if ($('input[name="time"]').length) {
	        $('input[name="time"]').ptTimeSelect();
	    }
	}
	
	//FAQ Box
	jQuery(document).ready(function(){
		jQuery('.titleWrapper').click(function(){
			var toggle = jQuery(this).next('div#descwrapper');
			jQuery(toggle).slideToggle("slow");
		});
		jQuery('.inactive').click(function(){
			jQuery(this).toggleClass('inactive active');
		});
	});

	//Tabs Box
	if($('.tabs-box').length){
		$('.tabs-box .tab-buttons .tab-btn').on('click', function(e) {
			e.preventDefault();
			var target = $($(this).attr('data-tab'));
			
			if ($(target).is(':visible')){
				return false;
			}else{
				target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
				$(this).addClass('active-btn');
				target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
				target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab');
				$(target).fadeIn(100);
				$(target).addClass('active-tab');
			}
		});
	}

	//Timer Countdown
    if($('.timer').length){
		$(function(){
			 $('[data-countdown]').each(function() {
			var $this = $(this), finalDate = $(this).data('countdown');
			$this.countdown(finalDate, function(event) {
			  $this.html(event.strftime('%D days %H:%M:%S'));
			});
		  });
		 });
 
		$('.cs-countdown').countdown('').on('update.countdown', function(event) {
		   var $this = $(this).html(event.strftime('<div class="count-col"><span>%D</span><p>Days</p></div> <div class="count-col"><span>%H</span><p>Hours</p></div> <div class="count-col"><span>%M</span><p>Minutes</p></div> <div class="count-col"><span>%S</span><p>Seconds</p></div>'));
		 });
	 }

	//Accordion Active

	if ($('.accordion-box-style1').length) {
		$(".accordion-box-style1").on('click', '.accord-btn', function () {

			if ($(this).hasClass('active') !== true) {
				$('.accordion .accord-btn').removeClass('active');
			}
			if ($(this).next('.accord-content').is(':visible')) {
				$(this).removeClass('active');
				$(this).next('.accord-content').slideUp(500);
			} else {
				$(this).addClass('active');
				$('.accordion .accord-content').slideUp(500);
				$(this).next('.accord-content').slideDown(500);
			}
		});
	}
	  

	// banner-carousel
	if ($('.banner-carousel').length) {
        $('.banner-carousel').owlCarousel({
            loop:true,
			margin:0,
			nav:true,
			animateOut: 'fadeOut',
    		animateIn: 'fadeIn',
    		active: true,
			smartSpeed: 1000,
			autoplay: 6000,
            navText: [ '<span class="icon-25"></span>', '<span class="icon-26"></span>' ],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                800:{
                    items:1
                },
                1024:{
                    items:1
                }
            }
        });
    }

	// portfolio-carousel
	if ($('.portfolio-carousel').length) {
        $('.portfolio-carousel').owlCarousel({
            loop:true,
			margin:24,
			nav:true,
			smartSpeed: 1000,
			autoplay: 6000,
            navText: [ '<span class="icon-25"></span>', '<span class="icon-26"></span>' ],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2,
                },
                800:{
                    items:3,
                },
                1024:{
                    items:3,
                },
                1200:{
                    items:4
                }
            }
        });
    }

	// brand-carousel
	if ($('.brand-carousel').length) {
        $('.brand-carousel').owlCarousel({
            loop:true,
			margin:24,
			nav:true,
			smartSpeed: 1000,
			autoplay: 6000,
            navText: [ '<span class="icon-25"></span>', '<span class="icon-26"></span>' ],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3,
                },
                800:{
                    items:4,
                },
                1024:{
                    items:5
                }
            }
        });
    }

	// testimonials-carousel
	if ($('.testimonials-carousel').length) {
        $('.testimonials-carousel').owlCarousel({
            loop:true,
			margin:24,
			nav:true,
			smartSpeed: 1000,
			autoplay: 6000,
            navText: [ '<span class="icon-26"></span>', '<span class="icon-25"></span>' ],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1,
                },
                800:{
                    items:1,
                },
                1024:{
                    items:1
                }
            }
        });
    }

	// testimonials-carousel-two
	if ($('.testimonials-carousel-two').length) {
        $('.testimonials-carousel-two').owlCarousel({
            loop:true,
			margin:24,
			nav:true,
			smartSpeed: 1000,
			autoplay: 6000,
            navText: [ '<span class="icon-26"></span>', '<span class="icon-25"></span>' ],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2,
                },
                800:{
                    items:2,
                },
                1024:{
                    items:3
                }
            }
        });
    }

	// project-carousel

	if ($('.project-carousel').length) {
        $('.project-carousel').owlCarousel({
            loop:true,
			margin:100,
			nav:true,
			center:true,
			smartSpeed: 1000,
			autoplay: 6000,
            navText: [ '<span class="icon-25"></span>', '<span class="icon-26"></span>' ],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1,
                },
                800:{
                    items:1,
                },
                1024:{
                    items:1
                }
            }
        });
    }


	// service-carousel

	if ($('.service-carousel').length) {
        $('.service-carousel').owlCarousel({
            loop:true,
			margin:30,
			nav:true,
			smartSpeed: 1000,
			autoplay: 6000,
            navText: [ '<span class="icon-25"></span>', '<span class="icon-26"></span>' ],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2,
                },
                800:{
                    items:2,
                },
				1024:{
					items:3,
				},
                1200:{
                    items:4
                }
            }
        });
    }

	// testimonials__carousel

	if ($('.testimonials__carousel').length) {
        $('.testimonials__carousel').owlCarousel({
            loop:true,
			margin:30,
			nav:true,
			smartSpeed: 1000,
			autoplay: 6000,
            navText: [ '<span class="icon-26"></span>', '<span class="icon-25"></span>' ],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1,
                },
                800:{
                    items:2,
                },
                1024:{
                    items:2
                }
            }
        });
    }



	$(document).ready(function() {

		$('a.btn-gallery').on('click', function(event) {
			event.preventDefault();
			
			var gallery = $(this).attr('href');
		
			$(gallery).magnificPopup({
		  delegate: 'a',
				type:'image',
				gallery: {
					enabled: true
				}
			}).magnificPopup('open');
		});
		
	});
	

	if ($('.two-item-carousel').length) {
		var twoItemCarousel = new Swiper('.two-item-carousel', {
			preloadImages: false,
			loop: true,
			grabCursor: true,
			centeredSlides: false,
			resistance: true,
			resistanceRatio: 0.6,
			slidesPerView: 1,
			speed: 1400,
			spaceBetween: 30,
			parallax: false,
			effect: "slide",
			active: 'active',
			autoplay: {
				delay: 800000000000,
				disableOnInteraction: false
			},
			navigation: {
				nextEl: '.button_next',
				prevEl: '.button_prev',
			},
			pagination: {
				el: '.slider__pagination',
				clickable: true,
			},
			breakpoints: {
                991: {
                  slidesPerView: 1,
                },
                640: {
                  slidesPerView: 1,
                }, 
            }
		});
	}


	//Parallax Scene for Icons
	if($('.parallax-scene-1').length){
		var scene = $('.parallax-scene-1').get(0);
		var parallaxInstance = new Parallax(scene);
	}
	if($('.parallax-scene-2').length){
		var scene = $('.parallax-scene-2').get(0);
		var parallaxInstance = new Parallax(scene);
	}
	if($('.parallax-scene-3').length){
		var scene = $('.parallax-scene-3').get(0);
		var parallaxInstance = new Parallax(scene);
	}
	if($('.parallax-scene-4').length){
		var scene = $('.parallax-scene-4').get(0);
		var parallaxInstance = new Parallax(scene);
	}
	if($('.parallax-scene-5').length){
		var scene = $('.parallax-scene-5').get(0);
		var parallaxInstance = new Parallax(scene);
	}
	if($('.parallax-scene-6').length){
		var scene = $('.parallax-scene-6').get(0);
		var parallaxInstance = new Parallax(scene);
	}
	if($('.parallax-scene-7').length){
		var scene = $('.parallax-scene-7').get(0);
		var parallaxInstance = new Parallax(scene);
	}

	//Product Tabs
	if($('.project-tab').length){
		$('.project-tab .project-tab-btns .p-tab-btn').on('click', function(e) {
			e.preventDefault();
			var target = $($(this).attr('data-tab'));
			
			if ($(target).hasClass('actve-tab')){
				return false;
			}else{
				$('.project-tab .project-tab-btns .p-tab-btn').removeClass('active-btn');
				$(this).addClass('active-btn');
				$('.project-tab .p-tabs-content .p-tab').removeClass('active-tab');
				$(target).addClass('active-tab');
			}
		});
	}


	//Add One Page nav
	if($('.scroll-nav').length) {
		$('.scroll-nav').onePageNav();
	}


	//Sortable Masonary with Filters
	function enableMasonry() {
		if($('.sortable-masonry').length){
	
			var winDow = $(window);
			// Needed variables
			var $container=$('.sortable-masonry .items-container');
			var $filter=$('.filter-btns');
	
			$container.isotope({
				filter:'*',
				 masonry: {
					columnWidth : '.masonry-item.small-column'
				 },
				animationOptions:{
					duration:500,
					easing:'linear'
				}
			});
			
	
			// Isotope Filter 
			$filter.find('li').on('click', function(){
				var selector = $(this).attr('data-filter');
	
				try {
					$container.isotope({ 
						filter	: selector,
						animationOptions: {
							duration: 500,
							easing	: 'linear',
							queue	: false
						}
					});
				} catch(err) {
	
				}
				return false;
			});
	
	
			winDow.on('resize', function(){
				var selector = $filter.find('li.active').attr('data-filter');

				$container.isotope({ 
					filter	: selector,
					animationOptions: {
						duration: 500,
						easing	: 'linear',
						queue	: false
					}
				});
			});
	
	
			var filterItemA	= $('.filter-btns li');
	
			filterItemA.on('click', function(){
				var $this = $(this);
				if ( !$this.hasClass('active')) {
					filterItemA.removeClass('active');
					$this.addClass('active');
				}
			});
		}
	}
	
	enableMasonry();


	//Progress Bar
	if($('.progress__line').length){
		$('.progress__line').appear(function(){
			var el = $(this);
			var percent = el.data('width');
			$(el).css('width',percent+'%');
		},{accY: 0});
	}



	$(document).ready(function() {
      $('select:not(.ignore)').niceSelect();
    });


	// page direction
	function directionswitch() {
	  	if ($('.page_direction').length) {

	    	$('.direction_switch button').on('click', function() {
			   $('body').toggleClass(function(){
			      return $(this).is('.rtl, .ltr') ? 'rtl ltr' : 'rtl';
			  })
			});
	  	};
	}


	// Price Filter
	if ($('.price-ranger').length) {
		$('.price-ranger #slider-range').slider({
			range: true,
			min: 10,
			max: 200,
			values: [11, 99],
			slide: function(event, ui) {
				$('.price-ranger .ranger-min-max-block .min').val('$' + ui.values[0]);
				$('.price-ranger .ranger-min-max-block .max').val('$' + ui.values[1]);
			}
		});
		$('.price-ranger .ranger-min-max-block .min').val('$' + $('.price-ranger #slider-range').slider('values', 0));
		$('.price-ranger .ranger-min-max-block .max').val('$' + $('.price-ranger #slider-range').slider('values', 1));
	};
	
	//Price Range Slider
	if($('.price-range-slider').length){
		$( ".price-range-slider" ).slider({
			range: true,
			min: 0,
			max: 999,
			values: [ 0, 550 ],
			slide: function( event, ui ) {
			$( "input.property-amount" ).text( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
			}
		});
		$( "input.property-amount" ).text("$" + $( ".price-range-slider" ).slider( "values",0 ) + " - $" + $( ".price-range-slider" ).slider( "values", 1 ) );	
	}


	if ($('.product-details-content .bxslider').length) {
		$('.product-details-content .bxslider').bxSlider({
	        nextSelector: '.product-details-content #slider-next',
	        prevSelector: '.product-details-content #slider-prev',
	        nextText: '<i class="fa fa-angle-right"></i>',
	        prevText: '<i class="fa fa-angle-left"></i>',
	        mode: 'fade',
	        auto: 'true',
	        speed: '700',
	        pagerCustom: '.product-details-content .slider-pager .thumb-box'
	    });
	}; 


	//Jquery Spinner / Quantity Spinner
	if($('.quantity-spinner').length){
		$("input.quantity-spinner").TouchSpin({
		  verticalbuttons: true
		});
	}


	

	// skeleton loading 

	// const imgContainer = document.querySelector('.image');
	// const heading = document.querySelector('.main-text');
	// const subtext = document.querySelector('.sub-text');


	// setTimeout(() => {

	// 	const img = document.createElement('img');

	// 	img.setAttribute('src','./assets/images/news/news-01.png')
	// 	imgContainer.appendChild(img)

	// 	heading.textContent = 'Alhamduillha';
	// 	subtext.textContent = 'Tincidunt Maur nemi sit Interdum praesent eget morbi lacinia volutpat pellentesque Tincidunt aurna suspit.';

	// 	imgContainer.classList.remove('loading');		
	// 	heading.classList.remove('loading');		
	// 	subtext.classList.remove('loading');		

	// },3000);

	// skeleton loading end
	

	/*	=========================================================================
	When document is Scrollig, do
	========================================================================== */

	jQuery(document).on('ready', function () {
		(function ($) {
			// add your functions
			directionswitch();
		})(jQuery);
	});



	/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */
	
	$(window).on('scroll', function() {
		headerStyle();
	});

	
	
	/* ==========================================================================
   When document is loaded, do
   ========================================================================== */
	
	$(window).on('load', function() {
		handlePreloader();
		enableMasonry();
	});

	

})(window.jQuery);