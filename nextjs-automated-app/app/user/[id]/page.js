import React from 'react'
import getUsers from '../../../services/getUsers'

async function page({params}) {
    console.log("params", params);
    const users = await getUsers();
    let currentUser = users[params.id-1];


  return (
    <div>
       User Details Page
       {currentUser?.name}
    </div>
  )
}

export default page

export async function generateStaticParams(){
    let users = await getUsers();
    return users.map(user=> {return {id: user.id.toString()}});
  }
