$(document).ready(function(){




        $("#genGraph").click(function(e){
            $('#remove_graph').removeClass('hidden');
            e.preventDefault();
            genGraph();
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
});


