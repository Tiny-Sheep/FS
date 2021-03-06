'use strict';

const express = require('express');
const router = express.Router();
const todos = require("../models/todos")
const {listPeople,add,list,complete,remove,reset,tasks}=todos;



//router.use("/",bodyParser.json);

router.get("/users", (req,res,next)=> {
  
    res.json(listPeople())
});

router.get("/users/:name/tasks", (req,res,next)=>{
    if (listPeople().includes(req.params.name)){  
    res.json(list(req.params.name));
    }else{res.status(404).json()}
});

router.put("/users/:name/tasks/:index",(req,res,next)=>{

    complete(req.params.name,req.params.index)
    res.json(200);

});


router.delete("/users/:name/tasks/:index",(req,res,next)=>{

    remove(req.params.name,req.params.index)
    res.status(204).json();

});

router.post("/users/:name/tasks", (req,res,next)=>{
if (req.body.content.length >0){
    add(req.params.name,req.body)
    res.status(201).json(req.body)
}else{res.status(400).json()}
});







module.exports = router;

// write your routes here. Feel free to split into multiple files if you like.
