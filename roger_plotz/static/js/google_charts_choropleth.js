function make_google_charts_choropleth(data, divid) {
    var dt = new google.visualization.arrayToDataTable(data, false);
    var opt = {
        title: 'cron job',
        region: 'US',
        resolution: 'provinces',
        explorer: {}
    };
    var chart = new google.visualization.GeoChart(
        document.getElementById(divid)
    );
    chart.draw(dt, opt);
}
