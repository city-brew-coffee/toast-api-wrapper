
import { FunctionParams, ToastError } from '../types/toast.types';
import { Order, ApplicableDiscountsRequest, ApplicableDiscount, Payment, OrderResponse } from '../types/orders.types';
import { Discount } from '../types/config.types';
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

export async function addOrder(params: FunctionParams, order: Order): Promise<OrderResponse> {
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

export async function getApplicableDiscountsForOrder(params: FunctionParams, order: Order, promoCode?: string): Promise<ApplicableDiscount> {
    const options = {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${params.accessToken}`,
            'Toast-Restaurant-External-ID': `${params.restaurantGuid}`
        },
        body: JSON.stringify({
            order,
            promoCode
        } as ApplicableDiscountsRequest),
    }


    try {
        const response = await fetch(`https://${params.toastHostname}/orders/v2/applicableDiscounts`, options);
        return response.json();
    } catch (e) {
        throw new ToastError({
            message: e.message,
            endpoint: 'get applicable discounts',
            path: '/orders/v2/applicableDiscounts'
        });
    }
}

export async function addCheckLevelDiscounts(params: FunctionParams, discounts: Discount[], orderGuid: string, checkGuid: string): Promise<Order> {
    const options = {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${params.accessToken}`,
            'Toast-Restaurant-External-ID': `${params.restaurantGuid}`
        },
        body: JSON.stringify(discounts),
    }


    try {
        const response = await fetch(`https://${params.toastHostname}/orders/v2/orders/${orderGuid}/checks/${checkGuid}/appliedDiscounts`, options);
        return response.json();
    } catch (e) {
        throw new ToastError({
            message: e.message,
            endpoint: 'add check level discounts',
            path: '/orders/{orderGuid}/checks/{checkGuid}/appliedDiscounts'
        });
    }
}

export async function addItemLevelDiscounts(params: FunctionParams, discounts: Discount[], orderGuid: string, checkGuid: string, selectionGuid: string): Promise<Order> {
    const options = {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${params.accessToken}`,
            'Toast-Restaurant-External-ID': `${params.restaurantGuid}`
        },
        body: JSON.stringify(discounts),
    }


    try {
        const response = await fetch(`https://${params.toastHostname}/orders/v2/orders/${orderGuid}/checks/${checkGuid}/selections/${selectionGuid}/appliedDiscounts`, options);
        return response.json();
    } catch (e) {
        throw new ToastError({
            message: e.message,
            endpoint: 'add item level discounts',
            path: '/orders/{orderGuid}/checks/{checkGuid}/selections/{selectionGuid}/appliedDiscounts'
        });
    }
}

export async function addPaymentToCheck(params: FunctionParams, payments: Payment[], orderGuid: string, checkGuid: string): Promise<Order> {
    const options = {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${params.accessToken}`,
            'Toast-Restaurant-External-ID': `${params.restaurantGuid}`
        },
        body: JSON.stringify(payments),
    }


    try {
        const response = await fetch(`https://${params.toastHostname}/orders/v2/orders/${orderGuid}/checks/${checkGuid}/payments`, options);
        return response.json();
    } catch (e) {
        throw new ToastError({
            message: e.message,
            endpoint: 'add payment to check',
            path: '/orders/{orderGuid}/checks/{checkGuid}/payments'
        });
    }
}

export async function updateTipOnPayment(params: FunctionParams, tipAmount: number, orderGuid: string, checkGuid: string, paymentGuid: string): Promise<Order> {
    const options = {
        method: 'PATCH',
        headers: {
            Authorization: `Bearer ${params.accessToken}`,
            'Toast-Restaurant-External-ID': `${params.restaurantGuid}`
        },
        body: JSON.stringify({tipAmount}),
    }


    try {
        const response = await fetch(`https://${params.toastHostname}/orders/v2/orders/${orderGuid}/checks/${checkGuid}/payments/${paymentGuid}`, options);
        return response.json();
    } catch (e) {
        throw new ToastError({
            message: e.message,
            endpoint: 'update tip on payment',
            path: '/orders/{orderGuid}/checks/{checkGuid}/payments/{paymentGuids}'
        });
    }
}

export async function getCheckPricesForOrder(params: FunctionParams, order: Order): Promise<OrderResponse> {
    const options = {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${params.accessToken}`,
            'Toast-Restaurant-External-ID': `${params.restaurantGuid}`
        },
        body: JSON.stringify(order),
    }


    try {
        const response = await fetch(`https://${params.toastHostname}/orders/v2/prices}`, options);
        return response.json();
    } catch (e) {
        throw new ToastError({
            message: e.message,
            endpoint: 'get check prices for order',
            path: '/prices'
        });
    }
}

export async function getOrdersBulk(params: FunctionParams, startDate: string, endDate: string, pageSize: number, page: number): Promise<Order[]> {
    const options = {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${params.accessToken}`,
            'Toast-Restaurant-External-ID': `${params.restaurantGuid}`
        },
    }


    try {
        const response = await fetch(`https://${params.toastHostname}/orders/v2/ordersBulk?startDate=${startDate}&endDate=${endDate}&pageSize=${pageSize}&page=${page}}`, options);
        return response.json();
    } catch (e) {
        throw new ToastError({
            message: e.message,
            endpoint: 'get orders in bulk',
            path: '/ordersBulk'
        });
    }
}