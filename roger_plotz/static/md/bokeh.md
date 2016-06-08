Holy. Loggy.

Open up the inspection utility in your browser and check out the console. `Bokeh` is not interested in your verbosity concerns...

There is *a lot* going  on here, but I don't know that that's a good thing. My primary takeaway from this demo is this: if you want to keep all of your plot logic in python, this may be the way to go. That being said, do you want to learn how to do all your plotting in `bokeh`? You probably already know matplotlib, so if you're going to learn a new paradigm for plotting, do you want it to be in `python`? Personally, I feel like `plotly` has more ease of access (at the cost, perhaps, of features).

The output for these graphs can be very cool, but it feels a little more... chaotic, I guess?

No 3d options at this time is a `bummer ** 2`

Other thoughts:

+ hover (their term for informative tooltips) is bizarely noisy. I would definitely not recommend using for data with a lot of points (it seems to have issues rendering all that information on top of eachother)
+ lasso select and the linked graph / brushing effects are really cool
+ they've gone out of their way to include data sets of interest (e.g. the auto df) and use it in their demos. For `R` afficionados, this is a way (though perhaps not the best) to get access to those familiar sets. I think `scikit-lean` might do this as well?
+ rendering the webpage takes fiveever
+ the docs are really hard to use.

Overall, at this time I just say no thanks.
