
$(document).ready(function() {

	
	$('.close span, .button1 span, .tabs .nav li a span, .lightbox-image span ').css({opacity:'0'})
	$('.tabs .nav .selected a span').css({opacity:'1'})
	
	$('.close, .button1').hover(function(){
		$(this).find('span').stop().animate({opacity:'1'})							
	}, function(){
		$(this).find('span').stop().animate({opacity:'0'})							
	})
	
	$('.lightbox-image').hover(function(){
		$(this).find('span').stop().animate({opacity:'0.4'})							
	}, function(){
		$(this).find('span').stop().animate({opacity:'0'})							
	})
	
	$('.tabs .nav li a').hover(function(){
		$(this).find('span').stop().animate({opacity:'1'})							
	}, function(){
		if (!$(this).parent().hasClass('selected')) {
			$(this).find('span').stop().animate({opacity:'0'})							
		}
	})
	
	//tabs
	tabs.init();
	
	// prettyPhoto
		$("a[data-type^='prettyPhoto']").prettyPhoto({theme:'light_square'});

	var videos = [

		{mp4: "videos/bg.mp4"},
		{mp4: "videos/bg2.mp4"},
		{mp4: "videos/bg3.mp4"},
	];
	var videoIndex = 0;
	var videoPlayer = document.getElementById("bg-video");

	function changeVideo() {
		videoIndex = (videoIndex + 1) % videos.length;
		var nextVideo = videos[videoIndex];
		videoPlayer.src = nextVideo.mp4;
		videoPlayer.play();
	}
	setInterval(changeVideo, 10000);


 });

