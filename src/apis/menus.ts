import { FunctionParams } from '../types/toast.types';
import { Restaurant, MenuMetadata } from '../types/menus.types';
const rp = require('request-promise-native');

export async function getMenu(params: FunctionParams) : Promise<Restaurant> {
    const options = {
        uri: `https://${params.toastHostname}/menus/v2/menus`,
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

export async function getMenuMetadata(params: FunctionParams) : Promise<MenuMetadata> {
    const options = {
        uri: `https://${params.toastHostname}/menus/v2/metadata`,
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