const rp = require('request-promise-native');
import { FunctionParams } from '../types/toast.types';
import { Order } from '../types/orders.types';

export async function getOrders(params: FunctionParams, businessDate: string) : Promise<string[]> {
    const options = {
        uri: `https://${params.toastHostname}/orders/v2/orders?businessDate=${businessDate}`,
        method: 'GET',
        headers: {
            Authorization: `Bearer ${params.accessToken}`,
            'Toast-Restaurant-External-ID': `${params.restaurantGuid}`
        },
        json: true
    }

    const response = await rp(options);

    return response;
}

export async function getOrderDetails(params: FunctionParams, orderGuid: string) : Promise<Order> {
    const options = {
        uri: `https://${params.toastHostname}/orders/v2/orders/${orderGuid}`,
        method: 'GET',
        headers: {
            Authorization: `Bearer ${params.accessToken}`,
            'Toast-Restaurant-External-ID': `${params.restaurantGuid}`
        },
        json: true
    }

    const response = await rp(options);

    return response;
}

