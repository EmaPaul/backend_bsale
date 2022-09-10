require('dotenv').config();
const mysql = require('mysql');
const {DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE}=process.env;

const mysqlConnection = mysql.createPool({
    host:DB_HOST,
    user: DB_USER,
    password:DB_PASSWORD,
    database:DB_DATABASE
})

mysqlConnection.query('SELECT * FROM product',function (err,rows){
    if(err){
        console.log(err);
        return;
    }else{
        console.log("Database is connected")
    }
})

module.exports = mysqlConnection;