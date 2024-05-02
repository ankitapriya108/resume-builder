import React,{useState,useEffect, useContext} from 'react'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import PersonIcon from '@mui/icons-material/Person';
import { userData } from './App';

function MyDetails() {
//   const [image, setImage] = useState("");
//   const [photo, setPhoto] = useState();

//   function handleChangeImage(e) {
//     if (e.target.files.length !== 0) {
//       setPhoto(e?.target?.files[0]);
//     }
//   }
 
//   useEffect(() => {
//     if (photo) {
//       console.log("first");
//       setImage(URL?.createObjectURL(photo));
//     }
//   }, [photo]);

// const [image,setImage] = useState(null)
const [fileName,setFileName] = useState("No selected file")
// const [name,setName] = useState("")
// const [role,setRole] = useState("")
// const [totalExp,setTotalExp] = useState("")
 
const {name,setName,role,setRole,totalExp,setTotalExp,image,setImage } = useContext(userData);





  return (
   <>
   
   {/* <div className="mt-[3rem] mb-5 ml-[3.5rem] px-[3rem]  ">
        <h2 className="font-bold text-2xl my-5">Upload Profile</h2>
     <div className='flex justify-center items-center'>
     <input type="file"  onChange={handleChangeImage}  />
        {image && (
          <img
            className="w-[10rem] h-[10rem]"
            src={image}
          />
         )}
     </div>  
      </div> */}


<main className='flex justify-center'>

<form action="" className='flex justify-center items-center cursor-pointer h-[200px] w-[200px] bg-gray-300 rounded-full' onClick={() => document.querySelector("#mango").click()}>
<input type="file" 
accept='image/*' 
name="" 
hidden
id="mango" 
 className='cursor-pointer' 
 onChange={({target:{files}}) => {
  files[0] && setFileName(files[0].name)
  if(files){
    setImage(URL.createObjectURL(files[0]))
  }
}} />
{image ?
(<img className='h-[200px] w-[200px] rounded-full' src={image} alt="" /> )

:(<span className="text-gray-500">
<PersonIcon sx={{ fontSize: "5rem" }} />
</span>) 
}

</form>


  </main>




   <div className='flex flex-col justify-center gap-5 ml-[7rem] mt-4 '>

    <div className='flex  items-center gap-[4rem]'>
    <label>Name:</label>
    <input type="text" className='border-2 border-black rounded-sm px-1 py-2'
    value={name}
    onChange={(e)=>{
      setName(e.target.value)
    }}

    />
   
    </div>
   <div className='flex  items-center gap-[5rem]'>
    <label>Role: </label>
   <input type="text" className='border-2 border-black rounded-xl px-1 py-2'
   value={role}
   onChange={(e)=>{
    setRole(e.target.value)
   }}/>
 
  </div>
  <div className='flex items-center gap-[3rem]'>
   
  <label>Total Exp: </label> 
    <input type="text" className='border-2 border-black rounded-sm px-1 py-2' 
    value={totalExp}
    onChange={(e)=>{
      setTotalExp(e.target.value)
    }}/>Years
  </div>
   
  
   </div>
  
   </>
  )
}

export default MyDetails