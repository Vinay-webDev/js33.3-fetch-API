// fetch API
// Async/Await

// when using async we need to tell right at the begining 
/*
async function myFunction() {

} */
//===================//--------------------------//
/*
const myUsers = {
    usersLists: [],
}
const myFunction = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonUserData = await response.json();
    //console.log(jsonUserData);
    return jsonUserData;
}

//myFunction();

const myAnotherFunction = async () => {
    const data = await myFunction();
    //console.log(data);
    // to work with data
    data.forEach(user => {
        console.log(user);
    })
}

myAnotherFunction(); */
//--------------------------------------//-------------------//
/*
const myUsers = {
    usersLists: [],
}

const myFunction = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonUserData = await response.json();
    return jsonUserData;
}

const myAnotherFunction = async () => {
    const data = await myFunction();
    myUsers.usersLists = data;
    console.log(myUsers.usersLists);
}

myAnotherFunction(); */

//-------------------------------------//-----------------//
// let's move on to another example
// workflow function
/*
const getAllUserEmail = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonUserData = await response.json();
    const userEmailArray = jsonUserData.map(user => {
        return user.email;
    });
    console.log(userEmailArray);
}

getAllUserEmail(); */

// one more time 
// even if I return all the userEmail then try log it to the console it won't work***
/*
const getAllUserEmail = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonUserData = await response.json();
    const userEmailArray = jsonUserData.map(user => {
        return user.email;
    });
    return userEmailArray;
}

console.log(getAllUserEmail()); */
//-------------------------------------------------------//
// *****to get alluserEmail**** inorder to do that we need to define a new function inside our async function *****
/*
const getAllUserEmail = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonUserData = await response.json();
    const userEmailArray = jsonUserData.map(user => {
        return user.email;
    });
    //console.log(userEmailArray);
    postToWebPage(userEmailArray);
}

const postToWebPage = (data) => {
    console.log(data);
}

getAllUserEmail();*/

//------------------------------------------------------//
// 2nd parameter of fetch: is usually or always I should say is an object****
// fetch 2nd parameter: object 
/*
const getDadJoke = async () => {
    const response = await fetch("https://icanhazdadjoke.com", /*2nd parameter goes here {method: "GET",
        headers: /* headers which is nested object {
            Accept: "application/json"
        }
    });
} */
/*
const getDadJoke = async () => {
    const response = await fetch("https://icanhazdadjoke.com", {
        method: "GET",
        headers: {
            Accept: "application/json"
        }
    })
    const jsonJokeData = await response.json();
    console.log(jsonJokeData);
}

getDadJoke(); */

//to get only the joke 
/*
const getDadJoke = async () => {
    const response = await fetch("https://icanhazdadjoke.com", {
        method: "GET",
        headers: {
            Accept: "application/json"
        }
    })
    const jsonJokeData = await response.json();
    console.log(jsonJokeData.joke);
}

getDadJoke(); */

// API's can also return data which is not json***
// to get plain text from an API 

const getDadJoke = async () => {
    const response = await fetch("https://icanhazdadjoke.com", {
        method: "GET",
        headers: {
            Accept: "text/plain"
        }
    })
    const textJokeData = await response.text();
    console.log(textJokeData);
}

getDadJoke();



























