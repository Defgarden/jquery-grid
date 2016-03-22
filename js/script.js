var count = 16;
var size = 960 / count;
var mode = 1;
var color = ["black", "silver", "gray", "white", "maroon", 
			 "red", "purple", "fuschia", "green", "lime",
			 "olive", "yellow", "navy", "blue", "teal",
			 "aqua"];

$(document).ready(function() {
	
	createGrid(count);

	$('#clearButton').click(clearGrid);
	$('#trailButton').click(function(){
		mode = 1;
		chooseStyle(mode);
	});
	$('#opacityButton').click(function(){
		mode = 2;
		chooseStyle(mode);
	});
	$('#lsdButton').click(function(){
		mode = 3;
		chooseStyle(mode);
	});

});

function clearGrid(){
	var answer = prompt("Please enter the size of grid you would like (example: an answer of 16 will produce a 16x16 grid).");
	count = parseInt(answer);

	$('.grid-wrap').empty();
	size = 960 / count;
	createGrid(count);

}

function createGrid(count){
	for(var i = 1; i < count + 1; i++){
		$('.grid-wrap').append('<ul></ul>');
	}

	for(var j = 1; j < count + 1; j++){
		$('ul').append('<li></li>');
	}

	$('li').each(function(){
		$(this).append( $('<div></div>').addClass("square-div"));
	});

	$('li').css("height", size);
	$('li').css("width", size);
	$('ul').css("height", size);
	$('.square-div').css("height", size);
	$('.square-div').css("width", size);

	chooseStyle(mode);
}

function chooseStyle(i){

	if(i == 1){
		$('.square-div').unbind();
		$('.square-div').css("background-color", "white");
		$('.square-div').mouseenter(function(){
			$(this).css("opacity", 100);
			$(this).css("background-color", "red");
		});
		$('.square-div').mouseleave(function(){
			$(this).animate({opacity: 0}, 1000);
		});
	}
	else if(i == 2){
		$('.square-div').unbind();
		$('.square-div').css("background-color", "black");
		$('.square-div').css("opacity", 0);
		$('.square-div').mouseenter(function(){
			$(this).css("opacity", "+=0.1");
		});
	}
	else if(i == 3){
		$('.square-div').each(function(){
			$(this).unbind();
			$(this).css("opacity", 1);
			$(this).css("background-color", "white");
		});

		$('.square-div').mouseenter(function(){
			var ran = Math.floor(Math.random() * 16);
			$(this).css("background-color", color[ran]);
		});
	}

		

}

