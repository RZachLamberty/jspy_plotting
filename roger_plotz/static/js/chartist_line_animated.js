function make_chartist_animated_line_plot(data, divid) {
    var chart = new Chartist.Line(
        divid,
        {series: [data]},
        {
            axisX: {
                type: Chartist.AutoScaleAxis,
                onlyInteger: true
            }
        }
    );
}
