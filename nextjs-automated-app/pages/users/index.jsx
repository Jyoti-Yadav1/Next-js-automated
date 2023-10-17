import React from 'react';
import Link from 'next/link';
import useSWR from 'swr';

/**
 * NOTE ------ Both are the examples of client side data fetching
 */

/**
 * 
 * @returns next.js provides useSWR hook that is used for fetching data, it do provides caching and optimisation
 */
const fetcher = (...args) => fetch(...args).then(res=> res.json());

function Userspage() {
    const { data, error} = useSWR('https://dummyjson.com/users', fetcher);
    if(error){
        return <div>Error in data fetching</div>
    }

    if(!data){
        return <div>Loading</div>
    }

  return (
    <div>
      {data?.users?.map((item, index)=> {
       return  <Link key ={`user-${index}`} href={`/users/${item.id}`}><div>{item.firstName}</div></Link>
      })}
    </div>
  )
}

export default Userspage;

// function Userspage() {
//     const [users, setUsers] = useState([]);

//     useEffect(()=> {
//     async function fetchUsers(){
//        let res= await fetch('https://dummyjson.com/users');
//        let data = await res.json();
//        setUsers(data);
//     }
//     fetchUsers();
//     },[]);
//     console.log("users", users);
//   return (
//     <div>
//       {users?.users?.map((item, index)=> {
//        return  <Link key ={`user-${index}`} href={`/users/${item.id}`}><div>{item.firstName}</div></Link>
//       })}
//     </div>
//   )
// }

// export default Userspage;
