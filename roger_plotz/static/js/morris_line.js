function make_morris_line_plot(data, divid) {
    new Morris.Line({
        element: divid,
        data: data,
        xkey: 'x',
        ykeys: ['y'],
        labels: ['y']
    });
}
