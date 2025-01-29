import { Config } from 'midtrans-client';

export const midtransConfig: Config = {
    isProduction: false,
    serverKey: process.env.MIDTRANS_SERVER_KEY || '',
    clientKey: process.env.MIDTRANS_CLIENT_KEY || ''
};
