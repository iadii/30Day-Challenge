//  Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.

const pro = (x , y = 7) => {
    return x * y
}

const val = pro(7)
const val1 = pro(7 , 8)
// console.log(val)
// console.log(val1)

//  Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.

const greet = (name , age = 18) => {

    return `hello ${name}`
}

greet('Aditya')