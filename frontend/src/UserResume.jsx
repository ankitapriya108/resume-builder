import React, { useState,useContext } from 'react'
import { userData } from './App';

function UserResume() {
const {name,setName,role,setRole,totalExp,setTotalExp,about,setAbout,image,setImage,aboutPoint,setAboutPoint,client,setClient,country,setCountry,projectName,setProjectName,roleWork,setRoleWork,startDate,setStartDate,endDate,setEndDate,businessSolution,setBusinessSolution,projectRes,setProjectRes,technologyStack,setTechnologyStack } = useContext(userData);




  return (
    <>
    
    <div className='w-1/2 border-l border-slate-400'>
    <div className='mx-3  border-slate-500 pl-[2rem] '>
    <div className='flex justify-end '>
<button className='border-2 border-slate-500 rounded bg-slate-500 px-2 py-2 text-white mt-[1rem]'>SAVE</button>
</div>
<div className='flex justify-start items-center gap-[1rem] '>
<div >
  <img src={image} alt="" className=" h-[6rem] w-[6rem] border-2 border-slate-300 bg-slate-300 rounded-full"/>
</div>

<div className=''>
  <h2>Name: <span>{name}</span></h2>
  <p>Role: <span>{role}</span></p>
  <p>Total Exp: <span>{totalExp} years</span></p>
</div>



</div>

<div className=' flex justify-center gap-[2rem] mt-[2rem]'>

<div className='w-[45%]'>
    <h1 className='text-[17px] font-bold '>ABOUT ME</h1>
    <div className='bg-blue-200 w-[200px] h-[3px]'>
      <div className='bg-blue-600 w-[40px] h-[3px]'></div>
    </div>
   <p className='min-h-[5rem] max-h-auto pt-[1rem]'>{about}</p>

   <ul className="flex flex-col list-disc">
    {aboutPoint.map((item,index)=>{
     if(item !== "") {
      return(
        <li className=' pt-[1rem]'>{item}</li>
      )
    }
    })}
    </ul>

  </div>

<div className='w-[45%]'>
  <h1 className='text-[17px] font-bold  '>WORK HISTORY</h1>
  <div className='bg-blue-200 w-[200px] h-[3px]'>
    <div className='bg-blue-600 w-[40px] h-[3px]'></div>
  </div>
    <div className='pt-[1rem]'>
    {client && <p className='max-h-auto'>Client : {client}</p>}
  {country && <p className='max-h-auto pt-[1rem]'>Country : {country}</p>}
  {projectName && <p className='max-h-auto pt-[1rem]'>Project Name : {projectName}</p>}
  {roleWork && <h1 className='max-h-auto font-semibold pt-[1rem]'>Role : {roleWork}</h1>}
  {(startDate || endDate) && <p className='max-h-auto pt-[1rem]'>Duration : {startDate}||{endDate}</p>}
  {businessSolution && <p className='max-h-auto pt-[1rem]'>{businessSolution}</p>}
  {technologyStack.length > 0 && (
  <p className='flex flex-wrap gap-2 pt-[1rem]'>
    {technologyStack.map((item, index) => {
    if(item !== "") {
      return(
        <div className='min-w-[2rem] max-w-auto border-2 border-black rounded-full px-3 py-2' key={index}>
        {item}
      </div>
      )
    }  
    })}
  </p>
)}

{projectRes.length > 0 && (
  <ul className='flex flex-col list-disc pt-[1rem]'>
   {projectRes.map((item,index)=>{
    if(item !== "") {
      return(
        <li className=''>{item}</li>
      )
    }
    
   })}
  </ul>
  )}
    </div>
  



  
</div>


</div>


<div className=''>
    <h1 className='text-[17px] font-bold '>SKILLS&PROFICIENCIES</h1>
    <div className='bg-blue-200 w-[200px] h-[3px]'>
      <div className='bg-blue-600 w-[40px] h-[3px]'></div>
    </div>
   <p className='min-h-[10rem] max-h-auto'></p>

  </div>

<div className=' flex justify-center gap-[2rem] w-full'>
<div className='w-[45%]'>
    <h1 className='text-[17px] font-bold '>CERTIFICATION</h1>
    <div className='bg-blue-200 w-[200px] h-[3px]'>
      <div className='bg-blue-600 w-[40px] h-[3px]'></div>
    </div>
   <p className='min-h-[10rem] max-h-auto'></p>

  </div>




<div className='w-[45%]'>
    <h1 className='text-[17px] font-bold '>EDUCATION</h1>
    <div className='bg-blue-200 w-[200px] h-[3px]'>
      <div className='bg-blue-600 w-[40px] h-[3px]'></div>
    </div>
   <p className='min-h-[10rem] max-h-auto'></p>

  </div>
</div>

    </div>
    </div>

    </>
  )
}

export default UserResume