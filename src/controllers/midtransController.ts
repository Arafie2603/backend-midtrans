import { Request, Response } from 'express';
import { MidtransService } from '../services/midtransService';

export class PaymentController {
    private midtransService: MidtransService;

    constructor() {
        this.midtransService = new MidtransService();
    }

    createPayment = async (req: Request, res: Response) => {
        try {
            const {
                order_id,
                gross_amount,
                first_name,
                last_name,
                email,
                phone
            } = req.body;

            const parameter = {
                transaction_details: {
                    order_id,
                    gross_amount
                },
                credit_card: {
                    secure: true
                },
                customer_details: {
                    first_name,
                    last_name,
                    email,
                    phone
                }
            };

            const transaction = await this.midtransService.createTransaction(parameter);

            res.status(200).json({
                status: 'success',
                data: transaction
            });
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';

            res.status(500).json({
                status: 'error',
                message: errorMessage
            });
        }
    }
}
