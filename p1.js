//Problem1
//Write a JavaScript function that accepts a sentence of words all in lowercase, and returns every other word in all caps. Hint: see toUppercase()


cw1();

function cw1() {

    var input = "enter a sentence all lowercase";

    var words = input.split(" ");

// console.log(words);
    for (var i = 0; i < words.length; i++) {

        let word = words[i];

        if (i % 2 === 0) {
            word = word.toUpperCase();

        }

        console.log(word);

    }
    ;


// console.log(words[0].toUpperCase());
// console.log(words[2].toUpperCase());
// console.log(words);

}


////////////
//Problem2





