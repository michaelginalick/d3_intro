
function draw(data) {
    data = data || 0
    var color = d3.scale.category20b();
    var width = 420,
        barHeight = 30;

    var x = d3.scale.linear()
        .range([0, width])
        .domain([0, d3.max(data)]);

    var chart = d3.select("#graph")
        .attr("width", width)
        .attr("height", barHeight * data.length);

    var bar = chart.selectAll("g")
        .data(data)
        .enter().append("g")
        .attr("transform", function (d, i) {
                  return "translate(0," + i * barHeight + ")";
              });

    bar.append("rect")
        .attr("width", x)
        .attr("height", barHeight - 1)
        .style("fill", function (d) {
                   return color(d)
               })

    bar.append("text")
        .attr("x", "13", function (d) {
                  return x(d) - 50;
              })
        .attr("y", barHeight / 2)
        .attr("dy", ".15em")
        .style("fill", "white")
        .text(function (d) {
                  return d;
              });
}

function error() {
    console.log("error")
}

