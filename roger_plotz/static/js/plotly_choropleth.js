function make_plotly_choropleth(data, divid) {
    var corn = unpack(data, 'corn');
    var plotData = [{
        type: 'choropleth',
        locationmode: 'USA-states',
        locations: unpack(data, 'code'),
        z: corn,
        text: unpack(data, 'state'),
        zmin: 0,
        zmax: arraymax(corn),
        colorscale: [
            [0, 'rgb(242,240,247)'], [0.2, 'rgb(218,218,235)'],
            [0.4, 'rgb(188,189,220)'], [0.6, 'rgb(158,154,200)'],
            [0.8, 'rgb(117,107,177)'], [1, 'rgb(84,39,143)']
        ],
        colorbar: {title: 'crons', thickness: 0.2},
        marker: {line: {color: 'rgb(255, 255, 255)', width: 2}}
    }];
    var layout = {
        title: 'Corn-o-rama',
        geo: {
            scope: 'usa',
            showlakes: true,
            lakecolor: 'rgb(255, 255, 255)'
        }
    };
    Plotly.plot(divid, plotData, layout);
}
