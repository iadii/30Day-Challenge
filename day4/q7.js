// Write a program to print a pattern using nested for loops:
/*
* 
* *
* * *
* * * *
* * * * *
*/
const body = document.body;
const star = document.createElement('span')
body.append(star)

for(let i = 0; i < 5; i++){
     star.innerHTML += '<br>';

    for(let j = 0; j < i; j++){
        star.innerHTML += "* ";
        // console.log("* ")
    }
    console.log(star);
}


