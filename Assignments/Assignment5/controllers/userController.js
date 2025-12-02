const User = require("../models/userSchema");
const Signup = async(req,res)=>{
    try{
        const{name,age,city,landmark,pincode} = req.body;
        const user = await User.findOne({name});
        if(user){
            return res.send({msg: "Name already existed"});
        }
        const newUser = await User.create({
            name,
            age,
            city,
            landmark,
            pincode,
        })
        res.send({msg: "User added successfully", newUser});
    }catch(error){
        console.error(error);
        res.send({msg : "Internal Server error", error});
    }
    }
const getUsers = async(req,res)=>{
    try {
        const myUsers = await User.find();
        res.send({msg: "Users", myUsers});
    }catch(error) {
        res.send({msg: "Error Fetching users", error});
    }
};
const editUser = async(req,res)=>{
    try {
        const  id = req.params.id;
        const { name,age } =req.body;
        const user = await User.findByIdAndUpdate(id,{name,age});
        res.send({ msg: "User Updated Successfully", user});
    } catch (error) {
        res.send({msg: "internal Server error",error});
        
    }
}
const deleteUser = async(req,res)=>{
    try {
        const  id = req.params.id;
        const { name,age } =req.body;
        const user = await User.findByIdAndDelete(id,{name,age});
        res.send({ msg: "User Updated Successfully", user});
    } catch (error) {
        res.send({msg: "internal Server error",error});
        
    }
}
 const myControllers = {Signup, getUsers,editUser, deleteUser};
 module.exports = myControllers;
