function make_google_charts_line_plot(data, divid) {
    var dt = new google.visualization.arrayToDataTable(data, false);
    var opt = {
        title: 'line time',
        hAxis: {title: 'x'},
        vAxis: {title: 'sin(x)'},
        explorer: {}
    };
    var chart = new google.visualization.LineChart(
        document.getElementById(divid)
    );
    chart.draw(dt, opt);
}
