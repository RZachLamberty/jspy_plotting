function make_chartist_bar_plot(data, divid) {
    var chart = new Chartist.Bar(
        divid,
        {
            labels: unpack(data, 'animal'),
            series: [unpack(data, 'number')]
        },
        {
            low: 0,
            axisY: {
                onlyInteger: true
            }
        }
    );
}
