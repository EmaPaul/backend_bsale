// requiriendo el entorno de trabajo
const express = require('express')
const app = express();

/*requiriendo cors*/
const cors = require('cors')

/*Configurando el puerto*/
app.set('port',process.env.PORT || 3000);

/*Middleware*/
app.use(express.json());

/*Rutas*/
app.use(require('./src/routes/product'))

/*Configurando el cors*/
app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

/*Levantando el servidor*/
app.listen(app.get('port'), ()=>{ 
    console.log("Server on port", app.get('port'))
})
