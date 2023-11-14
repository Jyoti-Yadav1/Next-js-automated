import React from 'react';
import Link from "next/link";

function StudentList() {
  return (
    <div>
      <h1>Student List</h1>
      <ul>
        <li><Link href = "/studentList/1">Amit</Link></li>
        <li><Link href = "/studentList/2">Mohit</Link></li>
        <li><Link href = "/studentList/2">Jyoti</Link></li>
        <li><Link href = "/studentList/4">Gagan</Link></li>
      </ul>
    </div>
  )
}

export default StudentList
