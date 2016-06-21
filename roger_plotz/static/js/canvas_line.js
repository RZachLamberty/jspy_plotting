function make_canvas_line_plot(data, divid) {
    var chart = new CanvasJS.Chart(
        divid,
        {
            theme: "theme1",
            title: {
                text: "noisy sin(x)"
            },
            animationEnabled: true,
            axisX: {},
            axisY: {},
            data: [{
                type: "line",
                dataPoints: data
            }]
        }
    );

    chart.render();
}
