const express = require('express');
const router = express.Router();
const mysqlConnection = require('../db');


router.get('/product', async (req, res)=>{
    const {name} = req.query;
    if(name!==undefined){

        mysqlConnection.query('SELECT * FROM product WHERE name LIKE ?', [`%${name}%`], (err, rows)=>{
            if(!err){
                res.json(rows)
            }else{
                console.log(err)
            }
        })
    }else{
        mysqlConnection.query('SELECT * FROM product',(err,rows)=>{

            if(!err){
                 res.json(rows)
            }else{
                console.log(err)
            }
        })
    }
    
});

router.get('/product/:id',(req, res,next)=>{
    const {id}=req.params;
    mysqlConnection.query('SELECT * FROM product WHERE id = ?',[id],(err,rows)=>{
        if(!err){
            res.json(rows[0])
        }else{
            console.log(err)
        }
    })
  
    
})

router.get('/category',(req,res)=>{
    mysqlConnection.query('SELECT * FROM category',(err,rows)=>{
        if(!err){
            res.json(rows)
        }else{
            console.log(err)
        }
    })
})






module.exports = router;