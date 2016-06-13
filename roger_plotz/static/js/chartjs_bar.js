function make_chartjs_bar_plot(mydata, divid) {
    var ctx = $(divid);
    var scatterChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: unpack(mydata, 'animal'),
            datasets: [{
                label: 'aminals',
                backgroundColor: "rgba(255,99,132,0.2)",
                borderColor: "rgba(255,99,132,1)",
                borderWidth: 1,
                hoverBackgroundColor: "rgba(255,99,132,0.4)",
                hoverBorderColor: "rgba(255,99,132,1)",
                data: unpack(mydata, 'number')
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}
