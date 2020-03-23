const getResturantsInGroup = async function ({accessToken, managementGroupGuid, restaurantGuid, toastHostname}) {
    const options = {
        uri: `https://${toastHostname}/restaurants/v1/groups/${managementGroupGuid}/restaurants`,
        method: 'GET',
        headers: {
            Authorization: `Bearer ${accessToken}`,
            'Toast-Restaurant-External-ID': `${restaurantGuid}`,
        },
        json: true
    };

    return await rp(options);
}

const getResturantDetails = async function ({accessToken, restaurantGuid, toastHostname}) {
    const options = {
        uri: `https://${toastHostname}/restaurants/${restaurantGuid}`,
        method: 'GET',
        headers: {
            Authorization: `Bearer ${accessToken}`,
            'Toast-Restaurant-External-ID': `${restaurantGuid}`,
        },
        json: true
    };

    return await rp(options);
}

exports.getResturantDetails = getResturantDetails;
exports.getResturantsInGroup = getResturantsInGroup;