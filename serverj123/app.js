// *** Importing 
const app = require('express')();
 require('dotenv').config();
const { authRoute } = require('./src/routes');

// *** App Config
const PORT =  process.env.PORT || 2000 ;
 
// *** Middlewares

// *** DB Config

// *** API Routes  

app.use('/api/auth/',authRoute);


// *** Listen
app.listen(PORT,()=> console.log(`Server is running on Port ${PORT}`));
 