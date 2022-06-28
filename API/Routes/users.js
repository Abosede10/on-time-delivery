const express = require('express')
const bycrypt =  require('bcrypt')
const { v4: uuidv4 } = require('uuid');
const { has } = require('lodash');
const route = express.Router()

let users = []

route.get('/', (req, res)=>{
    if(users.length > 0){
        res.status(200).json({
            users
        })
    }else{
        res.status(400).json({
            message : 'Sorry No users found'
    })
    }

})



route.post('/signup', (req, res)=>{

            bycrypt.hash(req.body.password, 10, (err, hash)=>{
                if(err){
                    res.status(500).json({
                        error : err
                    })
                }
                else{
                    const user = {
                        _id :  uuidv4(),
                        email : req.body.email,
                        password : hash      
                    }
                    users.push(user)
                    res.json({
                        message : 'created successfully',
                        user : user
                    })
                }
                
        
            })

    
})


module.exports = route