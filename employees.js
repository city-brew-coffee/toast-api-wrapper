const getEmployees = async ({accessToken, restaurantGuid, toastHostname}) => {
    const options = {
        uri: `https://${toastHostname}/labor/v1/employees`,
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

const addEmployee = async ({accessToken, restaurantGuid, employee}) => {
    const options = {
        uri: `https://${toastHostname}/labor/v1/employees`,
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

const deleteEmployee = async ({accessToken, restaurantGuid, employeeId, toastHostname}) => {
    const options = {
        uri: `https://${toastHostname}/labor/v1/employees/${employeeId}`,
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

const updateEmployee = async ({accessToken, restaurantGuid, employee}) => {
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



const getTimeEntries = async ({start, end, accessToken, restaurantGuid, toastHostname}) => {
    const options = {
        uri: `https://${toastHostname}/labor/v1/timeEntries?startDate=${start}&endDate=${end}`,
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

const getJobs = async function ({accessToken, restaurantGuid, toastHostname}) {
    const options = {
        uri: `https://${toastHostname}/labor/v1/jobs`,
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

exports.getEmployees = getEmployees;
exports.addEmployee = addEmployee;
exports.deleteEmployee = deleteEmployee;
exports.updateEmployee = updateEmployee;
exports.getTimeEntries = getTimeEntries;
exports.getJobs = getJobs;
