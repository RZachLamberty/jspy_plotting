This is a very simple but surprisingly powerful *line plotting only* library. I really like the feel of it in the browser for some reason (not that something that subjective should matter, but it is what it is). The `api` is pretty straight-forward and obvious, and the built-in options (e.g. zoomable windows, smoothing, and the little zoom window pan/selector bar in the above "smoothed line chart" example) are all immediately *useful* additions (in contrast to other libraries with many more not-so-useful features.

Clearly, their target market is trading firms, as this whole product feels pretty tailor-made for displaying stock data.

All in all, for something very simple I might be tempted to give this library a shot.

Oh, wait, duh, should probably mentiond: ***this is for serving up data from static files***. I needed to write this out to the file system. I created a local directory `static/data` and served `csv` files directly from there. Because of this feature, it's pretty good at serving up *large* data sets, but I very highly doubt it's all that good at serving up dynamic data. I haven't tested, but my suspicion is that it's not polling the file system for changes, so updates will only come on refresh.
