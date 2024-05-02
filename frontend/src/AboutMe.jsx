import React, { useContext } from 'react'
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

import { userData } from './App';

function AboutMe() {
  const {about,setAbout,aboutPoint,setAboutPoint } = useContext(userData);
  function handleInput(index,value){
    
    let newInp = [...aboutPoint]
     newInp[index] = value ;
     setAboutPoint(newInp);
   }
   function handleAdd() {
     setAboutPoint([...aboutPoint, ""]);
   }

  return (
   <>
   {/* <div className='flex justify-end items-center gap-3 mt-3'>
    <h4>Cancel</h4>
    <button className='border-2 border-slate-300 bg-slate-300 rounded-sm py-1 px-2 '>Save</button>
    <ArrowCircleRightIcon/>
   </div> */}
   
   <div className='flex  gap-[4rem] justify-center mt-[7rem]'>
    <div>
    <label>About Me:</label>

    </div>
<div>
    <textarea name="" id="" cols="42" rows="10" className='border-2 border-black px-3 py-1'
    onChange={(e)=>{
      setAbout(e.target.value)
    }}
    >
      {about}
    </textarea>
     

    {/* <input type="text" 
    value={aboutPoint}
    onChange={(e)=>{
      setAboutPoint(e.target.value)
    }}
    className='h-[3rem] w-[20.5rem] border-2 border-black rounded-sm mt-5'
    /><ControlPointIcon/> */}
    <div className="flex ">
    <div className="flex flex-col gap-[1rem] mt-2">
          {aboutPoint.map((item, index) => (
            // console.log(item);
            <div key={index} className="">
              <input
                className="border-black border-2 rounded px-3 py-1 w-[21rem]"
                type="text"
                placeholder="Write points about you"
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
</div>
    

   </>
  )
}

export default AboutMe