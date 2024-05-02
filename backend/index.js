import express from "express"
import mongoose from "mongoose"
import cors from "cors"


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
        work:[
            {
                client:{
                    type: String,
                    required: true
                },
                country:{
                    type: String,
                    required: true
                },
                projectName:{
                    type: String,
                    required: true
                },
                roleWork:{
                    type: String,
                    required: true
                },
                startDate:{
                    type: String,
                    required: true
                },
                endDate:{
                    type: String,
                    required: true
                },
                businessSolution:{
                    type: String,
                    required: true
                },
                technologyStack:{
                    type: Array,
                    required: true
                },
                projectRes:{ 
                    type: Array,
                    required: true
                },
            }
        ]
        
    
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




mongoose.connect("mongodb://127.0.0.1:27017/resumebuilder").then((response) =>
    app.listen(port, () => {
        console.log("server start")

    })
)
.catch((error) => {
    console.log(error)
})