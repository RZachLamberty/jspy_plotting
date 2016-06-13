function make_chartist_line_plot(data, divid) {
    new Chartist.Line(
        divid,
        {series: [data]},
        {
            axisX: {
                type: Chartist.AutoScaleAxis,
                onlyInteger: true
            },
            plugins: [
                Chartist.plugins.tooltip({
                    pointClass: 'my-chartist-point'
                })
            ]
        }
    );
}
