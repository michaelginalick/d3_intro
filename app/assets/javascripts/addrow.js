$(document).ready(function(){

	$(function () {
    $("#btnAdd").bind("click", function () {
        var div = $("<div />");
        div.html(GetDynamicTextBox(""));
        $("#TextBoxContainer").append(div);
    });

        $("body").on("click", ".remove", function () {
            $(this).closest("div").remove();
        });
	});
	function GetDynamicTextBox(value) {
    return '<name = "DynamicTextBox" type="text" value = "' + value + '" />&nbsp;' +
            '<value="Remove" class="remove" <div class="row"><div class="col-md-6 col-md-offset-3"><div class="form-group"><br><input type="text" class="form-control" /></div><input type="submit" class="btn btn-primary" value="Remove" /></div></p>'
	}


});
