import React, { useState, useEffect, useContext } from "react";
import { Link, Outlet, redirect, useNavigate } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowCircleRight";
import { userData } from "./App";
import axios from 'axios'


function Edit() {
  const urlObject = ["mydetails", "aboutme", "skills", "work"];
  const [counter, setCounter] = useState(1);
  const [nextPage, setNextPage] = useState(urlObject[counter]);

  const {name,setName,role,setRole,totalExp,setTotalExp,about,setAbout,image,setImage,aboutPoint,setAboutPoint,client,setClient,country,setCountry,projectName,setProjectName,roleWork,setRoleWork,startDate,setStartDate,endDate,setEndDate,businessSolution,setBusinessSolution,projectRes,setProjectRes,technologyStack,setTechnologyStack } = useContext(userData);


  const handleNextClick = (e) => {
    setCounter(counter + 1);
 
  };
  useEffect(() => {
    setNextPage(urlObject[counter])
  }, [counter])


 


//   axios.post('http://localhost:8000/send',
//   {mydetails:
//   {
//     name : name,
//     role : role,
//     totalExp : totalExp 

//   }
// },
// {aboutme:
//   {
//      about: about,
//      aboutPoint: aboutPoint
//   }
// },

// {work:
//   {
//      client: client,
//      country: country,
//      projectName: projectName,
//      roleWork: roleWork,
//      startDate: startDate,
//      endDate: endDate,
//      businessSolution: businessSolution,
//      technologyStack: technologyStack,
//      projectRes: projectRes
//   }
// },

// {
//   headers : {
//       "Content-Type" : "application/json",
//   },
// })
// .then((res)=>{
//   console.log(res)
// })
// .catch((error) => {
//   console.error("Error:", error);
// });

function handleSubmit(e) {
  e.preventDefault();

  fetch("http://localhost:8000/send", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      mydetails:{
        name: name,
        role: role,
        totalExp: totalExp
      },
      aboutme: {
        about: about,
        aboutPoint: aboutPoint,
      },
      work: {
        client: client,
        country: country,
        projectName: projectName,
        roleWork: roleWork,
        startDate: startDate,
        endDate: endDate,
        businessSolution: businessSolution,
        technologyStack: technologyStack,
        projectRes: projectRes,
      }
    })
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Response:", data);
    
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}



  return (
    <>
      <div className="resumeSection w-1/2">
        <form method="post" onSubmit={handleSubmit}>
          <div className="form-group flex justify-end ">
            <Link
              className="next bg-slate-500 text-white rounded px-2 py-2 mt-[1rem] "
              to={nextPage}
              onClick={handleNextClick}
            >
              Next <ArrowRightAltIcon />
            </Link>
          </div>
        <button type="submit" className="border-2 border-slate-400 bg-slate-400 text-white rounded px-2 py-2">Save</button>

        </form>
        <Outlet />
      </div>
    </>
  );
}

export default Edit;
