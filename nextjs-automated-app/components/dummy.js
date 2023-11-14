import React from 'react'

/**
 * components written outside app and pages folder does not create 
 * route in next.js and can be used as normal component
 */
function NonRouteComponent() {
  return (
    <div>
      <h1>this is non route component</h1>
    </div>
  )
}

export default NonRouteComponent;
