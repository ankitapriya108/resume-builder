import React from 'react'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import {Link} from 'react-router-dom'

function Create() {
  return (
   <>
    <div className='mx-[6rem]'>
        <Link to='/new'>
        <div className=' h-[6rem] w-[6rem] border border-solid border-green-600 border-2 text-center pt-3 mt-[5rem]'>
         <h4 className='text-black-400'><AddCircleOutlineIcon/></h4>
            <p className='text-black-400'>Create-new</p>
        </div>
        </Link>
    </div>
   </>
  )
}

export default Create