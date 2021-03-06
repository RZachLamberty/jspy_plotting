function make_highcharts_line_plot(data, divid) {
    $(divid).highcharts({
        title: {text: "Line Charts from the <3"},
        subtitle: {text: "ballin out of ctrl"},
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
