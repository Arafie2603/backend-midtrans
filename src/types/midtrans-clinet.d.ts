declare module 'midtrans-client' {
    export interface Config {
        isProduction: boolean;
        serverKey: string;
        clientKey: string;
        merchantId?: string;
    }

    export interface TransactionResponse {
        token: string;
        redirect_url: string;
    }

    export interface TransactionDetails {
        order_id: string;
        gross_amount: number;
    }

    export interface CustomerDetails {
        first_name: string;
        last_name: string;
        email: string;
        phone: string;
    }

    export interface MidtransRequest {
        transaction_details: TransactionDetails;
        customer_details?: CustomerDetails;
        credit_card?: {
            secure: boolean;
        };
    }

    export class Snap {
        constructor(config: Config);
        createTransaction(parameter: MidtransRequest): Promise<TransactionResponse>;
    }

    export class CoreApi {
        constructor(config: Config);
        charge(parameter: any): Promise<any>;
    }
}
