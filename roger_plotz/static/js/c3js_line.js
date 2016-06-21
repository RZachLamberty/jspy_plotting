function make_c3js_line_plot(data, divid) {
    var chart = c3.generate({
        bindto: divid,
        data: {
            x: 'x',
            rows: data
        },
        axis: {
            x: {
                tick: {
                    count: 20,
                    culling: {
                        max: 10
                    }
                }
            }
        }
    });
}
