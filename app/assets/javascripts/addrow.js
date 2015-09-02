$(document).ready(function(){
	// var counter = 2;

	// $('#add_row').on('click', function(){
	// 		$('#new_row').append('<div class="row"><div class="col-md-6 col-md-offset-3"><div class="form-group"><input type="text" class="form-control" /></div><input type="submit" class="btn btn-primary" value="Remove" id="new_row" /></div></p>')
	// });

	//  $(document).on("click",function(e){
	//  	e.preventDefault();
	//  	console.log("I am here");
	//  	//$(this).parent('div')remove();
	//  })


	$(function () {
    $("#btnAdd").bind("click", function () {
        var div = $("<div />");
        div.html(GetDynamicTextBox(""));
        $("#TextBoxContainer").append(div);
    });
    $("#btnGet").bind("click", function () {
        var values = "";
        $("input[name=DynamicTextBox]").each(function () {
            values += $(this).val() + "\n";
        });
        alert(values);
    });
    $("body").on("click", ".remove", function () {
        $(this).closest("div").remove();
    });
});
function GetDynamicTextBox(value) {
    return '<input name = "DynamicTextBox" type="text" value = "' + value + '" />&nbsp;' +
            '<input type="button" value="Remove" class="remove" />'
}


});
