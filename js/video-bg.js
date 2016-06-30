$(document).ready(function(){
	//Video Background
	$(".player").mb_YTPlayer();
});

$wishButton = $('#submitWish');
$bgndVideo = $('#bgndVideo');

$wishButton.on('click', function (event) {
event.preventDefault();

$bgndVideo.append('hello');

});
