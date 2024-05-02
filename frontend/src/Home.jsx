import React from 'react'
import './Home.css'


function Home() {
  return (
    <><div className='mx-[6rem]'>

    <navbar className='flex  flex justify-between h-[7rem] pt-4'>
        <div className='flex flex justify-center gap-[2rem]'>
         <h1 className='text-[3rem]'>LOGO</h1>
         <p className='text-xl'>Resume <br /> Management System</p>
        </div>
      <div className='border border-solid border-gray-400 border-2 rounded-lg h-10 pl-2'>
      <input type="text" 
        placeholder='Search...'/>
      </div>
    </navbar>
    <hr/>
   
    </div>

    </>
  )
}

export default Home