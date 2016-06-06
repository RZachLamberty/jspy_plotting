function make_d3js_linezoom_plot(data, divid) {
    // init zoom vars
    var bandPos = [-1, 1];
    var pos;
    var xdomain = d3.extent(data, function(d) { return d.x });
    var ydomain = d3.extent(data, function(d) { return d.y });

    // set dimensions
    var margin = {top: 20, right: 20, bottom: 30, left: 50};
    var width = 960 - margin.left - margin.right;
    var height = 500 - margin.top - margin.bottom;
    var zoomArea = {
      x1: xdomain[0],
      y1: ydomain[0],
      x2: xdomain[1],
      y2: ydomain[1]
    };
    var drag = d3.behavior.drag();

    // create scale (object fits data into above pixels
    var xScale = d3.scale.linear()
        .range([0, width]).domain(xdomain);

    var yScale = d3.scale.linear()
        .range([height, 0]).domain(ydomain);

    // create axes
    var xAxis = d3.svg.axis()
        .scale(xScale)
        .orient("bottom");

    var yAxis = d3.svg.axis()
        .scale(yScale)
        .orient("left");

    // create the line using the scales above
    var line = d3.svg.line()
        .interpolate("basis")
        .x(function(d) { return xScale(d.x); })
        .y(function(d) { return yScale(d.y); });

    // add a graph element to the #mylinechart div (defined above) and set its attr.
    var svg = d3.select("#mylinechartwithzoom").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // add a band element
    svg.append("rect")
        .attr("width", 0)
        .attr("height", 0)
        .attr("x", 0)
        .attr("y", 0)
        .attr("class", "band");

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

    // add the clip path
    svg.append("clipPath")
        .attr("id", "clip")
      .append("rect")
        .attr("width", width)
        .attr("height", height);

    // add the regular path
    svg.append("path")
        .datum(data)
        .attr("class", "line")
        .attr("clip-path", "url(#clip)")
        .attr("d", line);

    // add the zoom overlay
    var zoomOverlay = svg.append("rect")
        .attr("width", width - 10)
        .attr("height", height)
        .attr("class", "zoomOverlay")
        .call(drag);

    // create zoomout element, register onclick behavior, and add 'reset' text
    var zoomout = svg.append("g");
    zoomout.append("rect")
        .attr("class", "zoomOut")
        .attr("width", 75)
        .attr("height", 40)
        .attr("x", -12)
        .attr("y", height + (margin.bottom - 20))
        .on("click", function() {zoomOut();});

    zoomout.append("text")
        .attr("class", "zoomOutText")
        .attr("width", 75)
        .attr("height", 30)
        .attr("x", -10)
        .attr("y", height + (margin.bottom - 5))
        .text("Zoom Out");

    zoom();

    // register drag event functions
    drag.on("dragend", function() {
        var pos = d3.mouse(this);
        var x1 = xScale.invert(bandPos[0]);
        var x2 = xScale.invert(pos[0]);

        if (x1 < x2) {
            zoomArea.x1 = x1;
            zoomArea.x2 = x2;
        } else {
            zoomArea.x1 = x2;
            zoomArea.x2 = x1;
        }

        var y1 = yScale.invert(pos[1]);
        var y2 = yScale.invert(bandPos[1]);

        if (x1 < x2) {
            zoomArea.y1 = y1;
            zoomArea.y2 = y2;
        } else {
            zoomArea.y1 = y2;
            zoomArea.y2 = y1;
        }

        bandPos = [-1, -1];

        d3.select(".band").transition()
            .attr("width", 0)
            .attr("height", 0)
            .attr("x", bandPos[0])
            .attr("y", bandPos[1]);

        zoom();
    });

    drag.on("drag", function() {
        var pos = d3.mouse(this);

        if (pos[0] < bandPos[0]) {
            d3.select(".band").
            attr("transform", "translate(" + (pos[0]) + "," + bandPos[1] + ")");
        }
        if (pos[1] < bandPos[1]) {
            d3.select(".band").
            attr("transform", "translate(" + (pos[0]) + "," + pos[1] + ")");
        }
        if (pos[1] < bandPos[1] && pos[0] > bandPos[0]) {
            d3.select(".band").
            attr("transform", "translate(" + (bandPos[0]) + "," + pos[1] + ")");
        }

        //set new position of band when user initializes drag
        if (bandPos[0] == -1) {
            bandPos = pos;
            d3.select(".band").attr("transform", "translate(" + bandPos[0] + "," + bandPos[1] + ")");
        }

        d3.select(".band").transition().duration(1)
            .attr("width", Math.abs(bandPos[0] - pos[0]))
            .attr("height", Math.abs(bandPos[1] - pos[1]));
    });

    // register zoom function
    function zoom() {
        //recalculate domains
        if (zoomArea.x1 > zoomArea.x2) {
            xScale.domain([zoomArea.x2, zoomArea.x1]);
        } else {
            xScale.domain([zoomArea.x1, zoomArea.x2]);
        }

        if (zoomArea.y1 > zoomArea.y2) {
            yScale.domain([zoomArea.y2, zoomArea.y1]);
        } else {
            yScale.domain([zoomArea.y1, zoomArea.y2]);
        }

        //update axis and redraw lines
        var t = svg.transition().duration(750);
        t.select(".x.axis").call(xAxis);
        t.select(".y.axis").call(yAxis);

        t.selectAll(".line").attr("d", line);
    }

    var zoomOut = function() {
        xScale.domain(xdomain);
        yScale.domain(ydomain);

        var t = svg.transition().duration(750);
        t.select(".x.axis").call(xAxis);
        t.select(".y.axis").call(yAxis);

        t.selectAll(".line").attr("d", line);
    }
}
