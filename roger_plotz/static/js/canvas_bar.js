function make_canvas_bar_plot(data, divid) {
    var chart = new CanvasJS.Chart(
        divid,
        {
            title: {
                text: "I <3 aminals"
            },
            theme: "theme1",
            animationEnabled: true,
            axisY: {
                title: "number"
            },
            legend: {
                verticalAlign: "bottom",
                horizontalAlign: "center"
            },
            data: [
                {
                    type: "column",
                    dataPoints: data
                }
            ]
        }
    );

    chart.render();
}
