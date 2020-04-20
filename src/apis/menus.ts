import { FunctionParams, ToastError } from '../types/toast.types';
import { Restaurant, MenuMetadata } from '../types/menus.types';
const fetch = require('node-fetch');

export async function getMenu(params: FunctionParams) : Promise<Restaurant> {
    const options = {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${params.accessToken}`,
            'Toast-Restaurant-External-ID': `${params.restaurantGuid}`
        },
    }

    try {
        const response = await fetch(`https://${params.toastHostname}/menus/v2/menus`, options);
        return response.json();
    } catch (e) {
        throw new ToastError({
            message: e.message,
            endpoint: 'get menu',
            path: '/menus/v2/menus'
        });
    }
}

export async function getMenuMetadata(params: FunctionParams) : Promise<MenuMetadata> {
    const options = {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${params.accessToken}`,
            'Toast-Restaurant-External-ID': `${params.restaurantGuid}`
        },
    }
    try {
        const response = await fetch(`https://${params.toastHostname}/menus/v2/metadata`, options);
        return response.json();
    } catch(e) {
        throw new ToastError({
            message: e.message,
            endpoint: 'get menu metadata',
            path: '/menus/v2/metadata'
        });
    }
}