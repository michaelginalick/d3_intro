
    function hitApi() {
        console.log("I am here");
        $.ajax({
            type: "GET",
            url: 'http://api.fixer.io/latest?base=' + dropDownValue(),
            dataType: 'json',
            success: function(data){
                console.log(data);
            },
            error: function(result){
                error();
            }
        });
    };


    function dropDownValue() {
        var value = $(".btn:first-child").val($(this).text());
        console.log(value);
        return value;
    }

    