import Script from 'next/script'
import React from 'react'

function page() {
  return (
    <div>
        <div id = "demo" />
      <Script 
      src ={"/location.js"}
    //   onLoad = {()=> console.log("Loaded")}
      />
    </div>
  )
}

export default page
