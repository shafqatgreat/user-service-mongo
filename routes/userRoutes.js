const express = require('express');
const router = express.Router();
const User = require('../src/models/User');

let users = [];

//Get All Users
router.get('/',async(req, res)=>{
    const users = await User.find();
    res.json(users)
} );

// Get User by ID

router.get('/:id',async(req,res) => {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({message: 'User not found'});
    res.json(user);
});

//Create User

router.post('/',async(req,res)=>{
    const newUser =await User.create(req.body);
    res.status(201).json({message: 'User added', user: newUser });
});

// Update User
router.put('/:id',async (req, res) => {
  const user = await User.findOneAndUpdate(
            {id: req.params.id},  // search by your custom id
            req.body,               // fields to update
            { new: true, runValidators: true }
        );
  if(!user) return res.status(404).json({message: 'User not found'});
  res.json(user);
});

// DELETE User
router.delete('/:id',async(req, res) => {
    // const user=await User.findByIdAndDelete(req.params.id);
    const user=await User.findOneAndDelete({id: req.params.id});
    if(!user) return res.status(404).json({message: 'User not found'});
    res.json({messahe: 'User deleted'});
    
});

module.exports = router;











