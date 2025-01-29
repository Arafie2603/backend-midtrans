import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import paymentRoutes from './routes/paymentRoutes';

const app = express();

app.use(express.json());
app.use('/api/payments', paymentRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
