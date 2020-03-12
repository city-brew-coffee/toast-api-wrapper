export class ToastReference {
    guid?: string;
    entityType?: string;
}

export class ExternalReference extends ToastReference {
    externalId?: string;
}

export type FunctionParams = {
    accessToken?: string;
    restaurantGuid?: string;
    toastHostname?: string;
    managmentGroupGuid?: string;
}