// 'use client';
import React from 'react';

// Dynamic Routes
function page({params}) {
    const { id } = params;
  return (
    <div>
        <div>Student Details</div>
      <h1>{id}</h1>
    </div>
  )
}

export default page


// used when generating static files
export async function generateStaticParams() {
  const data = [{id:"1"},{id:"2"},{id:"3"},{id:"4"}];
  return data.map((item) => ({ id: item.id }));
  // return {
  //   id:1
  // }
}
