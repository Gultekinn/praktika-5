const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const app = express()
PORT = 5055
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://gultekin:gultekinn@cluster0.ez8varc.mongodb.net/").then((res) => {
    console.log("connected..")
})

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    }
})



const userModel = mongoose.model("users", UserSchema)
//get
app.get("/", async (req, res) => {
    const data = await userModel.find()
    res.send(data)
})
//get by id
app.get("/:id",async (req, res) => {
    const { id } = req.params
    const target =await userModel.findById(id)
    res.send(target)
})

//post
app.post("/", async (req, res) => {
    const newModel = await new userModel({
        ...req.body
    })
    newModel.save()
    res.send(newModel)
})

//delete
app.delete("/:id", async (req, res) => {
    const { id } = req.params
    const newModel = await userModel.findByIdAndDelete(id)
    res.send("delete")
})


app.listen(PORT, () => {
    console.log("app.listen...")
})

