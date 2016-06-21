There were a few gotchas here:

1. the size of the `div` elements matters. without setting it in the `style` attribute the plot takes up as much space as it wants while the page content just hangs out on a lower layer. I'm sure they have their reason for that as a default behavior, but I'm not aware of any good reason.
1. The structure of the data element passed in is a list of objects. Easy to catch, but I managed to not and it cost me a looooooot of time.

There are only a few themes available (three at the moment, to be exact), but the library itself is relatively snappy and configurable. I don't think it's as good as some of the competitors, but perhaps it is faster (that seems to be its bread and butter). And at this point, I can't really complain about a library that manages to autoscale `x` axes for me.
