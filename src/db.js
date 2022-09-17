/*requiriendo el dotenv para las variables de entorno*/
require('dotenv').config();

/*requiriendo el sistema de gestion de base de datos y las variables de entorno*/
const mysql = require('mysql');
const {DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE}=process.env;

/*haciendo la coneccion*/
const mysqlConnection = mysql.createPool({
    host:DB_HOST,
    user: DB_USER,
    password:DB_PASSWORD,
    database:DB_DATABASE
})

/*haciendo una consulta a la base de datos*/
mysqlConnection.query('SELECT * FROM product',function (err,rows){
    if(err){
        console.log(err);
        return;
    }else{
        console.log("Database is connected")
    }
})

module.exports = mysqlConnection;