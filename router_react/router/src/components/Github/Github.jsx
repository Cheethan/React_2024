import React from 'react'
import { useLoaderData } from 'react-router-dom'

function User() {
    const data = useLoaderData();
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
    <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default User

export const gitinfo = async () => {
    const resp = await fetch('https://api.github.com/users/Cheethan');
    return resp.json();
}