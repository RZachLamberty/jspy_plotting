function make_plotly_line_plot(data, divid) {
    var plotData = [{
        x: data.map(function(pt) { return pt.x; }),
        y: data.map(function(pt) { return pt.y; }),
        type: 'scatter'
    }];
    Plotly.newPlot(divid, plotData);
}
