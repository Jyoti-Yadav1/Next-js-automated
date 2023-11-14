

async function getUsers() {
   let res =  await fetch("https://jsonplaceholder.typicode.com/users");
   return res.json();
}

export default getUsers
