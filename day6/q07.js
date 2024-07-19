// Use the map method to create a new array where each number is doubled and log the new array.

const arr = [1,2,3,4,5,6,7]

arr1 = arr.map((m) => {
    return m * 2
})

console.log(arr1)

// Use the flter method to create a new array with only even numbers and log the new array.

arr2 = arr.filter((n) =>{
    if(n%2 === 0){
        return n
    }
} )

console.log(arr2)

// Use the reduce method to calculate the sum of all numbers in the array and log the result.

arr3 = arr.reduce((acc,curr) => {
    return acc+curr
},0)

console.log(arr3)

//  Use a for loop to iterate over the array and log each element to the console.

for (const ar of arr) {
    console.log(ar)
}

//Use a forEach method to iterate over the array and log each element to the console.

const array = ['Adi','Mishra','Vats', 'hsvhv','vhjcv','xvhsa',9,3,5,2,]

array.forEach((arr) => console.log(arr))