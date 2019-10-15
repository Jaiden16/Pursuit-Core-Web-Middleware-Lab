const express = require('express')
const app = express()
const port = 3000
const axios = require("axios")
const bodyParser = require("body-parser")
const cors = require("cors")

app.use(cors())

app.use(bodyParser.urlencoded({
    extended: false
}))

const handleCors = (req,res,next)=>{
    res.set("Access-Control-Allow-Origin","*")
    next()
}

app.use(handleCors)

const getAnimal = (req,res,next) =>{
    let searched = {}
    let animal = req.params.search

    if(!searched[animal]){
        searched[animal] = animal;
    }
    
    let animals = {
        lion: "lion",
        tiger: "tiger",
        bear: "bear"        
    }

    if(searched[animal] === animals[animal]){
        next()
    }else{
        console.log("no match")
        res.json({
            status: "success",
            message: true
        })
        return;
    }
}

const confirmAnimal = (req,res,next) =>{
    console.log("we have a match")
        res.json({
            status: "failure",
            message: false
        })

}
   
app.get("/animals/:search",getAnimal,confirmAnimal)


app.listen(port, ()=>{
    console.log("running at http://localhost:3000");
})