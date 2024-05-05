let express = require( "express" );
let bcrypt = require('bcrypt');
let User = require('../models/user').userModel;
let apiRoutes = function(app){
    "use strict";

    let main = express.Router();
    let user = express.Router();
    app.use('/',main);
    app.use('/',user);

    main.get('/api/helth',(req,res)=>{
        res.json({
            "result":"Good Health"
        })
    });
    
    user.post('/api/user/create',(req,res)=>{
        let log = (req.method === 'POST') ? req.body : req.query;
        var newUser = new User({
            name:log.name,
            userName:log.userName,
            password:log.password,
            gender:log.gender
        });
        newUser.save().then((user)=>{
            if(!user) return res.json({"success":false ,"Message":new Error('Sothing went wrong while creating user')});
            res.json({"success":true,"Message":"User created successfully"});
        }).catch((err)=> {
            if(err) return res.json({"success":false ,"Message":err});
        });
        // User.create(log,(err,user) => {
        //     if(err) return res.json({"success":false ,"Message":err.errmsg});
        //     if(!user) return res.json({"success":false ,"Message":new Error('Sothing went wrong while creating user')});
        //     console.log(user);
        //     res.json({"success":true,"Message":"User created successfully"});
        // })
    });
    user.get('/api/user/findAll',(req,res)=>{
        User.find({},(err,user) =>{
            if(err) return res.json({"success":false ,"Message":err.errmsg});
            if(!user) return res.json({"success":false ,"Message":new Error('Sothing went wrong while fetching user details')});
            console.log(user);
            res.json({"success":true,"result":user});
        });    
    });
    user.get('/api/user/count',(req,res)=>{
        let count = User.count((err,count)=> {
            
            res.json({"success":true,"count":count});
        });
    });
    user.put('/api/user/update',(req,res)=>{ 
        let log = (req.method === 'PUT') ? req.body : req.query;
        console.log(log);
        // User.update({userName:log.userName},{$set:{name :log.name}},(err,user)=>{
        //     if(err) return res.json({"success":false ,"Message":err});
        //     console.log(user);
        //     res.json({"success":true,"update":user});
        // })
        var query = User.where({userName:log.userName});
        var result = query.update({$set:{name :log.name}}).exec();
        result.then((data)=>{
            res.json({"success":true,"update":data});
        }) 
    });
    user.post('/api/user/login',(req,res)=> {
        let log = (req.method === 'POST') ? req.body : req.query;
        User.findOne({ userName:log.userName }, function(err, user) {
            if (err) {
                return res.json({"success":false,"Message":err});
            } 
            // test a matching password
            User.comparePassword(user.password,log.password,function(err, isMatch) {
                if (err) {
                    console.log(err);
                    return res.json({"success":false,"Message":err});
                } 
                console.log(log.password, isMatch); // -> Password123: true
                res.json({"success":true,"Message":"Login Successful"});
            });
        }); 
    })
    return{
        "main" : main,
        "user" : user
    };
}
module.exports = apiRoutes;