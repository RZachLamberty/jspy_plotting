function make_highcharts_bar_plot(data, divid) {
    $(divid).highcharts({
        chart: {type: 'column'},
        title: {text: "Aminals are the best"},
        subtitle: {text: "and CUTE too!!!!!1!",x: -20},
        xAxis: {
            categories: data.map(function(pt) { return pt.animal; }),
            title: {text: 'aminals'}
        },
        yAxis: {
            min: 0,
            title: {text: 'number'}
        },
        tooltip: {pointFormat: 'We have {point.y} *adorable* lil guys'},
        plotOptions: {column: {borderWidth: 0}},
        series: [{
            name: "zach's zoo",
            data: data.map(function(pt) { return pt.number; })
        }]
    });
};
