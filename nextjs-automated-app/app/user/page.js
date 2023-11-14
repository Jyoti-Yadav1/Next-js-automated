import React from 'react';
import Link from 'next/link';
import getUsers from '../../services/getUsers'

async function page() {
  let users = await getUsers();

  return (
    <div>
      <h1>Users List</h1>
      {users.map(user=> {
        return <Link href = {`/user/${user.id}`} key ={user.name}><h1 key = {user.name}>{user.name}</h1></Link>
      })}
    </div>
  )
}

export default page
