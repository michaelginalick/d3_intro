$(document).ready(function(){
	var counter = 2;

	$('#add_row').on('click', function(){
			$('#new_row').append('<div class="row"><div class="col-md-6 col-md-offset-3"><div class="form-group"><input type="text" class="form-control" /></div><input type="submit" class="btn btn-primary" value="Remove" id="new_row" /><label>Textbox #'+ counter + ' : </label>')
			counter++;
	});

	 $(document).on("click",function(e){
	 	e.preventDefault();
	 	console.log("I am here");
	 	//$(this).parent('div')remove();
	 })

});
