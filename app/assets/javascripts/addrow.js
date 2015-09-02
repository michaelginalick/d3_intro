$(document).ready(function(){

	$('#add_row').on('click', function(){
			$('#new_row').append('<div class="row"><div class="col-md-6 col-md-offset-3"><div class="form-group"><input type="text" class="form-control" /></div><input type="submit" class="btn btn-primary" value="Add" id="add_row" /></div>')
	});

});
