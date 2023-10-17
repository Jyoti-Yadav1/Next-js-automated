import React from 'react'

// this component is rendering on client
function UsersPage(props) {
    const { data } = props;
  return (
    <div>
      Users (SSR)
      {data?.users?.map((item, index)=> {
      return <div key = {`user-${index}`}>{item.firstName}</div>
      })}
    </div>
  )
}

/**
 * NOTE -- Exporting getServerSideProps function tells the next.js (pages directory based)
 * that this page need to be rendered on server
 */

// This function is called on server
export const getServerSideProps = async (req, res) => {
    let response= await fetch('https://dummyjson.com/users');
    let data = await response.json();
    return {
        props : {
            data
        }
    }
}

export default UsersPage;
