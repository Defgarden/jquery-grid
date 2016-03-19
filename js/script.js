count = 16;
size = 960 / count;

$(document).ready(function() {
	for(var i = 1; i < count + 1; i++){
		$('.grid-wrap').append('<ul></ul>');
	}

	for(var j = 1; j < count + 1; j++){
		$('ul').append('<li></li>');
	}

	$('li').css("height", size);
	$('li').css("width", size);
	$('ul').css("height", size);

	$('li').mouseenter(function(){
		$(this).css("opacity", 100);
		$(this).css("background-color", "red");
	});
	$('li').mouseleave(function(){
		$(this).animate({opacity: 0}, 1000);

	});

});