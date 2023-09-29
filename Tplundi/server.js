import express from 'express'

// ROUTES
import articles from './router.js'
import users from './router_user.js'

const app = express();

// PORT
const PORT = process.env.PORT || 8080;

//MIDDLEWARE
app.use(express.json());


// USE ROUTER
app.use('/api/article', articles)
app.use('/api/user', users)














app.listen(PORT, () =>{
    console.log(`Listening at http://localhost:${PORT}`);
})