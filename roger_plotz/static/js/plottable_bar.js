function make_plottable_bar_plot(data, divid) {
    var xScale = new Plottable.Scales.Category();
    var yScale = new Plottable.Scales.Linear();

    var xAxis = new Plottable.Axes.Category(xScale, "bottom");
    var yAxis = new Plottable.Axes.Numeric(yScale, "left");

    var plot = new Plottable.Plots.Bar()
            .addDataset(new Plottable.Dataset(data))
            .x(function(d) { return d.animal; }, xScale)
            .y(function(d) { return d.number; }, yScale);

    /*var panZoom = new Plottable.Interactions.PanZoom(xScale, null);
    panZoom.attachTo(plot);*/

    var table = new Plottable.Components.Table([
        [yAxis, plot],
        [null, xAxis]
    ]);
    table.renderTo(divid);

    window.addEventListener("resize", function() {
        table.redraw();
    });
}
