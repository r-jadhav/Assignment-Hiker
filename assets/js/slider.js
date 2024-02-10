$(function() {
   $('.serviceSlide').bxSlider({
     auto: true,
     autoControls: true,
     speed: 500,
     slideSelector: 'div.item',
     maxSlides: 4,
     moveSlides: 1,
     slideWidth: 340,
   });
 });
 
 $(document).ready(function(){
    $('.product-slider').slick({
       autoplay:true,
      slidesToShow:3,
      slidesToScroll:1,
      prevArrow:".prev-btn",
      nextArrow:".next-btn",
      responsive:[
         {
            breakpoint:992,
            settings:{
             slidesToShow:2,
            }
         },
         {
          breakpoint:768,
          settings:{
           slidesToShow:1,
          }
       }
      ]
    });
 });