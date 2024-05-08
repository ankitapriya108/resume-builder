import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import bcrypt from "bcrypt"


const app = express()
const port = 8000;
app.use(express.json())
app.use(cors({
    origin: "http://localhost:5173"
}))


app.use(express.urlencoded({extended: true}));
const dbSchema = new mongoose.Schema({
    mydetails:[
        {
            image:{
                type: String,
                
            },
            name:{
                type: String,
                required: true
            },
            role:{
                type: String,
                required: true
            },
            totalExp:{
                type: Number,
                required: true
            },
        }
    ],
        aboutme:[
        
          {
            about:{
                type: String,
                required: true
            }, 
            aboutPoint:{
                type: Array,
                required: true
            }, 
          }
        ],
        skills:[
            {
               data:{
                type: Array
               }
            }
        ],
    work:[
        {
            workExperience:{
                type:Array
            
            }             
        }]  
}
)



const dbModel = mongoose.model("information", dbSchema);

app.get("/",async(req,res)=>{
const data = await dbModel.find();
res.send(data)
console.log(data)
})

app.post("/send",async(req,res)=>{
    const dataTosave = new dbModel(req.body);
    await dataTosave.save();
    res.send("Data found");
    console.log(dataTosave)
});


const rgSchema = new mongoose.Schema({
    
        name:{
            type:String
        },
        email:{
            type:String
        },
        createPassword:{
            type:String
        },
        confirmPassword:{
            type:String
        }
       
    
   
})

  
const rgModel = mongoose.model("registeration", rgSchema);

app.get("/register",async(req,res)=>{
    const user = await rgModel.find();
    res.send(user)
    console.log(user)
    })

app.post ("/datasave",async (req,res)=>{
    const user = req.body;
    console.log(req.body)

    try{
        const userExist = await rgModel.findOne({ email: user.email });
        if (userExist) {
            return res.status(400).json({ message: 'Email already in use' });
        }
    //    const userCreated = await user.create({user})

        const salt = await bcrypt.genSalt(10);
        const hashcreatePassword = await bcrypt.hash(user.createPassword,salt);
         user.createPassword = hashcreatePassword;

         const hashconfirmPassword = await bcrypt.hash(user.confirmPassword,salt);
         user.confirmPassword = hashconfirmPassword;

         const registerUser = new rgModel(user);
         await registerUser.save();
         res.status(200).json({message:"registeration successfull",registerUser})
         console.log(registerUser);
         
    }
    catch(error){
        // return res.send(error);
        console.log(error)
    }
})



app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
   
      const user = await rgModel.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: "Email not registered" });
      }
  
    
      const passwordMatch = await bcrypt.compare(password, user.createPassword);
      if (!passwordMatch) {
        return res.status(401).json({ message: "Incorrect password" });
      }
  
     
      res.status(200).json({ message: "Login successful", user });
    } catch (error) {
      console.error( error); 
    }
  });
  

mongoose.connect("mongodb://127.0.0.1:27017/resumebuilder").then((response) =>
    app.listen(port, () => {
        console.log("server start")

    })
)
.catch((error) => {
    console.log(error)
})