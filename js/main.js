$(document).ready(function(){

	var $light = $('.main'),
		$lightBar = $('.straight'),
		$contact = $('.contact'),
		$messageBox = $('.message-box'),
		$triangle = $('.lean'),
		$messageBoxHeight = $messageBox.height(),
		$titleHeight = $('.contact-title').height(),
		$screenHeight = window.innerHeight;


	//initialize

	$light.css({"bottom":$screenHeight-80});
	$lightBar.css({"height":$screenHeight-80});
	

	//contact box
	$contact.css({"top":$screenHeight-$titleHeight});
	$contact.click(function(e){
		e.preventDefault();
		var contactClick = true;
		if(contactClick === true){
			$contact.velocity({top:300});
			contactClick = false;
		}else{
			$contact.velocity({top:-300});
			contactClick = true;
		}
	});

});