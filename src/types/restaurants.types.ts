
export class RestaurantGuid {
    guid?: string;
}

export class RestaurantInfo {
    guid?: string;
    general?: GeneralRestaurantInfo;
    urls?: RestaurantUrls;
    location?: RestaurantLocation;
    schedules?: RestaurantSchedules;
    delivery?: RestaurantDelivery;
    onlineOrdering?: RestaurantOnlineOrdering;
    prepTimes?: RestaurantPrepTimes;
}

export class GeneralRestaurantInfo {
    name?: string;
    locationName?: string;
    locationCode?: string;
    description?: string;
    timeZone?: string;
    closeoutHour?: number;
    managementGroupGuid?: string;
}

export class RestaurantUrls {
    website?: string;
    facebook?: string;
    twitter?: string;
    orderOnline?: string;
    purchaseGiftCard?: string;
    checkGiftCard?: string;
}

export class RestaurantLocation {
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

export class RestaurantSchedules {
    daySchedules?: {[ref:string]: DaySchedule};
    weekSchedule?: WeekSchedule;
}

export class DaySchedule {
    scheduleName?: string;
    services?: Service[];
    openTime?: string;
    closeTime?: string;
}

export class WeekSchedule {
    monday?: string;
    tuesday?: string;
    wednesday?: string;
    thrusday?: string;
    friday?: string;
    saturday?: string;
    sunday?: string;
}

export class Service {
    name?: string;
    hours?: Hours;
    overnight?: boolean;
}

export class Hours {
    startTime?: string;
    endTime?: string;
}

export class RestaurantDelivery {
    enabled?: boolean;
    minimum?: number;
    area?: string;
}

export class RestaurantOnlineOrdering {
    enabled?: boolean;
    scheduling?: boolean;
    specialRequests?: boolean;
    specialRequestsMessage?: boolean;
    paymentOptions?: PaymentOptions;
}

export class PaymentOptions {
    delivery?: DeliveryPaymentOptions;
    takeout?: TakeoutPaymentOptions;
    ccTip?: boolean;
}

export class DeliveryPaymentOptions {
    cash?: boolean;
    ccSameDay?: boolean;
    ccFuture?: boolean;
}

export class TakeoutPaymentOptions {
    cash?: boolean;
    ccSameDay?: boolean;
    ccFuture?: boolean;
    ccInStore?: boolean;
}

export class RestaurantPrepTimes {
    deliveryPrepTime?: number;
    deliveryTimeAfterOpen?: number;
    deliveryTimeBeforeClose?: number;
    takeoutPrepTime?: number;
    takeoutTimeAfterOpen?: number;
    takeoutTimeBeforeClose?: number;
    takeoutThrottlingTime?: number;
    deliveryThrottlingTime?: number;
}