$(document).ready(function(){

	var $light = $('.main'),
		$lightBar = $('.straight'),
		$contact = $('.contact'),
		$contactTitle = $('.contact-title'),
		$aboutBtn = $('.about-btn'),
		$aboutPage = $('.about-content'),
		$screenHeight = window.innerHeight,
		$screenWidth = window.innerWidth;


	//initialize

	$light.css({"bottom":$screenHeight-80});
	$lightBar.css({"height":$screenHeight-80});
	$aboutPage.css({"left":$screenWidth});
	

	//contact box
	$contactTitle.click(function(e){
		e.preventDefault();
	
		$contact.toggleClass('slide');
	});

	//about page
	$aboutBtn.click(function(e){
		e.preventDefault();
		$aboutPage.css({"left":0});
	});

});