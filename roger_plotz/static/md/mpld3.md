This was actually really, really disappointing. It started off great -- tossing a line plot onto the webpage was basically instantaneous, and the amount of HTML boilerplate required to do that was absolutely minimal.

Then came the bar chart... first of all, something about how pandas moves the tickmarks for you is totally not supported -- server crash and hang ever time. This meant that

1. I had to stop using `pandas` to make that plot (super sad)
1. The main benefit (being able to write one line of code, and have it be pandas, and have it just work) wasn't there anymore
1. the axes on the chart are basically meaningless (you have to pass in the index instead of the animal names / category, etc).

In addition to all of that noise, it is not currently *officially* released for `python 3.5`, and it was buggy as all getout (when interacting with it through an ipython terminal). I didn't try it out in the notebook but why in the world would you use it there (seriously -- why are their developers even making that an option? it's madness).

All in all, not even in the running right now in my opinion. Such a thoroughly disappointing experience.
