import express from 'express';
import projectsRoutes from './routes/products.routes.js';
import cors from 'cors';

const app = express();

// MIDDLEWARES
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(projectsRoutes)

export default app;