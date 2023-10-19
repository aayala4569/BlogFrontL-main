let userData = {}

//Create a funtion to help us check our local storage

function checkToken()
{
    let result = false;
    let lsData = localStorage.getItem("Token");
    if(lsData && lsData != null)
    {
        result = true;
    }
    return result;
}

//One function to rule them all dry (don't repeat yourself)

const sendData = async (endpoint, passedInData ) =>
{
    let result = await fetch(`http://localhost:5101/user/${endpoint}`,{
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(passedInData)

    });
    if(!result.ok)
    {
        const message = `An error has occured! ${result.status}`
        throw new Error(message)
    }
    let data = await result.json();

    return data;
}
    



//We are going to use async and await function
//help us resolve a promise
//has to do with fetching
//This can be named whatever (createdAccount)
const createAccount = async (createdUser) =>
{
   let result = await fetch(`http://localhost:5101/user/addusers`, {
        method: "POST",
        //headers is an objects with a key value
        headers: {
            "Content-Type" : 'application/json'
        },
        //In parenthesis, has to be named the same as above
        body: JSON.stringify(createdUser)
    });

    if(!result.ok)
    {
        const message = `An error has occured! ${result.status}`
        throw new Error(message)
    }
    let data = await result.json();

    console.log(data)

}

const login = async (loginUser) =>
{
    let result = await fetch(`http://localhost:5101/user/Login`, {
        method: "POST",
        //headers is an objects with a key value
        headers: {
            "Content-Type" : 'application/json'
        },
        //In parenthesis, has to be named the same as above
        body: JSON.stringify(loginUser)
    });

    if(!result.ok)
    {
        const message = `An error has occured! ${result.status}`
        throw new Error(message)
    }
    let data = await result.json();

   

    if(data.token != null)
    {
        localStorage.setItem("Token", data.token)
    }
 console.log(data);
 return data;
}
const GetLoggedInuser = async (username) =>
{
    let result = await fetch(`http://localhost:5101/user/userbyusername/${username}`)
    userData = await result.json();
    console.log(userData);
}

const LoggedInData = () =>
{
    return userData;
}
 const AddBlogItems = async(blogItems) =>
 {
    let result = await fetch("http://localhost:5101/blog/AddBlogItems",{
    method: "POST",
    headers: {
        "Content-Type" : "application/json"
    },
    body: JSON.stringify(blogItems)
    });

    if(!result.ok)
    {
        const message = `An error has occured! ${result.status}`
        throw new Error(message)
    }
    let data = await result.json();

    return data;

    

 }

 const getBlogItems = async () =>
 {
    let result = await fetch(`http://localhost:5101/blog/GetBlogItem`);
    let data = await result.json();
    return data;
 }

 const GetblogItemsByUserId = async (UserId) =>
 {
    let result = await fetch(`http://localhost:5101/blog/GetItemsByUserId/${UserId}`);
    let data = await result.json();
    return data;

 }







export {checkToken, createAccount, login, GetLoggedInuser, LoggedInData, AddBlogItems, sendData, getBlogItems}