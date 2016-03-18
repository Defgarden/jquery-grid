count = 16;

$(document).ready(function() {
	for(var i = 1; i < count; i++){
		$('.grid-wrap').append('<ul></ul>');
	}

	for(var j = 1; j< count; j++){
		$('ul').append('<li></li>');
	}

	$('li').hover(function(){
		$(this).css("background-color", "red");
	});

});