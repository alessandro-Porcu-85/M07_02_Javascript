//define variable of the array
var myName = ['A', 'L', 'E', 'S', 'S', 'A', 'N', 'D', 'R', 'O'];

//define variable = map() method
var repetitions = new Map();

//define variable with map method and its function with parameter
var count_letter = myName.map(function(letter, i) {

    console.log(letter);
    document.write(letter);

    //condition
    if (!(repetitions.has(myName[i]))) {

        repetitions.set(myName[i], 1);

    } else {

        repetitions.set(myName[i], repetitions.get(myName[i]) + 1);
    }
});

//print console
console.log(repetitions);