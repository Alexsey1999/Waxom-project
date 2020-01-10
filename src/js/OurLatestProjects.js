$(function(){

  $('div[data-name="Web Design"]').on('click',function(){
   if($(this).attr('data-state') =='off') {
      $('div[data-name]').attr('data-state','off');
      $(this).attr('data-state','on');
      $('div[data-name]').removeClass('section4BtnsContainer__btn-active');    
      $(this).addClass('section4BtnsContainer__btn-active');  
      $('.section4RowItem').hide(300);
      $('.section4RowItem[data-filter=itemWeb]').show(300);
   } 
  })
  $('div[data-name="Mobile App"]').on('click',function(){
   if($(this).attr('data-state') =='off') {
      $('div[data-name]').attr('data-state','off');
      $(this).attr('data-state','on');
      $('div[data-name]').removeClass('section4BtnsContainer__btn-active');    
      $(this).addClass('section4BtnsContainer__btn-active');  
      $('.section4RowItem').hide(300);
      $('.section4RowItem[data-filter=itemMob]').show(300);
   }
  })
  $('div[data-name="Illustration"]').on('click',function(){
   if($(this).attr('data-state') =='off') {
      $('div[data-name]').attr('data-state','off');
      $(this).attr('data-state','on');
      $('div[data-name]').removeClass('section4BtnsContainer__btn-active');    
      $(this).addClass('section4BtnsContainer__btn-active');  
      $('.section4RowItem').hide(300);
      $('.section4RowItem[data-filter=itemIll]').show(300);
   }
  })
  $('div[data-name="Photography"]').on('click',function(){
   if($(this).attr('data-state') =='off') {
      $('div[data-name]').attr('data-state','off');
      $(this).attr('data-state','on');
      $('div[data-name]').removeClass('section4BtnsContainer__btn-active');    
      $(this).addClass('section4BtnsContainer__btn-active');  
      $('.section4RowItem').fadeOut(300);
      $('.section4RowItem[data-filter=itemWeb]').show(300);
   }
  })
  $('div[data-name="All"]').on('click',function(){
   if($(this).attr('data-state') =='off') {
      $('div[data-name]').attr('data-state','off');
      $(this).attr('data-state','on');
      $('div[data-name]').removeClass('section4BtnsContainer__btn-active');    
      $(this).addClass('section4BtnsContainer__btn-active');  
      $('.section4RowItem').fadeIn(300);
   }
  })



})