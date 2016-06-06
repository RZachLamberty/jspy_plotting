function make_d3js_line_plot(data, divid) {
    // set dimensions
    var margin = {top: 20, right: 20, bottom: 30, left: 50};
    var width = 960 - margin.left - margin.right;
    var height = 500 - margin.top - margin.bottom;

    // create scale (object fits data into above pixels
    var xScale = d3.scale.linear()
            .range([0, width]);

    var yScale = d3.scale.linear()
            .range([height, 0]);

    // create axes
    var xAxis = d3.svg.axis()
            .scale(xScale)
            .orient("bottom");

    var yAxis = d3.svg.axis()
            .scale(yScale)
            .orient("left");

    // create the line using the scales above
    var line = d3.svg.line()
            .x(function(d) { return xScale(d.x); })
            .y(function(d) { return yScale(d.y); });

    // add a graph element to the #mylinechart div (defined above) and set its attr.
    var svg = d3.select(divid).append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // calc the domain of the passed-in data
    xScale.domain(d3.extent(data, function(d) { return d.x }));
    yScale.domain(d3.extent(data, function(d) { return d.y }));

    // add the paths
    svg.append("path")
        .datum(data)
        .attr("class", "line")
        .attr("d", line);

    // add the axes to the graph
    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);
    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis)
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("sin(x)");
}
