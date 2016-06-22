function make_vega_line_plot(data, divid) {
    vg.embed(
        divid,
        {
            "width": 800,
            "height": 500,
            "padding": {"top": 10, "left": 30, "bottom": 20, "right": 10},

            "signals": [
                {
                    "name": "tooltip",
                    "init": {},
                    "streams": [
                        {"type": "symbol:mouseover", "expr": "datum"},
                        {"type": "symbol:mouseout", "expr": "{}"},
                    ]
                }
            ],

            "data": [
                {
                    "name": "noisysin",
                    "values": data
                }
            ],

            "scales": [
                {
                    "name": "x",
                    "type": "linear",
                    "range": "width",
                    "domain": {"data": "noisysin", "field": "x"}
                },
                {
                    "name": "y",
                    "type": "linear",
                    "range": "height",
                    "nice": true,
                    "domain": {"data": "noisysin", "field": "y"}
                }
            ],
            "axes": [
                {"type": "x", "scale": "x"},
                {"type": "y", "scale": "y"}
            ],
            "marks": [
                {
                    "type": "line",
                    "from": {"data": "noisysin"},
                    "properties": {
                        "enter": {
                            "x": {"scale": "x", "field": "x"},
                            "y": {"scale": "y", "field": "y"},
                            "stroke": {"value": "#000"},
                            "strokeWidth": {"value": 1}
                        }
                    }
                },
                {
                    "type": "symbol",
                    "from": {"data": "noisysin"},
                    "properties": {
                        "enter": {
                            "x": {"scale": "x", "field": "x"},
                            "y": {"scale": "y", "field": "y"},
                            "fill": {"value": "#fff"},
                            "stroke": {"value": "#000"},
                            "strokeWidth": {"value": 1},
                            "size": {"value": 49}
                        },
                        "update": {
                            "fill": [
                                {
                                    "test": "datum._id == tooltip._id",
                                    "value": "red"
                                },
                                {"value": "#fff"}
                            ]
                        }
                    }
                },
                {
                    "type": "text",
                    "properties": {
                        "enter": {
                            "align": {"value": "center"},
                            "baseline": {"value": "bottom"},
                            "fill": {"value": "red"},
                            "fontSize": {"value": 14},
                            "fontWeight": {"value": "bold"}
                        },
                        "update": {
                            "x": {"scale": "x", "signal": "tooltip.x"},
                            "y": {
                                "scale": "y", "signal": "tooltip.y", offset: -5
                            },
                            "text": {"signal": "tooltip.y"},
                            "fillOpacity": [
                                {
                                    "test": "!tooltip._id",
                                    "value": 0
                                },
                                {"value": 1}
                            ]
                        }
                    }
                }
            ]
        }
    );
}
