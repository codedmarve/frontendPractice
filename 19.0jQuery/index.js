
$("button").click(function(event){

	$("h1").css("color", "purple");
});

$(document).keydown(function(event) {

	$("h1").text(event.key);
})