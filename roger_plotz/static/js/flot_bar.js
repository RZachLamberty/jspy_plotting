function make_flot_bar_plot(data, divid) {
    var dataObj = [{
        label: "aminals",
        data: data,
        bars: {
            show: true,
            align: "center",
            barWidth: 0.6
        }
    }];
    var options = {
        xaxis: {
            mode: "categories",
            tickLength: 0
        }
    };
    $.plot($(divid), dataObj, options);
}
