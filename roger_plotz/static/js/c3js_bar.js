function make_c3js_bar_plot(data, divid) {
    var chart = c3.generate({
        bindto: divid,
        data: {
            columns: [
                ['number'].concat(unpack(data, 'number'))
            ],
            type: 'bar'
        },
        axis: {
            x: {
                type: 'category',
                categories: unpack(data, 'animal')
            }
        }
    });
}
