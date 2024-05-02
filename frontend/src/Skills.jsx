import React from 'react'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import SearchIcon from '@mui/icons-material/Search';


function Skills() {
  return (
    <>
    <div className='container mx-auto'>
    
   <div className='flex justify-center gap-[1rem] items-center mt-[2rem]'>
    <div>
    <h3>Skills & Proficiencies</h3>
    </div >

    <div className='h-[2rem] w-[10rem] border-2 border-black  rounded-full '>
    </div>

    <div className='h-[2rem] w-[10rem] border-2 border-black  rounded-full '>
    </div>
    <div className='h-[2rem] w-[2rem] border-2 border-black  rounded-full text-center'>
      +
    </div>
   </div>
   <input  className='h-[3rem] w-[10rem] border-2 border-black  rounded-full ml-4 mt-6 px-2'
    type="text" 
   placeholder='Search...'
   />
   <div>
    <table className='ml-4 mt-4'>
      <th>
        <tr>
        <td className='h-[3rem] w-[5rem] border-2 border-slate-300 bg-slate-300 text-left px-1'>Select</td>
        <td className='h-[3rem] w-[15rem] border-2 border-slate-300 bg-slate-300 text-left px-1'>Category</td>
        <td className='h-[3rem] w-[15rem] border-2 border-slate-300 bg-slate-300 text-left px-1'>Skils</td>
        </tr>
        <tr>
        <td className='h-[3rem] w-[5rem] border-2 border-slate-300  text-center px-1'><input type="checkbox" /></td>
        <td className='h-[3rem] w-[15rem] border-2 border-slate-300  text-left px-1'>Business Analysis</td>
        <td className='h-[3rem] w-[15rem] border-2 border-slate-300  text-left px-1'>Agile</td>
        </tr>
        <tr>
        <td className='h-[3rem] w-[5rem] border-2 border-slate-300  text-center px-1'><input type="checkbox" /></td>
        <td className='h-[3rem] w-[15rem] border-2 border-slate-300  text-left px-1'>Business Analysis</td>
        <td className='h-[3rem] w-[15rem] border-2 border-slate-300  text-left px-1'>Business Requirements Doc</td>
        </tr>
        <tr>
        <td className='h-[3rem] w-[5rem] border-2 border-slate-300  text-center px-1'><input type="checkbox" /></td>
        <td className='h-[3rem] w-[15rem] border-2 border-slate-300  text-left px-1'>Business Analysis</td>
        <td className='h-[3rem] w-[15rem] border-2 border-slate-300  text-left px-1'>Flow Diagrams</td>
        </tr>
        <tr>
        <td className='h-[3rem] w-[5rem] border-2 border-slate-300  text-center px-1'><input type="checkbox" /></td>
        <td className='h-[3rem] w-[15rem] border-2 border-slate-300  text-left px-1'>Business Analysis</td>
        <td className='h-[3rem] w-[15rem] border-2 border-slate-300  text-left px-1'>Wireframe</td>
        </tr>
        <tr>
        <td className='h-[3rem] w-[5rem] border-2 border-slate-300  text-center px-1'><input type="checkbox" /></td>
        <td className='h-[3rem] w-[15rem] border-2 border-slate-300  text-left px-1'>Business Analysis</td>
        <td className='h-[3rem] w-[15rem] border-2 border-slate-300  text-left px-1'>Other</td>
        </tr>
       
        
      </th>
    </table>
   </div>
    
    </div>

    
    </>
   
  )
}

export default Skills