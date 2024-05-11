
import {User }from "../../models/users/user.js"
import bcrypt from "bcrypt"

const users = new User();
export const getUsers = async (req,res) =>{
    try {
        const users = await User.find();
        res.status(200).send(users);
    } catch (error) {
        res.status(500).json({message: "Något gick fel"})
    }
}



export const getUser = async (req,res) =>{
    const user = await User.findById(req.params.id);

    if(user){
        res.status(200).send(user);
    }
    res.status(400).json({success: false, message: "User Not found"})
}


export const createUser = async  (req,res) =>{

    const {firstName,lastName,email, password,phoneNumber,birthDay} = req.body
    try {
        const newUser = new User({
            firstName,
            lastName,
            email,
            password,
            phoneNumber,
            birthDay,
        
            })
          const user =  await newUser.save();
        res.status(201).json({user:user,message: "One user has been created"})
    } catch (error) {
        res.send(error)
    }


}

export const updateUser =  async (req,res) =>{
   
    try {
        const user = await User.findByIdAndUpdate(req.params.id,req.body)
        if(!user) throw Error("Not found")
        res.status(200).json({success: true })
    } catch (error) {
        res.status(400).json({success: false})
    }
}


export const deleteUser = async (req,res) =>{

 try {
    const user = await User.findByIdAndDelete(req.params.id)
    if(!user) throw Error("No user found")
    res.json({success: true})

    
 } catch (error) {
        res.json({msg: error})
 }
  
}