$(document).ready(function(){


        $("#genGraph").click(function(e){
            $('#new_graph').removeClass('hidden');
            $('#remove_graph').removeClass('hidden');
            e.preventDefault();

            var dataValues = getAllValues();
            console.log(dataValues);

            genGraph(dataValues);
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


        function getAllValues() {
            var array = [];
            $('.form-control').each(function(index,data) {
                var value = $(this).val();
                if (value) {
                    array.push(value);
                } else {
                    //alert("Must contain value");
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


