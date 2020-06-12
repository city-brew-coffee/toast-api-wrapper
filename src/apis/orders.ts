
import { FunctionParams, ToastError } from '../types/toast.types';
import { Order } from '../types/orders.types';
const fetch = require('node-fetch');


export async function getOrders(params: FunctionParams, start: string, end: string): Promise<string[]> {
    const options = {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${params.accessToken}`,
            'Toast-Restaurant-External-ID': `${params.restaurantGuid}`
        },
    }

    try {
        const response = await fetch(`https://${params.toastHostname}/orders/v2/orders?startDate=${start}&endDate=${end}`, options);
        return response.json();
    } catch (e) {
        throw new ToastError({
            message: e.message,
            endpoint: 'get orders',
            path: '/orders/v2/orders'
        });
    }

}

export async function getOrderDetails(params: FunctionParams, orderGuid: string): Promise<Order> {
    const options = {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${params.accessToken}`,
            'Toast-Restaurant-External-ID': `${params.restaurantGuid}`
        },
    }

    try {
        const response = await fetch(`https://${params.toastHostname}/orders/v2/orders/${orderGuid}`, options);

        return response.json();
    } catch (e) {
        throw new ToastError({
            message: e.message,
            endpoint: 'get order details',
            path: '/orders/v2/orders/{orderGuid}'
        });
    }
}

export async function addOrder(params: FunctionParams, order: Order): Promise<Order> {
    const options = {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${params.accessToken}`,
            'Toast-Restaurant-External-ID': `${params.restaurantGuid}`
        },
        body: JSON.stringify(order),
    }


    try {
        const response = await fetch(`https://${params.toastHostname}/orders/v2/orders`, options);
        return response.json();
    } catch (e) {
        throw new ToastError({
            message: e.message,
            endpoint: 'add orders',
            path: '/orders/v2/orders'
        });
    }
}