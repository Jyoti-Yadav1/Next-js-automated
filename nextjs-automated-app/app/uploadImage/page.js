'use client';
import React, { useState } from 'react';

function page() {
    const [file, setFile] = useState("")
    const onSubmit = async (e) => {
        e.preventDefault();
    
        // hit the api
        const formData = new FormData();
        formData.set('file', file);
        const result = await fetch("/api/upload", {
             method: "POST",
             body: formData
        })
        console.log("result", result);
    }
  return (
    <main>
        <h1>Upload Image</h1>
      <form onSubmit = {onSubmit}>
       <input
       type ="file"
       name ="file"
       onChange={(e)=>setFile(e.target?.files[0])}
       />
       <button type = "submit">Upload Images</button>
      </form>
    </main>
  )
}

export default page
