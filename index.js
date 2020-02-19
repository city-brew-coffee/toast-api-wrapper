const rp = require('request-promise-native');


exports.getEmployees = async ({accessToken, restaurantGuid}) => {
    const options = {
        uri: `https://${process.env.toast_hostname}/labor/v1/employees`,
        method: 'GET',
        headers: {
            Authorization: `Bearer ${accessToken}`,
            'Toast-Restaurant-External-ID': `${restaurantGuid}`
        },
        json: true
    }

    console.log(options);

    const response = await rp(options);

    return response;
};

exports.addEmployee = async ({accessToken, restaurantGuid, employee}) => {
    const options = {
        uri: `https://${process.env.toast_hostname}/labor/v1/employees`,
        method: 'POST',
        headers: {
            Authorization: `Bearer ${accessToken}`,
            'Toast-Restaurant-External-ID': `${restaurantGuid}`
        },
        json: true,
        body: employee,
    };

    const response = await rp(options);

    return response;
}

exports.deleteEmployee = async ({accessToken, restaurantGuid, employeeId}) => {
    const options = {
        uri: `https://${process.env.toast_hostname}/labor/v1/employees/${employeeId}`,
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${accessToken}`,
            'Toast-Restaurant-External-ID': `${restaurantGuid}`
        },
        json: true
    };

    const response = await rp(options);

    return response;
};

exports.updateEmployee = async ({accessToken, restaurantGuid, employee}) => {
    const options = {
        uri: `https://${process.env.toast_hostname}/labor/v1/employees/${employeeId}`,
        method: 'PATCH',
        headers: {
            Authorization: `Bearer ${accessToken}`,
            'Toast-Restaurant-External-ID': `${restaurantGuid}`
        },
        json: true,
        body: employee,
    };

    const response = await rp(options);

    return response;
};



exports.getTimeEntries = async ({start, end, accessToken, restaurantGuid}) => {
    const options = {
        uri: `https://${process.env.toast_hostname}/labor/v1/timeEntries?startDate=${start}&endDate=${end}`,
        method: 'GET',
        headers: {
            Authorization: `Bearer ${accessToken}`,
            'Toast-Restaurant-External-ID': `${restaurantGuid}`
        },
        json: true
    }

    const response = await rp(options);

    return response;
};

exports.getJobs = async function ({accessToken, restaurantGuid}) {
    const options = {
        uri: `https://${process.env.toast_hostname}/labor/v1/jobs`,
        method: 'GET',
        headers: {
            Authorization: `Bearer ${accessToken}`,
            'Toast-Restaurant-External-ID': `${restaurantGuid}`
        },
        json: true
    }

    const response = await rp(options);

    return response;
};

exports.getResturantsInGroup = async function ({accessToken, managementGroupGuid, restaurantGuid}) {
    const options = {
        uri: `https://${process.env.toast_hostname}/restaurants/v1/groups/${managementGroupGuid}/restaurants`,
        method: 'GET',
        headers: {
            Authorization: `Bearer ${accessToken}`,
            'Toast-Restaurant-External-ID': `${restaurantGuid}`,
        },
        json: true
    };

    return await rp(options);
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
};