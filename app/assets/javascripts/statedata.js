function state(data) {
	data = data || 0;
	console.log(data);
	var total = 0;
	$.each(data, function(i, val){
		total += val;
	});
	append(total);
}

function append(total) {
	$('#number_text').append("You are spending $" + total + " a week on meetings.");
}