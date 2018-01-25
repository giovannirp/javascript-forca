function createSprite(selector){
	//var sprite = document.querySelector(".sprite");

	var $el = $(selector);

	var frames = [
		'frame1','frame2','frame3','frame4','frame5',
		'frame6','frame7','frame8','frame9' 
	];

	console.log(frames);

	var current = 0;
	var last = frames.length - 1;

	$el.addClass(frames[current]);

	function moveFrame(from, to){

		$el.removeClass(from)
		.addClass(to);
	}



	function nextFrame(){

		moveFrame(frames[current], frames[++current]);
		console.log(frames[current]);
	}

	return {
		nextFrame: nextFrame
	}
}