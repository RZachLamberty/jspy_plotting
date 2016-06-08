function make_google_charts_motion(divid) {
    var dt = new google.visualization.DataTable();
    dt.addColumn('string', 'Fruit');
    dt.addColumn('date', 'Date');
    dt.addColumn('number', 'Sales');
    dt.addColumn('number', 'Expenses');
    dt.addColumn('string', 'Location');
    dt.addRows([
        ['Apples',  new Date (1988,0,1), 1000, 300, 'East'],
        ['Oranges', new Date (1988,0,1), 1150, 200, 'West'],
        ['Bananas', new Date (1988,0,1), 300,  250, 'West'],
        ['Apples',  new Date (1989,6,1), 1200, 400, 'East'],
        ['Oranges', new Date (1989,6,1), 750,  150, 'West'],
        ['Bananas', new Date (1989,6,1), 788,  617, 'West']
    ]);

    var opt = {
        title: 'motion notion',
        explorer: {}
    };

    var chart = new google.visualization.MotionChart(
        document.getElementById(divid)
    );

    chart.draw(dt, opt);
}
