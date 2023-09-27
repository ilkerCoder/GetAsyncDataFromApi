/* The library we will use to fetch data from an API. 
You can also use the native library, node-fetch for use fetch method 
instead axios method */
const axios = require('axios');
/* The method that fetch the data from JSONPlaceholder API*/
async function getByUserId (userId){ 
const {data:user}=await axios("https://jsonplaceholder.typicode.com/users/" +userId)
const {data:post} = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${+userId}`)
return console.log("user:" ,user ,"posts:",post);
}
getByUserId(1);