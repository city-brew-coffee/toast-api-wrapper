export interface AuthReturnDataforRestaurantManagementGroupClient {
    '@class'?: string,
    token: {
        tokenType?: string,
        scope?: string,
        expiresIn?: number,
        accessToken?: string,
    },
    status?: string
}

export interface AuthReturnDataforPartnerApiClient {
    '@class'?: string,
    token: {
        tokenType?: string,
        scope?: string,
        expiresIn?: number,
        accessToken?: string,
    },
    status?: string,
}