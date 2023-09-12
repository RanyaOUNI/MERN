const express = require('express')

const app = express()

//* Middleware = JSON 
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

require('./config/mongoose.config')
const jokeRoutes = require('./routes/jokes.routes')
jokeRoutes(app)

//RUN server
app.listen(8000,()=>{console.log("SERVER IS RUNNING ON PORT 8000");}
)

