import express from 'express';
import animerouter from './routes/animeRoutes.js';
import cors from 'cors';

const app = express();

app.use('/images', express.static('src/public/images'));
app.use(cors({
    origin: 'http://127.0.0.1:5500'
}));

app.use(animerouter);

export default app;