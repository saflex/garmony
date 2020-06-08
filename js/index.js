 $('.slider').slick({
 	slidesToShow: 1,
 	slidesToScroll: 1,
 	arrows: true,
 	fade: false,
 	asNavFor: '.slider-nav-thumbnails',
 });





 $('.slider-nav-thumbnails').slick({
 	slidesToShow: 7,
 	slidesToScroll: 1,
 	asNavFor: '.slider',
 	dots: false,
 	 	arrows: false,
 	focusOnSelect: true
 });

 //remove active class from all thumbnail slides
 $('.slider-nav-thumbnails .slick-slide').removeClass('slick-active');

 //set active class to first thumbnail slides
 $('.slider-nav-thumbnails .slick-slide').eq(0).addClass('slick-active');

 // On before slide change match active thumbnail to current slide
 $('.slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
 	var mySlideNumber = nextSlide;
 	$('.slider-nav-thumbnails .slick-slide').removeClass('slick-active');
 	$('.slider-nav-thumbnails .slick-slide').eq(mySlideNumber).addClass('slick-active');
});

//UPDATED 
  
$('.slider').on('afterChange', function(event, slick, currentSlide){   
  $('.content').hide();
  $('.content[data-id=' + (currentSlide + 1) + ']').show();
});




	$(document).ready(function() {
    $('.single-item').slick({
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        adaptiveHeight: true,
        autoplaySpeed: 2000,
        responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }, 

{
            breakpoint: 730,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }, 
        {
            breakpoint: 501,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
 
});




	$(document).ready(function() {
    $('.single-item-v').slick({
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        adaptiveHeight: true,
        autoplaySpeed: 2000,
        responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 970,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }, 

{
            breakpoint: 730,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }, 
        {
            breakpoint: 530,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
 
});


    $(document).ready(function() {
    $('.single-item-n').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }, 

{
            breakpoint: 730,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }, 
        {
            breakpoint: 631,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
 
});



    $(document).ready(function() {
    $('.single-item-ns').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        adaptiveHeight: true,
        autoplaySpeed: 2000,
        responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 970,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }, 

{
            breakpoint: 730,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }, 
        {
            breakpoint: 530,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
 
});





    $(document).ready(function() {
    $('.single-item-ns2').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        adaptiveHeight: true,
        autoplaySpeed: 2000,
        responsive: [{
            breakpoint: 1270,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }, 

{
            breakpoint: 730,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }, 
        {
            breakpoint: 530,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 470,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
        ]
    });
 
});





// mobile menu

jQuery('.click-yes2').click(function() { 
     jQuery('.no-show-2').slideToggle(''); 
     jQuery('.click-yes2').toggleClass("str-full");  
});


$(document).ready(function(){
$('nav#menu').addClass('minimize-menull');
})


jQuery('.click-yes').click(function() { 
     jQuery('.no-show-padd').slideToggle(''); 
     jQuery('.click-yes').toggleClass("str-full");  
});


$(function() {
        $('nav#menu').mmenu();
});


// placeholder-focus
 $(document).ready(function () {
 $('input,textarea').focus(function(){
   $(this).data('placeholder',$(this).attr('placeholder'))
   $(this).attr('placeholder','');
 });
 $('input,textarea').blur(function(){
   $(this).attr('placeholder',$(this).data('placeholder'));
 });
 });
 


// mobile-viewport
if(screen.width<=400){
            $('head').append('<meta name="viewport" content="width=400, user-scalable=0"/>');
        } else {
            $('head').append('<meta name="viewport" content="width=device-width">');
        }
        $(window).on("orientationchange",function(){
          if(window.orientation == 0) // Portrait 
          {
            $('head').append('<meta name="viewport" content="width=device-width">');
          } else // Landscape 
          {
            $('head').append('<meta name="viewport" content="width=640">');
          }
});

