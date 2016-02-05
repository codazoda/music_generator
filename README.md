# Global





* * *

### MusicGenerator() 

This is a Javascript library for generating random music riffs, patterns, and progressions.

__Features__

- Create a random rythm pattern of a length you specify
- Create a random riff in a specified size from a specified music scale
- Create a random chord progression using common chord rules

__Examples__

The following example creates an instance of the MusicGenerator class and generates
a random chord progression.

```
var generate = new MusicGenerator();
var chords = generate.chordProgression(3);
```

More examples are provided in the `NodeExample.js` file. If you have node installed 
you can run it with the following command.

```
node NodeExample.js
```

__Documentation__

To generate documentation you'll need [jsdox](http://jsdox.org) installed and then you can create the
documentation with the following command.

```
jsdox MusicGenerator.js --output ./
mv MusicGenerator.md README.md
```

__More Information__

I tried to stick to pure javascript for the library itself so that it could be 
embedded in a web page, used in a node app, or any other place you can execute
js code. I've done most of my testing, thus far, in node.js.

Besides the typical hello world application, this is the first node.js code
I've written. I tried to follow some js best practices but I don't know how
well I've done.

__Future__

There are a lot of things to do. It currently generates enough random patterns 
to get me started and to kick start my imagination when I'm songwriting. The 
patterns it generates don't typcially stand on their own and they aren't meant
to; they are a starting point for your own creativity. Here's a bit of a wish list from me.

- Create drum patterns
- Maybe create more advanced rythm (picking note length)
- Maybe generate an entire song given a pattern like 'verse, chorus, verse, chorus, chorus'.

__License__

It's early and I'm not sure yet. I'm considering all the open source licenses. If 
you want to use it, please ask me.



### rhythmPattern(notes) 

Generate a random rhythm pattern.

The first position in the pattern is always true.

__Example__

```
var generate = new MusicGenerator();
var rhythm = generate.rhythmPattern(8);
```

**Parameters**

**notes**: `number`, Number of notes to return (4 for Quarter, 8 for Eighth, etc.) Default: 8

**Returns**: `array`, Returns an array representing the pattern.


### riffPattern(scale, notes) 

Generate a random riff pattern for the provided scale. Each note can either stay the same, move up, 
or move down the scale. If it moves up or down it can move one or two notes in that direction.

Returns the list of selected notes in the specified scale. The scale could either be provided
or just the number of notes could be provided.

__Example__

```
var generate = new MusicGenerator();
var scale = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
var riff = generate.riffPattern(scale, 8);
```

**Parameters**

**scale**: `array`, An array of notes in the scale.

**notes**: `number`, The number of notes to pick for this riff.

**Returns**: , array           The full riff.


### chordProgression(number) 

Pick a random set of chords. These are returned as numbers that represent the
numbered chords in any key. For example, [2,5,6] indicates the ii, v, and vi
chords of any key. In the key of C those chords would be Dm, G, and Am.

__Example__

```
var generate = new MusicGenerator();
var chords = generate.chordProgression(3);
```

**Parameters**

**number**: `number`, The number of chords to pick.

**Returns**: `array`, The list of chords that were picked.


### drumPattern() 

TODO: Will eventually generate a drum pattern.

**Returns**: , array The full drum pattern.


### getRandomBool() 

Returns a random boolean by picking a number between 0 and 1 without using
Math.round(), which would give you a non-uniform distribution.




* * *










