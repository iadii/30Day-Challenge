//  Write an arrow function to check if a string contains a specific character and return a boolean value.


const charChecker = (str, specifiChar) => {
    let flag = false;
    if(str.includes(specifiChar)){
        flag = true;
    }
    console.log(flag)
}

const val1 = charChecker('mishraaditya@live.com','#')
const val2 = charChecker('mishraaditya@live.com','@')



