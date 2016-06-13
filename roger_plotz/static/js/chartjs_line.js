function make_chartjs_line_plot(mydata, divid) {
    var ctx = $(divid);
    var scatterChart = new Chart(ctx, {
        type: 'line',
        data: {
            datasets: [{
                label: 'Noisy sin(x)',
                data: mydata,
                fill: false,
                lineTension: 0
            }]
        },
        options: {
            scales: {
                xAxes: [{
                    type: 'linear',
                    position: 'bottom'
                }]
            }
        }
    });
}
