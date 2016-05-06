$(document).ready(function() {

	// $(document).on("click", ".squares", function() {
	// 	$(this).addClass("playerx")
	// 	.html("<h1>X</>");
 //   	});

 	var x = "X";
 	var y = "Y";

	$(document).on("click", ".squares", function() {
		if(x === "X") {
			$(this).addClass("playerx")
			.html("<h1>X</>");
		} else {
			$(this).addClass("playery")
			.html("<h1>Y</>");
		}

   	});







});