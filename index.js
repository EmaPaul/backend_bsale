const express = require('express')
const app = express();
const cors = require('cors')

app.set('port',process.env.PORT || 3000);

app.use(express.json());

app.use(require('./src/routes/product'))

app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.listen(app.get('port'), ()=>{ 
    console.log("Server on port", app.get('port'))
})
