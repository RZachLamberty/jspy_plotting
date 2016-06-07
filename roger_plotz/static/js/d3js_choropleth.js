function make_d3js_choropleth(divid, geojson) {
    var width = 960,
        height = 1160;

    // projection to center around uk and make it ok for geonazis
    var projection = d3.geo.albers()
            .center([0, 55.4])
            .rotate([4.4, 0])
            .parallels([50, 60])
            .scale(1200 * 5)
            .translate([width / 2, height / 2]);

    var path = d3.geo.path()
            .projection(projection);

    // create an svg element to hold the map
    var svg = d3.select(divid).append("svg")
            .attr("width", width)
            .attr("height", height);

    // map it in map map maparoo
    d3.json(geojson, function(error, uk) {
        if (error) return console.error(error);

        // creating the basic map and classing items by their subunit (eg IRL)
        svg.selectAll(".subunit")
            .data(topojson.feature(uk, uk.objects.subunits).features)
          .enter().append("path")
            .attr("class", function(d) { return "subunit " + d.id;})
            .attr("d", path);

        // adding non-irish boundaries
        svg.append("path")
            .datum(topojson.mesh(
                uk, uk.objects.subunits,
                function(a, b) { return a !== b && a.id !== "IRL"; }))
            .attr("d", path)
            .attr("class", "subunit-boundary");

        // adding irish boundaries
        svg.append("path")
            .datum(topojson.mesh(
                uk, uk.objects.subunits,
                function(a, b) { return a === b && a.id === "IRL"; }))
            .attr("d", path)
            .attr("class", "subunit-boundary IRL");

        // adding place markers
        svg.append("path")
            .datum(topojson.feature(uk, uk.objects.places))
            .attr("d", path)
            .attr("class", "place");

        // adding place names
        svg.selectAll(".place-label")
            .data(topojson.feature(uk, uk.objects.places).features)
          .enter().append("text")
            .attr("class", "place-label")
            .attr("transform", function(d) {
                return "translate(" + projection(d.geometry.coordinates) + ")";
            })
            .attr("x", function(d) {
                return d.geometry.coordinates[0] > -1 ? 6 : -6;
            })
            .attr("dy", ".35em")
            .attr("text-anchor", function(d){
                return d.geometry.coordinates[0] > -1 ? "start;" : "end;";
            })
            .text(function(d) { return d.properties.name; });

        // label counties
        svg.selectAll(".subunit-label")
            .data(topojson.feature(uk, uk.objects.subunits).features)
            .enter().append("text")
            .attr("class", function(d) { return "subunit-label " + d.id; })
            .attr("transform", function(d) {
                return "translate(" + path.centroid(d) + ")";
            })
            .attr("dy", ".35em")
            .text(function(d) { return d.properties.name; });
    });
}
