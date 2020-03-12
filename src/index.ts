export { AuthReturnDataforRestaurantManagementGroupClient } from './types/auth.types';
export { 
    Order,
    AppliedDiscount,
    AppliedDiscountTrigger,
    AppliedLoyaltyInfo,
    AppliedServiceCharge,
    AppliedTaxRate,
    Check,
    Customer,
    DeliveryInfo,
    Device,
    LoyaltyDetails,
    Payment,
    Refund,
    Selection,
    VoidInformation,
} from './types/orders.types';

export { ToastReference, ExternalReference, FunctionParams } from './types/toast.types';

export { requestNewToken } from './apis/auth'
export { getOrders, getOrderDetails } from "./apis/orders"
