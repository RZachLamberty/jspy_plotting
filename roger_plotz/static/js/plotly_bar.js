function make_plotly_bar_plot(data, divid) {
    var plotData = [{
        x: data.map(function(pt) { return pt.animal; }),
        y: data.map(function(pt) { return pt.number; }),
        type: 'bar'
    }];
    Plotly.newPlot(divid, plotData);
}
