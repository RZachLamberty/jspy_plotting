function make_flot_line_plot(data, divid) {
    var dataObj = [{
        label: "noisy sin",
        data: data,
        lines: { show: true }
    }];
    var options = {};
    $.plot($(divid), dataObj, options);
}
