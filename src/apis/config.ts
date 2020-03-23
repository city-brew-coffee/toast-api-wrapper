import { FunctionParams } from '../types/toast.types';
import { Discount } from '../types/config.types';
const rp = require('request-promise-native');

export async function getDiscounts(params: FunctionParams, pageSize?: number) : Promise<Discount[]> {
    const options = {
        uri: `https://${params.toastHostname}/config/v2/discounts?pageSize=${pageSize}`,
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