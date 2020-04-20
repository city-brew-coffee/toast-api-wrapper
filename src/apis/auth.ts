const fetch = require('node-fetch');

import { AuthReturnDataforRestaurantManagementGroupClient } from '../types/auth.types';
import { ToastError } from '..';

export async function requestNewToken(toastHostname: string, toastClient: string, toastSecret: string): Promise<AuthReturnDataforRestaurantManagementGroupClient> {
    const options = {
        method: 'POST',
        body: `grant_type=client_credentials&client_id=${toastClient}&client_secret=${toastSecret}`,
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