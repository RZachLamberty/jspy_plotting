Okay, so... to the author's credit, this really does reduce boilerplate quite a lot. It is a nice convenience wrapper to several libraries. I could see it being broadly useful.

There is a big tradeoff, though. You lose out on much of the non-basic functionality of the libraries. Only the following chart types are supported (as of writing):

+ line
+ pie
+ column
+ bar
+ area

Note that the default behavior is okay for barcharts, but for any other data the default assumption for your x axis is *time series*. I don't know about you, but when I start plotting something, that's not *my* default.

To make matters worse, the way you parameterize your object is really pretty janky. For anything beyond the default use cases, you will likely need to pass parameters to the original charting library. This probably means digging through their documentation and implementation details. You had to import the `js` files in your template header, so I ask how much you are actually saving with this boilerplate convenience?

Final verdict: for a defined use case, this would be totally fine. I don't think it's my use case, however
