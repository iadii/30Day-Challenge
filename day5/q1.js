//  Write a function to check if a number is even or odd and log the result to the console.

function evenOdd(n){
    if(!(n % 2 === 0)){
        return 'odd'
    }else{
        return 'even'
        
    }
    return 'odd'
}

let ans = evenOdd(4)
console.log(ans)