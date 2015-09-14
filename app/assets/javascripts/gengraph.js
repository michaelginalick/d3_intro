$(document).ready(function(){


        $("#genGraph").click(function(e){
            e.preventDefault();
            if ( getAllValues().length != $('input:text').length) { 
                restoreHeader();
            } else {  
                $('#new_graph').removeClass('hidden');
                $('#remove_graph').removeClass('hidden');
                $('#number_text').removeClass('hidden');
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
                    state(data);
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


        //loop through text boxes and remove all but the first one
        var reset = function() {
            $('#append_text').hide();
            var num = $("input:text").length;
            while (num >= 1) {
                var ele = $("#remove");
                ele.closest("div").remove();
                num--;
          }
        }

        var clear = function() {
            var text = $("input:text");
            d3.selectAll("svg > *").remove();
            text.val("");
            text.focus();
        }



});


