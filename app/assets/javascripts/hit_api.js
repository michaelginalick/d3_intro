$(document).ready(function(){
    function hitApi() {
        console.log("I am here");
        $.ajax({
            type: "GET",
            //contentType: "application/json;",
            url: 'http://api.fixer.io/latest?base=USD',
            dataType: 'json',
            success: function(data){
                console.log(data);
            },
            error: function(result){
                error();
            }
        });
    }

    function dropDownValue() {
        var value = $(".btn:first-child").val($(this).text());
        return value;
    }



});
    