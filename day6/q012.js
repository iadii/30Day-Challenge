//  Create a two-dimensional array (matrix) and log the entire array to the console.
const matrix = [[2,4,6,8],[1,3,5,7]]

for(let mat of matrix){
    for(let m of mat){
        // console.log(m)
    }
}

for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix[i].length; j++){
        // console.log(matrix[i][j]);
    }
    // console.log()
}

//  Access and log a specific element from the two-dimensional array.

const rando = matrix[Math.floor(Math.random() * matrix.length)][Math.floor(Math.random() * matrix[0].length)]

// const rr = matrix[1][3];
console.log(rando)