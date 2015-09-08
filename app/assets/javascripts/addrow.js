$(document).ready(function(){

    $("#btnAdd").bind("click", function () {
        var div = $("<div />");
        div.html(GetDynamicTextBox(""));
        $("#TextBoxContainer").append(div);
        $('input:text').focus();
    });

        $(document).on("click","#remove", function () {
            $(this).closest("div").remove();
            $('input:text').focus();
        });
	function GetDynamicTextBox(value) {
    return '<name = "DynamicTextBox" type="text"/>&nbsp;' +
            '<div class="row"><div class="col-md-6 col-md-offset-3"><div class="form-group"><br><input type="text" class="form-control" autofocus/></div><input type="submit" class="btn btn-primary" value="Remove" id="remove"/></div> '
	}


});
