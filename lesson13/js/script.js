$(document).ready(function() {

	$('.main_btna, .main_btn, li a[href="#sheldure"]').on('click', function() {
		$('.overlay').fadeIn(1500);
		$('.modal').css("top", "-700px");
		$('.modal').show().animate({
		      top: '0px',
		      display:"toggle"
		 		},2500);



	});

	$('.close').on('click', function() {
		$('.overlay').fadeOut(3500);
	
		$('.modal').fadeIn(600).animate({
		      top: '-700px',
		      display:"toggle",
		 		},2500);
			});
	
});