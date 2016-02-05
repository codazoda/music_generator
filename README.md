# Music Generator Javascript Library

This is a Javascript library for generating random pieces of music.

I tried to stick to pure javascript for the library itself so that it could be 
embedded in a web page, used in a node app, or any other place you can execute
js code. I've done most of my testing, thus far, in node.js.

Besides the typical hello world application, this is the first node.js code
I've written. I tried to follow some js best practices but I don't know how
well I've done.

## Features

    - Create a random rythm pattern of a length you specify
    - Create a random riff in a specified size from a specified music scale.
    - Create a random chord progression using common chord rules.

## Future

There are a lot of things to do. It currently generates enough random patterns 
to get me started and to kick start my imagination when I'm songwriting. The 
patterns it generates don't typcially stand on their own and they aren't meant
to do so. Here's a bit of a wish list from me.

    - Create drum patterns
    - Maybe create more advanced rythm (picking note length)
    - Maybe generate an entire song given a pattern like 'verse, chorus, verse, chorus, chorus'.

## NodeExample.js

The NodeExample.js is a node.js example of how to use this library. If you have node installed 
you can run it with the following command.

    node NodeExample.js

## License

It's early and I'm not sure yet. I'm considering all the open source licenses. If 
you want to use it, please ask me.