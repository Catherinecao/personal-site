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
		$projectBtn = $('.project-btn'),
		$projectPage = $('.project-content'),
		$projectContral = $('.light'),
		$pBtn = $('#p-btn'),
		$nBtn = $('#n-btn'),
		$bgImg = $('.bg-lights'),
		$screenHeight = window.innerHeight,
		$screenWidth = window.innerWidth,
		movingTime = 600;


	//initialize

	$light.css({"bottom":$screenHeight-80});
	$lightBar.css({"height":$screenHeight-80});
	$bgImg.css({"margin-top":$screenHeight*0.3});
	
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

		btnShow();		
	});

	//back
	$navItemBack.click(function(e){
		e.preventDefault();
		
		btnHide();
		projectHide();
		aboutHide();
		aboutLightShow();

	});

	//prpject
	$navItemProject.click(function(e){
		e.preventDefault();

		aboutHide();
		projectShow();
		aboutBtnShow();
	});

	//about
	$navItemAbout.click(function(e){
		e.preventDefault();
		projectBtnShow();
		projectHide();
		aboutShow();
	});

	//project click
	$projectBtn.click(function(e){
		e.preventDefault();

		projectShow();

		aboutLightHide();

		btnPShow();		
	});

	//project scrolling
	$pBtn.click(function(){
		$(this).addClass('hover');
		$nBtn.removeClass('hover');
	});
	$nBtn.click(function(){
		$(this).addClass('hover');
		$pBtn.removeClass('hover');
	});

	function aboutShow (){
		$aboutPage.animate({left:$screenWidth*0.7+20},{duration:movingTime},"easeOutBounce");
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

	function btnShow (){
		$navItemBack.addClass('move-in').delay(1000).animate(
			{opacity:1,top:40},
			{duration:{opacity:200,top:300},
			specialEasing:{opacity:'easeOutExpo',top:'easeOutBounce'}
			}
		);
		$navItemProject.addClass('move-in').delay(1500).animate(
			{opacity:1,top:80},
			{duration:{opacity:200,top:300},
			specialEasing:{opacity:'easeOutExpo',top:'easeOutBounce'}
			}
		);
	}

	function btnPShow (){
		$navItemBack.addClass('move-in').delay(1000).animate(
			{opacity:1,top:40},
			{duration:{opacity:200,top:300},
			specialEasing:{opacity:'easeOutExpo',top:'easeOutBounce'}
			}
		);
		$navItemAbout.addClass('move-in').delay(1500).animate(
			{opacity:1,top:80},
			{duration:{opacity:200,top:300},
			specialEasing:{opacity:'easeOutExpo',top:'easeOutBounce'}
			}
		);
	}

	function btnHide (){
		$navItemProject.animate(
			{opacity:0,top:0},
			{duration:{opacity:100,top:200},
			specialEasing:{opacity:'easeOutExpo',top:'easeOutBounce'}}).removeClass('move-in');
		$navItemBack.animate(
			{opacity:0,top:0},
			{duration:{opacity:100,top:200},
			specialEasing:{opacity:'easeOutExpo',top:'easeOutBounce'}}).removeClass('move-in');
		$navItemAbout.animate(
			{opacity:0,top:0},
			{duration:{opacity:100,top:200},
			specialEasing:{opacity:'easeOutExpo',top:'easeOutBounce'}}).removeClass('move-in');
	}

	function projectShow (){
		$projectPage.animate({left:$screenWidth*0.7+20},{duration:movingTime},"easeOutBounce");
		projectContralShow();

	}
	function projectHide (){
		$projectPage.animate({left:0},{duration:movingTime},"easeInBounce");

		$projectContral.removeClass('active');

	}
	function projectContralShow (){
		$projectContral.addClass('active');
		
	}

	function aboutBtnShow (){
		$navItemProject.animate(
			{opacity:0,top:90},
			{duration:{opacity:300,top:500},
			specialEasing:{opacity:'easeOutExpo',top:'easeOutExpo'}}).removeClass('move-in');
		$navItemAbout.addClass('move-in').delay(200).animate(
			{opacity:1,top:80},
			{duration:{opacity:200,top:300},
			specialEasing:{opacity:'easeOutExpo',top:'easeOutBounce'}
			}
		);
	}

	function projectBtnShow (){
		$navItemAbout.animate(
			{opacity:0,top:90},
			{duration:{opacity:300,top:500},
			specialEasing:{opacity:'easeOutExpo',top:'easeOutExpo'}}).removeClass('move-in');
		$navItemProject.addClass('move-in').delay(200).animate(
			{opacity:1,top:80},
			{duration:{opacity:200,top:300},
			specialEasing:{opacity:'easeOutExpo',top:'easeOutBounce'}
			}
		);
	}

});