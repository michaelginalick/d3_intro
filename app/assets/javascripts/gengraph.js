$(document).ready(function(){


        $("#genGraph").click(function(e){
            $('#new_graph').removeClass('hidden');
            $('#remove_graph').removeClass('hidden');
            
            if ( checkAllValues() === "this is an error") { 
                restoreHeader();
                return false;
            } else {  
                e.preventDefault();
                //hitApi();
                var dataValues = getAllValues();
                //console.log(dataValues.length);
                genGraph(dataValues);
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
            setTimeout(
                function() {
                    $('#message').text("Add a new stop");
                },
            
            3500);
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

        function getClass() {
            var button = $('#remove_graph').attr('class');

            if (button === 'hidden') {
                return true;
            } else {
                $('#remove_graph').removeClass('hidden');
            }

        }

});


