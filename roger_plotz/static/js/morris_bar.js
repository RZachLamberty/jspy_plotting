function make_morris_bar_plot(data, divid) {
    new Morris.Bar({
        element: divid,
        data: data,
        xkey: 'animal',
        ykeys: ['number'],
        labels: ['number of aminals']
    });
}
