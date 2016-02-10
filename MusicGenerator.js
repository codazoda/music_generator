/**
 * 
 * This is a Javascript library for generating random music riffs, patterns, and progressions.
 *
 * __Features__
 *
 * - Create a random rythm pattern of a length you specify
 * - Create a random riff in a specified size from a specified music scale
 * - Create a random chord progression using common chord rules
 *
 * __Examples__
 *
 * The following example creates an instance of the MusicGenerator class and generates
 * a random chord progression.
 *
 * ```
 * var generate = new MusicGenerator();
 * var chords = generate.chordProgression(3);
 * ```
 *
 * More examples are provided in the `NodeExample.js` file. If you have node installed 
 * you can run it with the following command.
 * 
 * ```
 * node NodeExample.js
 * ```
 * 
 * __Documentation__
 * 
 * To generate documentation you'll need [jsdox](http://jsdox.org) installed and then you can create the
 * documentation with the following command.
 * 
 * ```
 * jsdox MusicGenerator.js --output ./
 * mv MusicGenerator.md README.md
 * ```
 * 
 * __More Information__
 *
 * I tried to stick to pure javascript for the library itself so that it could be 
 * embedded in a web page, used in a node app, or any other place you can execute
 * js code. I've done most of my testing, thus far, in node.js.
 *
 * Besides the typical hello world application, this is the first node.js code
 * I've written. I tried to follow some js best practices but I don't know how
 * well I've done.
 * 
 * __Future__
 *
 * There are a lot of things to do. It currently generates enough random patterns 
 * to get me started and to kick start my imagination when I'm songwriting. The 
 * patterns it generates don't typcially stand on their own and they aren't meant
 * to; they are a starting point for your own creativity. Here's a bit of a wish list from me.
 *
 * - Create drum patterns
 * - Maybe create more advanced rythm (picking note length)
 * - Maybe generate an entire song given a pattern like 'verse, chorus, verse, chorus, chorus'.
 *
 * __License__
 *
 * It's early and I'm not sure yet. I'm considering all the open source licenses. If 
 * you want to use it, please ask me.
 *
 * @module MusicGenerator
 */
function MusicGenerator() {

}

/**
 * 
 * 
 * Generate a random rhythm pattern.
 *
 * The first position in the pattern is always true.
 *
 * __Example__
 *
 * ```
 * var generate = new MusicGenerator();
 * var rhythm = generate.rhythmPattern(8);
 * ```
 *
 * @param  {number} notes  Number of notes to return (4 for Quarter, 8 for Eighth, etc.) Default: 8
 * @return {array}         Returns an array representing the pattern.
 */
MusicGenerator.prototype.rhythmPattern = function(notes) {
  var rhythmPattern = [true];
  noteIndex = 0;
  // If the number of notes wasn't passed, default to 8
  if (typeof notes === 'undefined') {
    notes = 8;
  }
  // Loop through the number of notes in this pattern (skipping the first)
  for(noteIndex==1;noteIndex<notes-1;noteIndex++) {
    // Pick a random value of zero (false) or one (true) and push it onto the array as a boolean
    var onOrOff = this.getRandomBool();
    rhythmPattern.push(Boolean(onOrOff));
  }
  return rhythmPattern;
}

/**
 * Generate a random riff pattern for the provided scale. Each note can either stay the same, move up, 
 * or move down the scale. If it moves up or down it can move one or two notes in that direction.
 *
 * Returns the list of selected notes in the specified scale. The scale could either be provided
 * or just the number of notes could be provided.
 *
 * __Example__
 *
 * ```
 * var generate = new MusicGenerator();
 * var scale = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
 * var riff = generate.riffPattern(scale, 8);
 * ```
 * 
 * @param  {array}  scale  An array of notes in the scale.
 * @param  {number} notes  The number of notes to pick for this riff.
 * @return array           The full riff.
 */
MusicGenerator.prototype.riffPattern = function(scale, notes) {
  var riffPattern = [];
  // Pick the first note
  var prevNote = Math.floor(Math.random() * scale.length);
  var nextNote = -1; // Start with invalid note
  var direction = 0;
  var noteIndex = 0;
  // Loop the number of notes we want to pick
  for(noteIndex==1;noteIndex<notes;noteIndex++) {
    // Pick a random number between -2 and 2 and to pick the next note. Keep going until we pick
    // a note that's in bounds
    while (nextNote < 0 || nextNote > scale.length) {
        direction = Math.floor(Math.random() * 5) - 2;
        nextNote = prevNote + direction;
    }
    // Push the next note onto the array
    riffPattern.push(nextNote);
    // Set the previously picked note before we loop
    prevNote = nextNote;
    // Set the next note back to an invalid value
    nextNote = -1;
  }
  return riffPattern;
}

/**
 * Pick a random set of chords. These are returned as numbers that represent the
 * numbered chords in any key. For example, [2,5,6] indicates the ii, v, and vi
 * chords of any key. In the key of C those chords would be Dm, G, and Am.
 * 
 * __Example__
 *
 * ```
 * var generate = new MusicGenerator();
 * var chords = generate.chordProgression(3);
 * ```
 * 
 * @param  {number} number The number of chords to pick.
 * @return {array}         The list of chords that were picked.
 */
MusicGenerator.prototype.chordProgression = function (number) {
  var pickedChords = [];
  var chord = 0;
  var pick = 0;
  var chordKey = 0;
  var chordIndex = 0;
  // Pick an initial chord and push it onto the picked chords array
  var prevChord = Math.floor(Math.random() * 7) + 1;
  pickedChords.push(prevChord);
  // These are some basic rules for major chords (music theory). For example, if the previous 
  // chord was a ii (2), that chord typically moves to the v (5) or vii (7).
  var chordRules = {
    1: [1,2,3,4,5,6,7],
    2: [5,7],
    3: [4,6],
    4: [2,5,7],
    5: [6],
    6: [2,3,4,5],
    7: [1]
  };
  // Loop as many times as necessary
  for(chordIndex==1;chordIndex<number-1;chordIndex++) {
    // Pick a chord from the set of rules for the previous chord
    pick = Math.floor(Math.random() * chordRules[prevChord].length);
    chord = chordRules[prevChord][pick];
    pickedChords.push(chord);
    prevChord = chord;
  }
  return pickedChords;
}

/**
 * TODO: Will eventually generate a drum pattern.
 * 
 * @return array The full drum pattern.
 */
MusicGenerator.prototype.drumPattern = function() {

}

/**
 * Returns a random boolean by picking a number between 0 and 1 without using
 * Math.round(), which would give you a non-uniform distribution.
 */
MusicGenerator.prototype.getRandomBool = function() {
  return Math.random() >= 0.5;
}

// NODE SPECIFIC: Export the MusicGenerator class
module.exports = MusicGenerator;
