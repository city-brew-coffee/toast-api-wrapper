import { FunctionParams, ToastError } from '../types/toast.types';
import { Discount, RevenueCenter, DiningOption, BreakType } from '../types/config.types';
const fetch = require('node-fetch');


export async function getDiscounts(params: FunctionParams, pageSize?: number) : Promise<Discount[]> {
    const options = {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${params.accessToken}`,
            'Toast-Restaurant-External-ID': `${params.restaurantGuid}`
        },
    }
    
    try {
        const response = await fetch(`https://${params.toastHostname}/config/v2/discounts?pageSize=${pageSize}`, options);
        return response.json();
    } catch (e) {
        throw new ToastError({
            message: e.message,
            endpoint: 'get discounts',
            path: '/config/v2/discounts'
        });
    }
}

export async function getRevenueCenters(params: FunctionParams, pageSize?: number) : Promise<RevenueCenter[]> {
    const options = {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${params.accessToken}`,
            'Toast-Restaurant-External-ID': `${params.restaurantGuid}`
        },
    }
    
    try {
        const response = await fetch(`https://${params.toastHostname}/config/v2/revenueCenters?pageSize=${pageSize}`, options);
        return response.json();
    } catch (e) {
        throw new ToastError({
            message: e.message,
            endpoint: 'get revenue centers',
            path: '/config/v2/revenueCenters'
        });
    }
}

export async function getDiningOptions(params: FunctionParams, pageSize?: number) : Promise<DiningOption[]> {
    const options = {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${params.accessToken}`,
            'Toast-Restaurant-External-ID': `${params.restaurantGuid}`
        },
    }
    
    try {
        const response = await fetch(`https://${params.toastHostname}/config/v2/diningOptions?pageSize=${pageSize}`, options);
        return response.json();
    } catch (e) {
        throw new ToastError({
            message: e.message,
            endpoint: 'get dining options',
            path: '/config/v2/diningOptions'
        });
    }
}

export async function getBreakTypes(params: FunctionParams, pageSize?: number) : Promise<BreakType[]> {
    const options = {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${params.accessToken}`,
            'Toast-Restaurant-External-ID': `${params.restaurantGuid}`
        },
    }
    
    try {
        const response = await fetch(`https://${params.toastHostname}/config/v2/breakTypes?pageSize=${pageSize}`, options);
        return response.json();
    } catch (e) {
        throw new ToastError({
            message: e.message,
            endpoint: 'get break tyes',
            path: '/config/v2/breakTypes'
        });
    }
}