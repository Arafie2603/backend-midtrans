import { Snap } from 'midtrans-client';
import { midtransConfig } from '../config/midtrans';

export class MidtransService {
    private snap: Snap;

    constructor() {
        console.log('Midtrans Config:', midtransConfig); // Tambahkan logging
        this.snap = new Snap(midtransConfig);
    }

    async createTransaction(parameter: any) {
        try {
            return await this.snap.createTransaction(parameter);
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(`Failed to create transaction: ${error.message}`);
            }
            throw new Error('Failed to create transaction');
        }
    }
}
