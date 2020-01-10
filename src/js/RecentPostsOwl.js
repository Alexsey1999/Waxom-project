$(function(){

$('.section8Row ').owlCarousel({
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
            items:2,
            nav:false
        },
        1000:{
            dots: false,
            items:3,
            nav:false,
            loop:true
        }
    }
})  


 var owl = $('.section8Row');
    owl.owlCarousel();
   
    $('.far.fa-arrow-alt-circle-right').click(function() {
        owl.trigger('next.owl.carousel');
    })

    $('.far.fa-arrow-alt-circle-left').click(function() {
        owl.trigger('prev.owl.carousel');
    })





})


