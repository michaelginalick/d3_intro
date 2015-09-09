$(document).ready(function(){
	$("#reset_graph").click(function(){
		reset();
		clear();
	})


//loop through text boxes and remove all but the first one
	var reset = function() {
		var num = $("input:text").length;
		while (num >= 1) {
			var ele = $("#remove");
      ele.closest("div").remove();
      num--;
    }
	}

	var clear = function() {
		var text = $("input:text");
		//$('.form-group')[0].reset();
		text.val("");
		text.focus();
	}

});