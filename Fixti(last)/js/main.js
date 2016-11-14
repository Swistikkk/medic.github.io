 $(document).ready(function () {
     
     // Cache the Window object
    $window = $(window);
     
     $('div[data-type="background"]').each(function () {
         var $bgobj = $(this); // assigning the object

         $window.scroll(function () {
             var yPos = -($window.scrollTop() / $bgobj.data('speed'));

             // Put together our final background position
             var coords = '50%' + yPos + 'px';

             // Move the background
             $bgobj.css({
                 backgroundPosition: coords
             });
         });
     });
 
 
 
 $('#email-empty').focusin(function(){
     $(this).attr('value',' ');
 });
 
 $('#email-empty').focusout(function(){
     $(this).attr('value','E-mail');
 });
     
     
     
     
    
 
 
 
 
 
 
 
 });









$(function() {
	$('a[href="#your_block"]').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
	});
});



$('.my-slider').slick({
         pauseOnHover: false,
         draggable: false,
         touchMove: false,
         vertical: true,
         speed: 500,
         arrows: false,
         autoplay: true,
         autoplaySpeed: 5000
     });



/*$('#block_2').click(function () {
    $(".platform-text").css("display","none");
    $(".skoro").css("display","block");
    $(".trio").css("display","none");
    $("#block_1").children().removeClass("block_a");
    $(this).addClass("active-element");
});*/



$(".block_a").click(function(){
    var thiser = $(this);
    var block_id = $(this).attr("id");
    $(".active_a_trio").removeClass("active_a_trio");
    thiser.addClass("active_a_trio");
    $(".block_id").css("display", "none");
    $(".block_id[block='"+block_id+"']").css("display", "block");
});



/*
$(".block").click(function(){
    $(".platform-text").css("display", "none");
    $(".skoro").css("display", "block");
});

*/