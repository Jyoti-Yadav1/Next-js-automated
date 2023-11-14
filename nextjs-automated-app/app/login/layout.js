'use client';
import React from 'react'
import { usePathname } from 'next/navigation';
import Link from 'next/link';

function Layout({children}) {
    const pathname = usePathname();
  return (
    <div>
      <h1> Login layout page</h1>
      {children}
      {pathname!== "/login/loginCollege" && <ul className ="list">
        <li><h4>Nav Bar</h4></li>
        <li>
       <Link href = "/">Go to Hoem page</Link><br/>
       </li>
       {/* <a href = "/">Go Back</a><br/> */}
       <li>
       <Link href = "/login/loginStudent">Go to Student page</Link><br/>
       </li>
       <li>
       <Link href = "/login/loginCollege">Go to College page</Link><br/>
       </li>
       </ul>}
    </div>
  )
}

export default Layout
