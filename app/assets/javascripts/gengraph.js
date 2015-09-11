$(document).ready(function(){


        $("#genGraph").click(function(e){
            e.preventDefault();
            if ( getAllValues() != $('input:text').length) { 
                restoreHeader();
            } else {  
                $('#new_graph').removeClass('hidden');
                $('#remove_graph').removeClass('hidden');
                //hitApi();
                genGraph( getAllValues() );
            }
        })


        var genGraph = function(dataValues) { 
            $.ajax({
                type: "GET",
                contentType: "application/json; charset=utf-8",
                url: 'graph/data',
                dataType: 'json',
                data: {
                    values: dataValues
                },
                success: function (data) {
                    draw(data);
                },
                error: function (result) {
                    error();
                }
            });
        }

        function checkAllValues() {
            return "this is an error";
        }



        function restoreHeader() {
          //$('#message').text("Entries must contain values");
          alert("Entries must contain values");
          reset();
          clear();
        };


        function getAllValues() {
            var array = [];
            $('input:text').each(function(index,data) {
                var value = $(this).val();
                if (value) {
                    array.push(value);
                } else {
                    checkAllValues()
                }
            });
            return array;
        }


});


