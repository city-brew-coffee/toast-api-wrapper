const fetch = require('node-fetch');

import { AuthReturnDataforRestaurantManagementGroupClient } from '../types/auth.types';
import { ToastError } from '..';
import { URLSearchParams } from 'url';


export async function requestNewToken(toastHostname: string, toastClient: string, toastSecret: string): Promise<AuthReturnDataforRestaurantManagementGroupClient> {
    
    const params = new URLSearchParams();
    params.append('grant_type', 'client_credentials');
    params.append('client_id', toastClient);
    params.append('client_secret', toastSecret);
    
    const options = {
        method: 'POST',
        body: params,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
    };

    try {
        const response = await fetch(`https://${toastHostname}/usermgmt/v1/oauth/token`, options);

        return response.json();
    } catch (e) {
        throw new ToastError({
            message: e.message,
            endpoint: 'request credentials',
            path: '/usermgmt/v1/oauth/token'
        });
    }

};