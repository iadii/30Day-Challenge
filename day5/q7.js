//  Write a higher-order function that takes a function and a number, and calls the function that many times.

function repeatFunction(fn, num) {
    return function() {
        for (let i = 0; i < num; i++) {
            fn();
        }
    };
}

// Example usage:
function sayHello() {
    console.log('Hello');
}

const repeatSayHello = repeatFunction(sayHello, 3);
repeatSayHello(); 