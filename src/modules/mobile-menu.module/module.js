$(window).load( function() {
  
  console.log("window load");

  $('.navbar-toggle').click( function() {
    $("body").toggleClass("open-menu");
  }); 
  
  $('.child-trigger').click(function(){
  $(this).parents('li').siblings().children('ul').slideUp();
  $(this).parents('li').siblings().removeClass('open_child');
  $(this).siblings('ul').slideToggle();
  $(this).parent().toggleClass('open_child');
});



});