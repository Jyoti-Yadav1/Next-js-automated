import React from 'react'
const waitFor = (sec) => new Promise((resolve, reject)=> setTimeout(()=> resolve(), sec*1000))
async function UserPage() {

  await waitFor(6);
  return (
    <div>
      <span>UserPage component</span>
    </div>
  )
}

export default UserPage