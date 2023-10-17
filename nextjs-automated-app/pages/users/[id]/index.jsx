import React, {useState, useEffect} from 'react';
import { useRouter } from 'next/router';


function UserInfoPage() {
    const [userDetails, setUserDetails] = useState({});
    const router = useRouter();
    useEffect(()=>{
      async function getUserById(){
        const id = router.query.id;
        console.log("id", id);
        let res= await fetch(`https://dummyjson.com/users/${id}`);
       let data = await res.json();
       setUserDetails(data);
      }
      getUserById();
    },[]);
  return (
    <div>
      {Object.keys(userDetails) && <div>
        <span>{userDetails.firstName} - {userDetails.lastName}</span>
        <span>{userDetails.email} </span>  
        </div>}
    </div>
  )
}

export default UserInfoPage;
