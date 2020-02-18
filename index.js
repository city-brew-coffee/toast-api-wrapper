const rp = require('request-promise-native');


exports.getEmployees = async (accessToken) => {
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

    exports.getTimeEntries = async (start, end, accessToken) => {
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

    exports.getJobs = async function (accessToken) {
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



exports.requestNewToken = async () => {
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

        return response;
    } catch (e) {
        console.error(e);
        throw new Error(e.message);
    }
}