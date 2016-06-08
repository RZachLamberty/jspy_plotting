function unpack(rows, key) {
    return rows.map(function(row) { return row[key]; });
}

function make_plotly_3dscatter(data, divid) {
    var plotData = [{
        type: 'scatter3d',
        x: unpack(data, 'beef'),
        y: unpack(data, 'pork'),
        z: unpack(data, 'poultry'),
        text: unpack(data, 'code'),
        mode: 'markers',
        marker: {opacity: 0.6}
    }];
    window.plotData = plotData;
    var layout = {
        title: 'we have the meats',
        scene: {
            xaxis: {title: 'beevs'},
            yaxis: {title: 'piggies'},
            zaxis: {title: 'chrigen'}
        }
    };
    window.layout = layout;
    Plotly.plot(divid, plotData, layout);
}
