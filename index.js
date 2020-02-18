const rp = require('request-promise-native');

module.exports = {
    getEmployees: async function(db) {
        const accessToken = await getAuthToken(db);
        const options = {
            uri: `https://${process.env.toast_hostname}/labor/v1/employees`,
            method: 'GET',
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Toast-Restaurant-External-ID': `${process.env.restaurant_external_id}`
            },
            json: true
        }
    
        const response = await rp(options);
    
        return response;
    },
    
    getTimeEntries:  async function (start, end, db) {
        const accessToken = await getAuthToken(db);
        const options = {
            uri: `https://${process.env.toast_hostname}/labor/v1/timeEntries?startDate=${start}&endDate=${end}`,
            method: 'GET',
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Toast-Restaurant-External-ID': `${process.env.restaurant_external_id}`
            },
            json: true
        }
    
        const response = await rp(options);
    
        return response;
    },
    
    getJobs: async function(db) {
        const accessToken = await getAuthToken(db);
        const options = {
            uri: `https://${process.env.toast_hostname}/labor/v1/jobs`,
            method: 'GET',
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Toast-Restaurant-External-ID': `${process.env.restaurant_external_id}`
            },
            json: true
        }
    
        const response = await rp(options);
    
        return response;
    }
}



async function getAuthToken(db) {
    const snap = await db.doc('meta/toast').get();
    const data = snap.data();

    if (data) {
        if (Date.now() > (data.expires_at * 1000)) {
            // current auth code expired
            const response = await requestNewToken(db);
            return response.access_token;
        } else {
            return data.access_token;
        }
    } else {
        const response = await requestNewToken(db);
        return response.access_token;
    }
}

async function requestNewToken(db) {
    const options = {
        uri: `https://${process.env.toast_hostname}/usermgmt/v1/oauth/token`,
        method: 'POST',
        body: `grant_type=client_credentials&client_id=${process.env.toast_client}&client_secret=${process.env.toast_secret}`,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        json: true,
    };

    try {
        const response = await rp(options);

        const writeData = {
            'access_token': response.access_token,
            'rsGuid': response.rsGuid,
            'expires_in': response.expires_in - process.env.expires_in_offset,
            'expires_at': Math.floor((Date.now() + ((response.expires_in - process.env.expires_in_offset) * 1000) / 1000))
        };

        console.log(writeData);

        await db.doc('meta/toast').set(writeData);
        return response;
    } catch (e) {
        console.error(e);
        throw new Error(e.message);
    }
}

