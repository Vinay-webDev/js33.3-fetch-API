// fetch API
// Async/Await

// when using async we need to tell right at the begining 
/*
async function myFunction() {

} */
//===================//--------------------------//
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
    console.log(data);
}

myAnotherFunction();








