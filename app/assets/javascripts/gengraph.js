$(document).ready(function(){


        $("#genGraph").click(function(e){
            
            getClass();

            $('#new_graph').removeClass('hidden');
            e.preventDefault();

            console.log(getAllValues());
            
            if ( !getAllValues() ) {
                alert("Value must be present");
            } else{
                genGraph();    
            }
            
        })


        var genGraph = function() { 
            $.ajax({
                type: "GET",
                contentType: "application/json; charset=utf-8",
                url: 'graph/data',
                dataType: 'json',
                success: function (data) {
                    draw(data);
                },
                error: function (result) {
                    error();
                }
            });
        }


        function getAllValues() {
            $('input').each(function(index,data) {
                var value = $(this).val();
                console.log(value);
                if (value === undefined) {
                    return false;
                } else {
                    return true;
                }
            });
        }

        function getClass() {
            var button = $('#remove_graph').attr('class');

            if (button === 'hidden') {
                return true;
            } else {
                $('#remove_graph').addClass('hidden');
            }

        }


});


