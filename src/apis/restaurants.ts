import { FunctionParams } from '../types/toast.types';
import { RestaurantGuid, RestaurantInfo } from '../types/restaurants.types';
const rp = require('request-promise-native');

export async function getRestaurantsInGroup(params: FunctionParams) : Promise<RestaurantGuid[]> {
    const options = {
        uri: `https://${params.toastHostname}/restaurants/v1/groups/${params.managmentGroupGuid}/restaurants`,
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

export async function getRestaurantInformation(params: FunctionParams) : Promise<RestaurantInfo> {
    const options = {
        uri: `https://${params.toastHostname}/restaurants/v1/restaurants/${params.restaurantGuid}`,
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