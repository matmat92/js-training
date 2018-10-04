'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */
String.prototype.toJadenCase = function () {
    let words = this.split (" ")
    
    for (let i = 0; i < words.length; i++)
    { 
      words[i] = words[i][0].toUpperCase() + words[i].slice(1) 
      }
      
      return words.join (" ");
      
  };
//* Begin of tests

// End of tests */
