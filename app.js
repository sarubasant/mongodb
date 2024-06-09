const express = require('express');
const app = express();

const userModel = require('./userModel');
const usermodel = require('./usermodel');

app.get('/', (req,res)=>{
    res.send("hey");
})

app.get('/create', async(req,res)=>{
  let createdUser = await usermodel.create({
    name: "Azonic",
    email: "azonic@gamil.com",
    username: "azonic"
   })
   res.send(createdUser);
})

app.get('/read', async(req,res)=>{
    let users = await usermodel.find(); //find() gives array of users & findOne() gives first matched user object.
    res.send(users);
})

app.get('/update', async(req,res)=>{
 let updatedUser = await userModel.findOneAndUpdate({username: "azonic"},{name:"techazonic"},{new:true});
 res.send(updatedUser);
})

app.get('/delete', async(req,res)=>{
    let deletedUsers = await usermodel.findOneAndDelete({username: "harsh"}); 
    res.send(deletedUsers);
})

app.listen(3000);