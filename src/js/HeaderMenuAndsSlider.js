$(function(){

  // Menu bars

  $('.fas.fa-bars').on('click',function(){
   $(this).toggleClass('rotateBars')
    $('nav').fadeToggle(300, function(){
      if($(this).attr('style') == 'display: none;') {
        $(this).removeAttr('style');
      }
    });
  })

  // Header slider

  $('.headerContainer').owlCarousel({
    smartSpeed: 600,
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:false,
            loop:true
        }
    }
})  

  // Custom navigation

    var owl = $('.headerContainer');
    owl.owlCarousel();
   
    $('.fas.fa-chevron-right ').click(function() {
        owl.trigger('next.owl.carousel');
    })

    $('.fas.fa-chevron-left').click(function() {
        owl.trigger('prev.owl.carousel');
    })

    $('.owl-dots').addClass('customDots');
    $('.owl-dots button span').addClass('customSpan');
    
  // Scroll arrow

    $(document).on('scroll',function(){
      
      var scrlTop = $(this).scrollTop();

      if(scrlTop > 300) {
        $('.scrollArrow').fadeIn(500);
      }
      else {
        $('.scrollArrow').fadeOut(500);
      }
    })

    $('.scrollArrow').on('click',function(){
      $('html, body').animate({
        scrollTop: 0
      },500)
    })

})