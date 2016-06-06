function make_highcharts_linezoom_plot(data, divid) {
    $(divid).highcharts({
        chart: {zoomType: 'x'},
        title: {text: "Line Charts from the <3"},
        subtitle: {text: "NOW WITH REAL ZOOM (try it!)"},
        xAxis: {title: {text: 'theta'}},
        yAxis: {title: {text: 'sin(theta)'}},
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'plot1',
            data: data
        }]
    });
};
