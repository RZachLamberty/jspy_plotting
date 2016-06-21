function make_rickshaw_line_plot(data, divid) {
    var graph = new Rickshaw.Graph({
        element: document.querySelector(divid),
        renderer: 'line',
        series: [
            {
                name: 'noisy sin',
                data: data,
                color: 'steelblue'
            }
        ]
    });

    graph.render();
}
