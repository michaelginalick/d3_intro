$(document).ready(function(){
	$("#reset_graph").click(function(){
		reset();
	})


	var reset = function() {
			$('#new_row').load('/');
	}
});