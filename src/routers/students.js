const express = require("express");
const router = new express.Router();
const Student = require("../models/students");

router.post("/students",async(req,res)=>{
    try{
        console.log(req.body);
        const user = new Student(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser);
    }
    catch(err){
        res.status(400).send(err);
    }
})

router.get("/students",async(req,res)=>{
    try{
        const studentData = await Student.find();
        console.log(studentData);
        res.status(200).send(studentData);
    }
    catch(err){
        res.status(500).send(err);
    }
})

router.get("/students/:id",async(req,res)=>{
    try{
        const _id = req.params.id;

        const studentData = await Student.find({_id});
        console.log(studentData);
        if(studentData.length > 0){
            res.status(200).send(studentData);
        }
        else{
            res.status(404).send();
        }
    }
    catch(err){
        res.status(500).send(err);
    }
})

router.patch("/students/:id",async(req,res)=>{
    try{
        const _id = req.params.id;
        const updateStudent = await Student.findByIdAndUpdate(_id,req.body,{new:true});
        res.send(updateStudent);
    }
    catch(err){
        res.status(400).send();
    }
})

router.delete("/students/:id",async(req,res)=>{
    try{
        const _id = req.params.id;
        const deleteStudent = await Student.findByIdAndDelete(_id);
        if(!(_id)){
            return res.status(400).send();
        }    
        res.send(deleteStudent);
        console.log(deleteStudent);
    }
    catch(err){
        res.status(500).send();
    }
})

module.exports = router;