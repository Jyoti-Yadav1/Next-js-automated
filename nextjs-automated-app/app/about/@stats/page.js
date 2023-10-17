import React from 'react'
const waitFor = (sec) => new Promise((resolve, reject)=> setTimeout(()=> resolve(), sec*1000))
async function StatsPage() {

  await waitFor(12);
  return (
    <div>
      <span>StatsPage component</span>
    </div>
  )
}

export default StatsPage