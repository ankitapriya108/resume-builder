import { createContext, useState } from 'react'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Home'
import Builder from './Builder'
import Create from './Create'
import ResumeWrapper from './ResumeWrapper'
import AboutMe from './AboutMe'
import Skills from './Skills'
import Work from './Work'
import SelectSection from './SelectSection'
import MyDetails from './MyDetails'
export const userData = createContext();


function App() {
const [image,setImage] = useState("")
const [name,setName] = useState("")
const [role,setRole] = useState("")
const [totalExp,setTotalExp] = useState("")
const [about,setAbout] = useState("")
const [aboutPoint,setAboutPoint] = useState([""])
const [client,setClient] = useState("")
const [country,setCountry] = useState("")
const [projectName,setProjectName] = useState("")
const [roleWork,setRoleWork] = useState("")
const [startDate,setStartDate] = useState("")
const [endDate,setEndDate] = useState("")
const [businessSolution,setBusinessSolution] = useState("")
const [projectRes,setProjectRes] = useState([""])
const [technologyStack,setTechnologyStack] = useState([""])

  return (
    <>
      <userData.Provider value={{name,setName,role,setRole,totalExp,setTotalExp,about,setAbout,image,setImage,aboutPoint,setAboutPoint,client,setClient,country,setCountry,projectName,setProjectName,roleWork,setRoleWork,startDate,setStartDate,endDate,setEndDate,businessSolution,setBusinessSolution,projectRes,setProjectRes,technologyStack,setTechnologyStack}}>
    
      <BrowserRouter>
      <Routes>

        <Route path ='/' element={<><Home/> <Create/></>}/>

        <Route path='/new' element = {<ResumeWrapper/>}>
           <Route index element={<SelectSection/>}/>
           <Route element={<MyDetails/>} path='mydetails'/>
           <Route element={<AboutMe/>} path='aboutme'/>
           <Route element={<Skills/>} path='skills'/>
           <Route element={<Work/>} path='work'/>
        </Route>
        
      </Routes>
      </BrowserRouter>
      </userData.Provider>





    </>
  )
}

export default App
