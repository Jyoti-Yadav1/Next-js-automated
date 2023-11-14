// 'use client'
import React from 'react'

function Lecture({params}) {

  return (
    <div>
      <h1>day : {params.lecture[0]} </h1>
      <h1>Lecture : {params.lecture[1]} </h1>
    </div>
  )
}

export default Lecture

// used when generating static files
export async function generateStaticParams() {
  return [{lecture:["1", "5"]}];
  // return {
  //   id:1
  // }
}

