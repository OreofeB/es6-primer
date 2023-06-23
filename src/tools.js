/*
// Initial function
var logger = function (output) {
    console.log(output)
   }
    
   export default logger;
*/

var logger = function (output) {
    console.log(output)
}

export var appName = "ES6 Review";


export var dummyFunction = function () {
    return "I am a dummy function";
}

// Illustrating arrow function
var logger2 = (output) => {
    console.log(output)
}

export const dummyFunction2 = () => {
    return "I am the second dummy function using arrow function";
}

export const dummyFunction3 = () => {
    let feedback = "I am another dummy function"; //mutable variable
    feedback = "I am still a dummy function";//value changed
    return feedback;
}

export const genericFunction = () => {
    const languages = ['Phyton', 'Javascript', 'Java']; // creating an array
    const [firstlang, secondlang] = languages; // assiging your items in your array to variables
    return `The first language is ${firstlang} and the second is ${secondlang}`;
}

export const genericFunction2 = () => {
    const languages = ['Phyton', 'Javascript', 'Java', 'C++', 'C#']; // creating an array
    const [firstlang, secondlang, ...otherlanguages] = languages; // assiging your items in your array to variables
    return `The first language is ${firstlang} and the second is ${secondlang}.
    The rest are ${otherlanguages}`;
}

export const genericFunction3 = (a, b = 1) => {
    //This function multiplies any two numbers
    //if only one argument is sent as argument when function is called, 
    //b will default to 1.
    return [a * b];
}

// Multiplier function
export const multiplier = (...numbers) => {
    let product = 1;
    if (numbers.length < 2) {
        throw new Error("Illegal argument counts. Arguments must be greater than 1")
    }
    for (let number of numbers) {
        product = product * number;
    }
    return product;
}

export const mytimeoutpromise = () => {
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Timeout is over"); //send out a success feedback with data using resolve 
        }, 1000) //set timeout for 1000ms i.e. 1second. 
    })
}

// try catch replaces direct promises
export const getRemoteData = async (url) => {
    try {
        const response = await fetch(url);
        if (response.status > 400) {
            throw new Error("Failed to fetch data from the url provided")
        }
        const data = await response.json();
        //logger (data);
        return data;
    } catch (error) {
        throw new Error(error);
    }
}


export default logger;