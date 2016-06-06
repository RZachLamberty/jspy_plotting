function make_d3js_bar_plot(data, divid) {
    // set bounds of our plot
    var margin = {top: 40, right: 20, bottom: 30, left: 40},
        width = 960 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

    // our x is a category variable; x scale is ordinal
    var xScale = d3.scale.ordinal()
        .rangeRoundBands([0, width], .1);

    // linear y scale
    var yScale = d3.scale.linear()
        .range([height, 0]);

    // create axes objects
    var xAxis = d3.svg.axis()
        .scale(xScale)
        .orient("bottom");

    var yAxis = d3.svg.axis()
        .scale(yScale)
        .orient("left");

    // create a tooltip
    var tip = d3.tip()
        .attr('class', 'd3-tip')
        .offset([-10, 0])
        .html(function(d) {
          return "<strong>Count:</strong> <span style='color:red'>" + d.number + "</span>";
        })

    // create an svg element we can attach things to (and then do)
    var svg = d3.select("#mybarchart").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    svg.call(tip);

    // set the domain on our scales
    xScale.domain(data.map(function(d) { return d.animal; }));
    yScale.domain([0, d3.max(data, function(d) { return d.number; })]);

    // add axes to our svg object
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
        .text("Count");

    svg.selectAll(".bar")
        .data(data)
      .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function(d) { return xScale(d.animal); })
        .attr("width", xScale.rangeBand())
        .attr("y", function(d) { return yScale(d.number); })
        .attr("height", function(d) { return height - yScale(d.number); })
        .on('mouseover', tip.show)
        .on('mouseout', tip.hide)
}
