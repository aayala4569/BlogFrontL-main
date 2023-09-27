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

//We are going to use async and await function
//help us resolve a promise
//has to do with fetching
//This can be named whatever (createdAccount)
const createAccount = async (createdUser) =>
{
   let result = await fetch("http://localhost:5101/user/addusers", {
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

export {checkToken, createAccount}