import React from 'react'
const waitFor = (sec) => new Promise((resolve, reject)=> setTimeout(()=> resolve(), sec*1000))
async function about() {
  //  const buttonCLick =async ()=> {
  //   'use server';
  //   console.log("button Clicked")
  // }
  // await waitFor(6);
  return (
    <div>
      {/* <button onClick = {buttonCLick}>Click me</button> */}
      <span>about page component</span>
    </div>
  )
}

export default about
