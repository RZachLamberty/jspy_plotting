So, `vega` is more of a philosophy than a library. It's a DSL for graphics, similar to `R`'s `ggplot`. At least, that's my initial read on it. It's mean to be a kinder, gentler `d3`.

Like most ridiculous hard and fast abstractions, I kind of love this as a concept. The actual `javascript` required to make this all happen is literally just

``` javascript
vg.embed("#mydivname", hugeJsonObject);
```

As always, the devil is in the details: for the bar chart above, that `hugeJsonObject` is

``` javascript
{
    "width": 800,
    "height": 500,
    "padding": {"top": 10, "left": 30, "bottom": 20, "right": 10},

    "data": [
        {
            "name": "table",
            "values": data
        }
    ],

    "signals": [
        {
            "name": "tooltip",
            "init": {},
            "streams": [
                {"type": "rect:mouseover", "expr": "datum"},
                {"type": "rect:mouseout", "expr": "{}"}
            ]
        }
    ],

    "predicates": [
        {
            "name": "tooltip", "type": "==",
            "operands": [{"signal": "tooltip._id"}, {"arg": "id"}]
        }
    ],

    "scales": [
        { "name": "xscale", "type": "ordinal", "range": "width",
          "domain": {"data": "table", "field": "animal"} },
        { "name": "yscale", "range": "height", "nice": true,
          "domain": {"data": "table", "field": "number"} }
    ],

        "axes": [
            { "type": "x", "scale": "xscale" },
            { "type": "y", "scale": "yscale" }
        ],

    "marks": [
        {
            "type": "rect",
            "from": {"data":"table"},
            "properties": {
                "enter": {
                    "x": {
                        "scale": "xscale", "field": "animal"
                    },
                    "width": {
                        "scale": "xscale", "band": true, "offset": -1
                    },
                    "y": {
                        "scale": "yscale", "field": "number"
                    },
                    "y2": {
                        "scale": "yscale", "value": 0
                    }
                },
                "update": { "fill": {"value": "steelblue"} },
                "hover": { "fill": {"value": "red"} }
            }
        },
        {
            "type": "text",
            "properties": {
                "enter": {
                    "align": {"value": "center"},
                    "fill": {"value": "#333"}
                },
                "update": {
                    "x": {
                        "scale": "xscale", "signal": "tooltip.animal"
                    },
                    "dx": {
                        "scale": "xscale", "band": true, "mult": 0.5
                    },
                    "y": {
                        "scale": "yscale", "signal": "tooltip.number",
                        "offset": -5
                    },
                    "text": {"signal": "tooltip.number"},
                    "fillOpacity": {
                        "rule": [
                            {
                                "predicate": {
                                    "name": "tooltip",
                                    "id": {"value": null}
                                },
                                "value": 0
                            },
                            {"value": 1}
                        ]
                    }
                }
            }
        }
    ]
}
```

gross, right? But if I have an `R` and `python` library that both generate "plots" in that same syntax, well, suddenly I completely transferrable web-ready plotting. I would go and do this, but since `plotly` already did...
