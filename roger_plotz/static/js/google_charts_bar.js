function make_google_charts_bar_plot(data, divid) {
    var dt = new google.visualization.arrayToDataTable(data, false);
    var opt = {
        title: "i <3 aminals",
        hAxis: {title: 'aminal'},
        vAxis: {title: 'nubmer'}
    };
    var chart = new google.visualization.ColumnChart(
        document.getElementById(divid)
    );
    chart.draw(dt, opt);
}
