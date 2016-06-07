A lot more working out of the box here (relative to `d3.js`, that is), so that's a plus.

One important `python`-to-`javascript` consideration is the expected `json` object's format. In general, `highcharts` will be expecting lists. Unfortunately, most of the default dataframe `to_json` methods retain information about the index that causes issues.

+ **for line charts**, the first-class data structure in `highcharts` is a data array, so the best way to send items through to the `jinja` templates will be `df[data_columns].to_json(orient='values')`.
+ **for bar charts**, you will almost certainly have at least one categorical axis and a list of values (or several) corresponding to those categories. This means you probably want a `json` object which has those lists as member elements. My preferred way of generating that particular data structure is to prepare it on the python side prior to sending it over to `javascript`ville. I have preferred `json.dumps(df.to_dict(orient='list'))`.
+ **for zoom-enabled line charts**, I really can't emphasize enough how easy this was -- it is literally a one-liner.
+ **for maps**, there is a provided maps extension. It looks like it may not be free for commercial use, fwiw. That being said, it will suffer the same difficulty of many of the basic map libraries, which is that you have to build the paths yourself. I am still looking for a library which will do something like take an array of state code / value pairs and just handle it all for me.
+ **for 3d scatter plots**, as you no doubt notice, that's pretty jacked up. The issue is simple, really -- the highcharts version included in `highmaps.js` is different than the one expected / required in `highcharts-3d.js` in that it doesn't have a `seriesType = pie`. So basically, don't map and try 3d on the same page until you've figured that issue out.