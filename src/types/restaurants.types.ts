
export interface RestaurantGuid {
    guid?: string;
}

export interface RestaurantInfo {
    guid?: string;
    general?: GeneralRestaurantInfo;
    urls?: RestaurantUrls;
    location?: RestaurantLocation;
    schedules?: RestaurantSchedules;
    delivery?: RestaurantDelivery;
    onlineOrdering?: RestaurantOnlineOrdering;
    prepTimes?: RestaurantPrepTimes;
}

export interface GeneralRestaurantInfo {
    name?: string;
    locationName?: string;
    locationCode?: string;
    description?: string;
    timeZone?: string;
    closeoutHour?: number;
    managementGroupGuid?: string;
}

export interface RestaurantUrls {
    website?: string;
    facebook?: string;
    twitter?: string;
    orderOnline?: string;
    purchaseGiftCard?: string;
    checkGiftCard?: string;
}

export interface RestaurantLocation {
    address1?: string;
    address2?: string;
    city?: string;
    stateCode?: string;
    zipCode?: string;
    country?: string;
    phone?: string;
    latitude?: number;
    longitude?: number;
}

export interface RestaurantSchedules {
    daySchedules?: {[ref:string]: DaySchedule};
    weekSchedule?: WeekSchedule;
}

export interface DaySchedule {
    scheduleName?: string;
    services?: Service[];
    openTime?: string;
    closeTime?: string;
}

export interface WeekSchedule {
    monday?: string;
    tuesday?: string;
    wednesday?: string;
    thrusday?: string;
    friday?: string;
    saturday?: string;
    sunday?: string;
}

export interface Service {
    name?: string;
    hours?: Hours;
    overnight?: boolean;
}

export interface Hours {
    startTime?: string;
    endTime?: string;
}

export interface RestaurantDelivery {
    enabled?: boolean;
    minimum?: number;
    area?: string;
}

export interface RestaurantOnlineOrdering {
    enabled?: boolean;
    scheduling?: boolean;
    specialRequests?: boolean;
    specialRequestsMessage?: boolean;
    paymentOptions?: PaymentOptions;
}

export interface PaymentOptions {
    delivery?: DeliveryPaymentOptions;
    takeout?: TakeoutPaymentOptions;
    ccTip?: boolean;
}

export interface DeliveryPaymentOptions {
    cash?: boolean;
    ccSameDay?: boolean;
    ccFuture?: boolean;
}

export interface TakeoutPaymentOptions {
    cash?: boolean;
    ccSameDay?: boolean;
    ccFuture?: boolean;
    ccInStore?: boolean;
}

export interface RestaurantPrepTimes {
    deliveryPrepTime?: number;
    deliveryTimeAfterOpen?: number;
    deliveryTimeBeforeClose?: number;
    takeoutPrepTime?: number;
    takeoutTimeAfterOpen?: number;
    takeoutTimeBeforeClose?: number;
    takeoutThrottlingTime?: number;
    deliveryThrottlingTime?: number;
}