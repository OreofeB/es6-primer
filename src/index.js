//console.log("Welcome to my notes on JS")

/* 
import logger from './tools.js'
logger("Welcome! We are now having fun with modularity");
*/

import logger, { appName, mytimeoutpromise, dummyFunction, dummyFunction2, dummyFunction3, genericFunction, genericFunction2, multiplier, getRemoteData } from './tools.js'

/*
logger("Welcome! We are now having fun with modularity");

logger("Welcome! The application name is " + appName + ". There is a function that returns " + dummyFunction());

logger(`Welcome! The application name is ${appName}. There is a function that returns ${dummyFunction2()}.`);

logger('Example 3: ' + dummyFunction3());

logger(genericFunction());

logger(genericFunction2());

/*
logger(multiplier(2, 4, 6, 8, 10));

try {
    logger(multiplier(2));
} catch (error) {
    logger(error.message);
}
/*

/*
new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Timeout is over"); //send out a success feedback with data using resolve 
    }, 3000) //set timeout for 1000ms i.e. 1second. 
}).then((data) => {
    logger(`${data}`);//This should output "Timeout is over" 
}).catch((error) => {//This will only be reached it the asynchronous function returned a reject statement. 
    logger(`${error}`);
});
*/

/*
const url = 'https://jsonplaceholder.typicode.com/users/3'; //Get data for a user with id 1 
fetch(url)
    .then(response => response.json()) //convert data returned to json 
    .then(data => logger(`Data: Id = ${data.id}, Name = ${data.name}, Email = ${data.email}`)) //use the json data 
    .catch(error => logger(`Error: ${error}`));

const fetch1 = fetch('https://jsonplaceholder.typicode.com/users/1').then(response => response.json())
const fetch2 = fetch('https://jsonplaceholder.typicode.com/users/2').then(response => response.json())
const fetch3 = fetch('https://jsonplaceholder.typicode.com/users/3').then(response => response.json())
Promise.all([fetch1, fetch2, fetch3])//get the data for the three calls in an array. 
    .then((data) => {
        logger(`User1 name = ${data[0].name}; User2 email = ${data[1].email}; User3 username= ${data[2].username}`);//display data from array 
    })
*/

/*
try {
    const data = await getRemoteData("https://jsonplaceholder.typicode.com/users/2");
    logger(data);
} catch (error) {
    logger(error.message)
}
*/

/*
const addressees = ["John", "Mary", "Paul"];
addressees.map(
    addressees => {
        let Templatemessage = `Dear ${addressees},
    It is my pleasure to inform you that your admission letter is ready for collection`;
        logger(Templatemessage);
    }
);
*/

const students = [
    { 
        firstname: 'Oreofe',
        lastname: 'Bajomo',
        address:  'Chevron'
    },
    { 
        firstname: 'Victor',
        lastname: 'Bajomo',
        address:  'Ajah'    
    },
    { 
        firstname: 'Segun',
        lastname: 'Bajomo',
        address:  'Ikoyi'
    }
]

students.map(
    students => {
        let Templatemessage = 
        `Dear Student,
        Please confirm your details below;
        Full Name: ${students.firstname} ${students.lastname}
        Address: ${students.address}
        Thank you`
        logger(Templatemessage);
    }
);
