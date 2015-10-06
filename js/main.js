$(document).ready(function(){

	var $light = $('.main'),
		$lightBar = $('.straight'),
		$contact = $('.contact'),
		$contactTitle = $('.contact-title'),
		$aboutBtn = $('.about-btn'),
		$aboutPage = $('.about-content'),
		$aboutLight = $('.about'),
		$navItems = $('.nav-item'),
		$navItemAbout = $('.1'),
		$navItemProject = $('.2'),
		$navItemBack = $('.3'),
		$screenHeight = window.innerHeight,
		$screenWidth = window.innerWidth,
		movingTime = 600;


	//initialize

	$light.css({"bottom":$screenHeight-80});
	$lightBar.css({"height":$screenHeight-80});
	// $navItemBack.css({"opacity":0});
	// $navItemAbout.css({"opacity":0});
	// $navItemProject.css({"opacity":0});
	
	

	//contact box
	$contactTitle.click(function(e){
		e.preventDefault();
	
		$contact.toggleClass('slide');
	});

	//about page
	$aboutBtn.click(function(e){
		e.preventDefault();

		aboutShow();

		aboutLightHide();

		projectShow();		
	});

	//back
	$navItemBack.click(function(e){
		e.preventDefault();
		
		projectHide();
		aboutHide();
		aboutLightShow();

	});


	function aboutShow (){
		$aboutPage.animate({left:$screenWidth*0.7},{duration:movingTime},"easeOutBounce");
	}

	function aboutHide (){
		$aboutPage.animate({left:0},{duration:movingTime},"easeInBounce");
	}

	function aboutLightHide (){
		$aboutLight.animate({top:$screenHeight},{duration:300},"easeInBack");
	}
	function aboutLightShow (){
		$aboutLight.animate({top:0},{duration:300},"easeInBack");
	}

	function projectShow (){
		$navItemBack.addClass('move-in').delay(1000).animate(
			{opacity:1,top:20},
			{duration:{opacity:200,top:300},
			specialEasing:{opacity:'easeOutExpo',top:'easeOutBounce'}
			}
		);
		$navItemProject.addClass('move-in').delay(1500).animate(
			{opacity:1,top:60},
			{duration:{opacity:200,top:300},
			specialEasing:{opacity:'easeOutExpo',top:'easeOutBounce'}
			}
		);
	}

	function projectHide (){
		$navItemProject.animate(
			{opacity:0,top:0},
			{duration:{opacity:100,top:200},
			specialEasing:{opacity:'easeOutExpo',top:'easeOutBounce'}}).removeClass('move-in');
		$navItemBack.animate(
			{opacity:0,top:0},
			{duration:{opacity:100,top:200},
			specialEasing:{opacity:'easeOutExpo',top:'easeOutBounce'}}).removeClass('move-in');
	}

});