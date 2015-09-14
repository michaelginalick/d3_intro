function state(data) {
	data = data || 1;
	var total = 0;
	$.each(data, function(i, val){
		total += val;
	});
	append(total);
}

function append(total) {
	$('#number_text').append("You are spending $" + total + " a week on meetings.");
}