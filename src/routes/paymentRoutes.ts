import { Router } from 'express';
import { PaymentController } from '../controllers/midtransController';

const router = Router();
const paymentController = new PaymentController();

router.post('/create-payment', paymentController.createPayment);

export default router;