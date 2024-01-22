const express = require('express');
const app = express();
const path = require('path');
//settings
app.set('port', 30000)

//Middlewares
app.use(express.static(path.join(__dirname, "/pagina")))
// Routes
app.get('/', ), ()=>{
    console.log('hello-world')
}

app.listen(app.get('port'), ()=>{
    console.log(`servidor web corriendo en el puerto ${app.get('port')}`)
})