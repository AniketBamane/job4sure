require("dotenv").config()
const express = require("express")
const cookieParser = require("cookie-parser")
const cors = require("cors")
const connectDb = require("./utils/database")
// routers
const jobRouter = require("./router/job")
const contactRouter = require("./router/contact")
const preferenceRouter = require("./router/preference")
const applicantRouter = require("./router/applicant")
const newsRouter = require("./router/news")
const competitionRouter = require("./router/competition")
const interviewsRouter = require("./router/interview")

const app = express()

//middlewares 
app.use(cookieParser())
app.use(express.json())
app.use(cors())




//routes
app.use("/api/jobs",jobRouter)
app.use("/api/contact",contactRouter)
app.use("/api/preference",preferenceRouter)
app.use("/api/applicant",applicantRouter)
app.use("/api/news",newsRouter)
app.use("/api/competition",competitionRouter)
app.use("/api/interview",interviewsRouter)

connectDb().then(res=>{
  if(res){
    app.listen(8080,(req,res)=>{
      console.log("Server running on port 8080")
    })
  }
})