import express, { Express } from 'express';
import dotenv from 'dotenv';
import productRoutes from './routes/productRoutes';
import cors from 'cors';

dotenv.config();

const app: Express = express();

app.use(cors());
app.use(express.json());


app.use('/', productRoutes);

const PORT: number = parseInt(process.env.PORT || '3000', 10);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
