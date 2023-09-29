import express from 'express'
import { env } from './config/index.js';
import mongoose from 'mongoose';

//ROUTES
import playerRoutes from './routes/player.router.js'
import basketRoutes from './routes/basket.router.js'

const app = express();

const PORT = process.env.PORT || 8080;


// DATABASE
mongoose
    .connect(env.mongoURL)
    .then(() => console.log('Connexion à MongoDB réussie! '))
    .catch((error) => console.log(error))


// MIDLLEWARE
app.use(express.json());

// ROUTER
app.use('/api/player', playerRoutes);
app.use('/api/basket', basketRoutes);


// SERVER
app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`);
})