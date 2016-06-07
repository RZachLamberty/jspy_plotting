overall, I found this to be pretty tedious. I'll echo some previous comments I've seen re: `d3.js`: often, you're killing a fly with a sledgehammer. You specify *E V E R Y T H I N G*. It can be brutal, and when things don't work there isn't always a good reason why.

The developers have put together a ton of examples, and though they are very helpful, they generally offer little to nothing in the way of documentation. The syntax is good enough that I could usually grok what was going on, though, so I guess that's a plus. The fact that the basic product after all of that work isn't interactive (compare to plotly) is a REAL downer.

The strongest feeling I have, at the end of this process, is this: if I *find* a plot that I like, I can use any data I want to make that plot again. If I have an idea of what it is I'd like to make (in terms of a particular visualization), I know that making that plot is probably possible using `d3.js`, but can I get there? Not without a lot of work.

I also made one good move: I abstracted out the css and javascript from the examples into static files and linked them. easy in concept, but I forged ahead not doing that and it really cost me.
