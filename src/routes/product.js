/*requeriendo el entorno de trabajo y a la coneccion de la base de datos */
const express = require('express');
const router = express.Router();
const mysqlConnection = require('../db');

/*ruta: productos*/
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

/*ruta: productos por id */
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

/*ruta: categorias*/
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