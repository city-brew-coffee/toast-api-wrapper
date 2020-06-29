export interface ToastReference {
    guid?: string;
    entityType?: string;
}

export interface ExternalReference extends ToastReference {
    externalId?: string;
}

export type FunctionParams = {
    accessToken: string;
    restaurantGuid: string;
    toastHostname: string;
    managmentGroupGuid?: string;
}

export class ToastError extends Error{
    endpoint: string;
    timestamp: Date;
    path: string;

    constructor(params: {endpoint: string, message: string, path: string}){
        super(params.message);
        this.endpoint = params.endpoint;
        this.timestamp = new Date();
        this.path = params.path;
    }
}