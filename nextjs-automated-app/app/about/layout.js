import React, { Suspense } from 'react'

function layout(props) {
  return (
    <div>
      <h1>This is about layout</h1>
      {props.children}
      {props.user}
      {props.stats}
    </div>
  )
}

export default layout
