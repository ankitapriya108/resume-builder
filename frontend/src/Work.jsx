import React, { useContext } from 'react'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import InfoIcon from '@mui/icons-material/Info';
import AddIcon from '@mui/icons-material/Add';
import { userData } from './App';
import AddCircleOutline from '@mui/icons-material/AddCircleOutline';
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

function Work() {
  const {client,setClient,country,setCountry,projectName,setProjectName,roleWork,setRoleWork,startDate,setStartDate,endDate,setEndDate,businessSolution,setBusinessSolution,projectRes,setProjectRes,technologyStack,setTechnologyStack} = useContext(userData);

  function handleInput(index,value){
    
    let newInp = [...projectRes]
     newInp[index] = value ;
     setProjectRes(newInp);
   }
   function handleAdd() {
     setProjectRes([...projectRes, ""]);
   }

 function handleresponsibility(index,value){
    
  let newInp = [...technologyStack]
   newInp[index] = value ;
   setTechnologyStack(newInp);
 }
 function handleplus() {
   setTechnologyStack([...technologyStack, ""]);
  }

  return (
    <>
   
   <div className='mx-4'>
    <h3 className='mt-[2rem]'>Work Experience <InfoIcon/> </h3>
    <div className='flex justify-left gap-[3rem] items-center mt-[1rem]'>
      <label>Client Description</label>
      <input type="text" 
      value={client}
      onChange={(e)=>{
        setClient(e.target.value)
      }}
      className='border-2 border-black h-[2.5rem] w-[65%] px-2' />
    </div>

    <div className='flex justify-left gap-[7.2rem] items-center mt-[1rem]'>
      <label>Country</label>
      <input type="text"
      value={country} 
      onChange={(e)=>{
        setCountry(e.target.value)
      }}
      
      className='border-2 border-black h-[2.5rem] w-[65%] px-2' />
    </div>

    <div className='flex justify-left gap-[4.8rem] items-center mt-[1rem]'>
      <label>Project Name</label>
      <input type="text" 
      value={projectName}
      onChange={(e)=>{
        setProjectName(e.target.value)
      }}
      className='border-2 border-black h-[2.5rem] w-[65%] px-2' />
    </div>

    <div className='flex justify-left gap-[9rem] items-center mt-[1rem]'>
      <label>Role</label>
      <div className='flex justify-left gap-[1rem] items-center'>
      <input type="text"
      value={roleWork} 
      onChange={(e)=>{
        setRoleWork(e.target.value)
      }}
      className='border-2 border-black h-[2.5rem] w-[22.5rem] px-2' />
      </div> 
    </div>

    <div className='flex justify-left gap-[7rem] items-center mt-[1rem]'>
      <label>Duration</label>
      <div className='flex justify-left gap-[1rem] items-center'>
      <input type="date" 
      value={startDate}
      onChange={(e)=>{
        setStartDate(e.target.value)
      }}
      className='border-2 border-black h-[2.5rem] w-[9rem] px-2' />
      <input type="date"
      value={endDate}
      onChange={(e)=>{
        setEndDate(e.target.value)
      }} className='border-2 border-black h-[2.5rem] w-[9rem] px-2' />
      </div>
    </div>

    <div className='flex justify-left gap-[3rem] items-center mt-[1rem]'>
      <label>Business Solution</label>
      <textarea name="" id="" cols="47" rows="4" className='border-2 border-black px-2' 
      onChange={(e)=>{
       setBusinessSolution(e.target.value)
      }}>{businessSolution}</textarea>
    </div>

    <div className='flex justify-left gap-[5.5rem] items-center mt-[1rem]'>
      <label>Technology Stack</label>
      <div className='flex justify-left gap-[1rem] items-center'>

      <div className="flex ">

<div className="flex flex-wrap  gap-[1rem] mt-2">
          {technologyStack.map((item, index) => (
            // console.log(item);
            <div key={index} className="">
              <input
                className="border-black border-2 w-[6rem] px-1 py-1 rounded-full"
                type="text"
                value={item.value}
                onChange={(e) =>{
                  handleresponsibility(index,e.target.value)}
                } 
              />
              
            </div>
          ))}
           
        </div>
        <button onClick={handleplus}>
          <AddCircleOutlineIcon />
        </button>
     </div>


      {/* <input type="text" className='border-2 border-black h-[2.5rem] w-[6rem] rounded-full' /> */}
      {/* <AddCircleOutline/> */}
      </div> 
    </div>

    <div className='flex justify-left gap-[1.5rem] items-center mt-[1rem]'>

      <label>Project Responsibility</label>
      {/* <input type="text" 
      value={projectRes}
      onChange={(e)=>{
        setProjectRes(e.target.value)
      }}
      className='border-2 border-black h-[4rem] w-[65%]' /> */}
    <div className="flex ">

<div className="flex flex-col gap-[1rem] mt-2">
          {projectRes.map((item, index) => (
            // console.log(item);
            <div key={index} className="">
              <input
                className="border-black border-2 rounded px-3 py-1 w-[21rem]"
                type="text"
                value={item.value}
                onChange={(e) =>{
                  handleInput(index,e.target.value)}
                } 
              />
              
            </div>
          ))}
           
        </div>

        <button onClick={handleAdd}>
          <AddCircleOutlineIcon />
        </button>
     </div>


    </div>

    <hr className='mt-[1rem]'/>
 <div className=' w-[15rem] border-2 border-black rounded-full px-2 py-2 mt-2 text-center'><AddIcon/> Add work Experience</div>
   </div>

    </>
  )
}

export default Work