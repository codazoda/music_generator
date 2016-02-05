var MusicGenerator = require('./MusicGenerator.js');

var generate = new MusicGenerator();

var scale = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'a'];

var verse = generate.rhythmPattern(8);
var riff = generate.riffPattern(scale, 8);
var chords = generate.chordProgression(3);

//console.log(verse);
console.log(chords);