$(document).ready(function(){
	$("#reset_graph").click(function(){
		reset();
	})


	var reset = function() {
			$('.row').load('/graph/data');
	}
});