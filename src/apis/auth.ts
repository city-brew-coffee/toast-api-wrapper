const rp = require('request-promise-native');

import { AuthReturnDataforRestaurantManagementGroupClient } from '../types/auth.types';

export async function requestNewToken(toastHostname: string, toastClient: string, toastSecret: string) : Promise<AuthReturnDataforRestaurantManagementGroupClient> {
    const options = {
        uri: `https://${toastHostname}/usermgmt/v1/oauth/token`,
        method: 'POST',
        body: `grant_type=client_credentials&client_id=${toastClient}&client_secret=${toastSecret}`,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        json: true,
    }  ;

    const response = await rp(options);

    return response;
};