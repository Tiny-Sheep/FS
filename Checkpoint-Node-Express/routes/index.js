'use strict';

const express = require('express');
const router = express.Router();
const todos = require("../models/todos")
const {listPeople,add,list,complete,remove,reset}=todos;



router.get("/users/:name/tasks", (req,res,next)=>{
    // want to retrieve tasks for specific name (available in req.param.name)
    // first retrieve the array that contains name's tasks
    // and return 
    res.json(list(req.params.name));
});


router.get("/users", (req,res,next)=> {
  
    res.json(listPeople())
});






module.exports = router;

// write your routes here. Feel free to split into multiple files if you like.
