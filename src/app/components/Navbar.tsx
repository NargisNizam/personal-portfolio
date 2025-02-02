
import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className='bg-gray-500 h-14'>
        <div className='bg-white h-10'>
      <ul className="gap-4 px-3 text-black font-medium flex justify-center items-center ">
      <Link className="cursor-pointer hover:text-green-400" href="/">Home</Link>
      <Link className="cursor-pointer hover:text-green-400" href="/about">About</Link>
       <Link className="cursor-pointer hover:text-green-400" href="/project">Project</Link>
       <Link className='cursor-pointer hover:text-green-400'href="/skills">Skills</Link>
        </ul>  
        </div>
    </div>
  )
}

export default Navbar