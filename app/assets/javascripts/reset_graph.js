$(document).ready(function(){
	$("#reset_graph").click(function(){
		reset();
	})


//loop through text boxes and remove all but the first one
	var reset = function() {
			var num = $("input:text").length;
			while (num > 1) {
				$("#remove"), function () {
            $(this).closest("div").remove();
            
        };
        num--;
			}
	}
});