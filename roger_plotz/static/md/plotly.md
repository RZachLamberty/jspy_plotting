Honestly, this was all just so damn simple. Plotly is great. It seemed like most of the time, all you *really* needed to do was change the `data.type` attribute and you were done.

Also, the map example was soooooooooo much easier. So much easier. It was exaclty what I was asking for back on the highcharts page.

For what it's worth, from a `python` perspective I seemed totally able to just pass around `df.to_json(orient='records')` items for almost everything I found the following useful, though:

``` javascript
function unpack(rows, key) {
    return rows.map(function(row) { return row[key]; });
}
```
