// Problem 1
const myArray = [5, 2, 8, 7, 11];

const secondLargest = function() {
    ref = 0;
    for (var i = 0; i < myArray.length; i++) {
        for (var j = i+1; j < myArray.length; j++) {
            if (myArray[i] > myArray[j]) {
                ref = myArray[i];
                myArray[i] = myArray[j];
                myArray[j] = ref;
            }
        }
    }
    console.log(myArray[myArray.length - 2]);
}
secondLargest()


// Problem 2
const a = 2;
const b = 3;
const add = function(a, b) {
    if (((typeof a == 'number') && (typeof b == 'number' || typeof b == 'undefined'))) {
        if (b === undefined) {
            return function(b) {
                result = a + b;
                console.log(result)
            }
        }
        console.log(a+b)
    } else { console.log('undefined') }
   
}
add(a, b);
