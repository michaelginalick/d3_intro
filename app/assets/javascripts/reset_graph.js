$(document).ready(function(){
	$("#reset_graph").click(function(){
		$('#append_text').hide();
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
		d3.selectAll("svg > *").remove();
		text.val("");
		text.focus();
	}

});