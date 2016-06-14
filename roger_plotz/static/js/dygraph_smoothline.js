function make_dygraph_smooth_line_plot(f, divid) {
    g = new Dygraph(
        document.getElementById(divid),
        f,
        {
            title: "goin ham",
            ylabel: "noisy sin(x)",
            rollPeriod: 10,
            showRoller: true,
            showRangeSelector: true
        }
    );
}
