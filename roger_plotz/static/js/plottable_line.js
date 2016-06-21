function make_plottable_line_plot(data, divid) {
    var xScale = new Plottable.Scales.Linear();
    var yScale = new Plottable.Scales.Linear();

    var xAxis = new Plottable.Axes.Numeric(xScale, "bottom")
            .margin(5)
            .annotationsEnabled(true);
    var yAxis = new Plottable.Axes.Numeric(yScale, "left");

    var plot = new Plottable.Plots.Line()
            .addDataset(new Plottable.Dataset(data))
            .x(function(d) { return d.x; }, xScale)
            .y(function(d) { return d.y; }, yScale);

    var guideline = new Plottable.Components.GuideLineLayer("vertical")
            .scale(xScale);

    var table = new Plottable.Components.Table([
        [yAxis, plot],
        [null, xAxis]
    ]);
    table.renderTo(divid);

    new Plottable.Interactions.PanZoom(xScale, yScale)
        .attachTo(plot);

    new Plottable.Interactions.Pointer()
        .attachTo(table)
        .onPointerMove(function(p) {
            var entity = plot.entityNearest(p);
            var x = entity.datum.x;
            guideline.value(x);
            xAxis.annotatedTicks([x]);
        })
        .onPointerExit(function() {
            guideline.pixelPosition(-10);
            xAxis.annotatedTicks([]);
        });

    window.addEventListener("resize", function() {
        table.redraw();
    });
}
