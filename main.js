// String length method
var name1='Selvam';
console.log(name1);
var length=name1.length;
console.log('length of the above word ',length);

// String slice method
var animals="cat, dog, elephant";
//to print dog only
console.log(animals.slice(5,8));
//to print cat only
console.log(animals.slice(-18,-15));
//to print dog and elephant
console.log(animals.slice(5));
//to print elephant only
console.log(animals.slice(-8));

//String substring()
var birds='hen, crow, peacock';
//to print hen only
console.log(birds.substring(0,3));

//String substr()
// to print the peacock only,first value is starting index and second value is length of the element
console.log(birds.substr(11,7));
//to print crow and peacock
console.log(birds.substr(5));
// to print the peacock only
console.log(birds.substr(-7));

//Replacing String content
console.log("Replacing String content");
var myself1='selvam is a good person';
console.log(myself1);
var myself2=myself1.replace('good','kindly');
console.log(myself2);
// By default, the replace() method replaces only the first match:
console.log('By default, the replace() method replaces only the first match:');
var myself1='selvam is a good person and good attitude person';
console.log(myself1);
var myself2=myself1.replace('good','kindly');
console.log(myself2);
// By default, the replace() method is case sensitive
console.log('By default, the replace() method is case sensitive:');
var myself1='selvam is a good person and good attitude person';
console.log(myself1);
var myself2=myself1.replace('GOOD','kindly');
console.log(myself2);
// To replace case insensitive, use a regular expression with an /i flag (insensitive):
console.log('To replace case insensitive, use a regular expression with an /i flag (insensitive):');
var myself1='selvam is a good person and good attitude person';
console.log(myself1);
var myself2=myself1.replace(/GOOD/i,'kindly');
console.log(myself2);
// To replace all matches, use a regular expression with a /g flag (global match):
console.log('To replace all matches, use a regular expression with a /g flag (global match):');
var myself1='selvam is a good person and good attitude person';
console.log(myself1);
var myself2=myself1.replace(/good/g,'kindly');
console.log(myself2);

// JavaScript String toUpperCase()
console.log('JavaScript String toUpperCase()');
var name1='mariselvan';
var upperCase=name1.toUpperCase();
console.log(upperCase);

// JavaScript String toLowerCase()
console.log('JavaScript String toLowerCase()');
var name1='MARISELVAN';
var upperCase=name1.toLowerCase();
console.log(upperCase);

// JavaScript String concat()
console.log('JavaScript String concat()');
var fname='ajith';
var lname='kumar';
var fullName=fname.concat(' ',lname);
console.log(fullName);
// concat two or more strings
console.log('concat two or more strings');
var firstWord='mari';
var secondWord='is';
var thirdWord='a';
var fourthWord='good';
var fifthWord='boy';
var fullSentence=firstWord.concat(' ',secondWord,' ',thirdWord,' ',fourthWord,' ',fifthWord)
console.log(fullSentence);
// concat two or more strings with + operator
var fullSentence='Birds'+" "+"are"+" "+"fly."
console.log(fullSentence);

// JavaScript String trimStart()
// ECMAScript 2019 added the String method trimStart() to JavaScript.
console.log("JavaScript String trimStart()");
var sentence1="    she is      very    beautiful        ";
console.log(sentence1);
console.log('length '+sentence1.length);
console.log('removes whitespace only from the start of a string.');
var sentence2=sentence1.trimStart();
console.log(sentence2);
console.log('length '+sentence2.length);
// JavaScript String trimEnd()
console.log('JavaScript String trimEnd()');
var sentence1="    she is      very    beautiful       ";
console.log(sentence1);
console.log('length '+sentence1.length);
console.log('removes whitespace only from the end of a string.');
var sentence2=sentence1.trimEnd();
console.log(sentence2);
console.log('length '+sentence2.length);

// JavaScript String Padding
console.log('JavaScript String Padding');
//ECMAScript 2017 added two String methods: padStart() and padEnd() to support padding at the beginning and at the end of a string.
// padStart()
var text1="5";
var text2=text1.padStart(6,'a');
console.log(text2);

var text1="5";
var text2=text1.padStart(6,'0');
console.log(text2);

// number padStart()
var num=5;
var text1=num.toString();
var text2=text1.padStart(6,'b');
console.log(text2);





// padEnd()
var text1="5";
var text2=text1.padEnd(6,'a');
console.log(text2);

var text1="5";
var text2=text1.padEnd(6,'0');
console.log(text2);

// number padEnd()
var num=5;
var text1=num.toString();
var text2=text1.padEnd(6,'b');
console.log(text2);

// Extracting String Characters
//  There are 3 methods for extracting string characters:

// charAt(position)
// charCodeAt(position)
// Property access [ ]

// JavaScript String charAt()
// The charAt() method returns the character at a specified index (position) in a string:
var name3='Kamarajar';
var letter=name3.charAt(2);
console.log(letter);

// JavaScript String charCodeAt()
// The charCodeAt() method returns the unicode of the character at a specified index in a string:

// The method returns a UTF-16 code (an integer between 0 and 65535).

var name3='Kamarajar';
var number=name3.charCodeAt(2);
console.log(number);//    DOUGHT


// Property Access
// ECMAScript 5 (2009) allows property access [ ] on strings:

var name1='mariselvan';
var letter=name1[4];
console.log(letter);

// read only and not write
var name1='mariselvan';
name1[0]='z';
console.log(name1);

