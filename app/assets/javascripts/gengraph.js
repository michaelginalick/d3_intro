$(document).ready(function(){

        $("#genGraph").click(function(e){
            e.preventDefault();
            console.log("I am here");
            genGraph();
        })
});



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