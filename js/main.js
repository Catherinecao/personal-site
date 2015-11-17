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
		$mProjectContral = $('.m-light'),
		$pBtn = $('#p-btn'),
		$mPBtn = $('#p-btn-m'),
		$mNBtn = $('#n-btn-m'),
		$nBtn = $('#n-btn'),
		$projects = $('.projects'),
		$bgImg = $('.bg-lights'),
		$paperPlane = $('.paper-plane'),
		$overlay = $('.overlay'),
		$overlayClose = $('.close'),
		$imgContainer = $('.gallary'),
		$contentHeight = $('.detail').height(),
		$img = $('.img-show:gt(0)'),
		$singleProject = $('.img-s'),
		$screenHeight = window.innerHeight,
		$screenWidth = window.innerWidth,
		$navBg = $('.m-nav-bg'),
		movingTime = 400,
		slideshowInterval,
		paperFlyShow,
		dataURL ='data.js',
		dataModel = {};


	//initialize

	$light.css({"bottom":$screenHeight-80});
	$lightBar.css({"height":$screenHeight-80});
	$bgImg.css({"margin-top":$screenHeight*0.3});

	$('.contact-form').formValidation();
	if($screenWidth < 768){
		$imgContainer.css({"padding-top":$contentHeight+20});
	}

	//renderProject

	function renderProject(){
		console.log(dataModel);
		$imgContainer.html(Templates.imgs(dataModel));
		$('.detail').html(Templates.detail(dataModel));
		$('#p').html(Templates.thumbnail(dataModel));
	}
	renderProject();
	
	//contact box
	$contactTitle.click(function(e){
		e.preventDefault();
	
		$contact.toggleClass('open');
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

		$mProjectContral.removeClass('move-in');
		$mPBtn.removeClass('choose');
		$mNBtn.removeClass('choose');

	});

	//prpject
	$navItemProject.click(function(e){
		e.preventDefault();

		aboutHide();
		projectShow();
		aboutBtnShow();

		$mProjectContral.removeClass('move-in');
		$mPBtn.addClass('choose');

		$nBtn.addClass('hover');
		$pBtn.removeClass('hover');
		if($screenWidth < 768){
			$projects.css({marginTop:-580});
		}else{
			$projects.css({marginTop:-750});
		}


	});

	//about
	$navItemAbout.click(function(e){
		e.preventDefault();
		projectBtnShow();
		projectHide();
		aboutShow();

		$mProjectContral.removeClass('move-in');
		$mPBtn.removeClass('choose');
		$mNBtn.removeClass('choose');
	});

	//project click
	$projectBtn.click(function(e){
		e.preventDefault();

		projectShow();

		

		aboutLightHide();

		btnPShow();	
		$mPBtn.addClass('choose');
		$nBtn.addClass('hover');
		$pBtn.removeClass('hover');
		if($screenWidth < 768){
			$projects.css({marginTop:-580});
		}else{
			$projects.css({marginTop:-750});	
		}
			
	});

	//project scrolling
	$mPBtn.click(function(){
		$(this).removeClass('choose');
		$mNBtn.addClass('choose');
		$projects.animate({marginTop:-40});
	});

	$mNBtn.click(function(){
		$(this).removeClass('choose');
		$mPBtn.addClass('choose');
		$projects.animate({marginTop:-580});
	});

	$pBtn.click(function(){	
		$(this).addClass('hover');
		$nBtn.removeClass('hover');
		$projects.animate({marginTop:10});
	});
	$nBtn.click(function(){
		$(this).addClass('hover');
		$pBtn.removeClass('hover');
		$projects.animate({marginTop:-750});
	});


	// individual project auto slideshow

	$singleProject.click(function(){
		$img.hide();
		$overlay.fadeIn(function(){
		//autoSlideShow();	
		});
	});
	$overlayClose.click(function(){ 
		$overlay.fadeOut(300);
		//clearInterval(slideshowInterval);
	});

	function autoSlideShow (){
		slideshowInterval = setInterval(function(){
			$('.gallary > div:first').fadeOut(500).next().fadeIn(500).end().appendTo($imgContainer);
		},5000);
	}

	function aboutShow (){
		if($screenWidth < 768){
			$aboutPage.animate({left:$screenWidth+60},{duration:movingTime},"easeOutBounce");
		}else if($screenWidth < 1200){
			$aboutPage.animate({left:$screenWidth*0.7+100},{duration:movingTime},"easeOutBounce");
		}else{
			$aboutPage.animate({left:$screenWidth*0.7+80},{duration:movingTime},"easeOutBounce");
		}
	}

	function aboutHide (){
		$aboutPage.animate({left:0},{duration:movingTime},"easeInBounce");
	}

	function aboutLightHide (){
		$aboutLight.animate({top:$screenHeight},{duration:300},"easeInBack");
		$bgImg.animate({opacity:0},200,"easeOutExpo");
	}
	function aboutLightShow (){
		$aboutLight.animate({top:0},{duration:300},"easeInBack");
		$bgImg.animate({opacity:1},200,"easeOutExpo");
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
		if($screenWidth < 768){
			$projectPage.animate({left:$screenWidth+60},{duration:movingTime},"easeOutBounce");
		}else{
			$projectPage.animate({left:$screenWidth*0.7+100},{duration:movingTime},"easeOutBounce");
		}
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

	//paper plane

	var $sendBtn = $('#send-btn'),
		tl = new TimelineMax();

	$('.contact-form').bind("sent",function(){
		
		if($screenWidth < 768){
			var flyingPlaneM = tl.to($paperPlane,4,{right:$screenWidth+200,bottom:$screenHeight,scale:0.2,rotation:-100,ease: Power4.easeOut});
		}else{
						
		var flyingPlaneD = tl.to($paperPlane,2.5,{right:$screenWidth*0.6,bottom:$screenHeight*0.7,scale:0.7,rotation:200,ease: SlowMo.ease.config( 0.1, 0.5, false)}).to($paperPlane,3.5,{right:$screenWidth+200,bottom:$screenHeight,scale:0.3,rotation:280,ease: Power4.easeOut});
		}
	});

});