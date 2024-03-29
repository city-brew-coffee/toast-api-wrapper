import { ExternalReference, ToastReference } from "./toast.types";

export interface Order extends ExternalReference {
  openedDate?: string;
  modifiedDate?: string;
  promisedDate?: string;
  diningOption?: ExternalReference;
  checks?: Check[];
  table?: ExternalReference;
  serviceArea?: ExternalReference;
  restaurantService?: ExternalReference;
  revenueCenter?: ExternalReference;
  source?: "In Store" | "Online" | "API" | "Kiosk" | "Caller Id";
  duration?: number;
  deliveryInfo?: DeliveryInfo;
  requiredPrepTime?: string;
  estimatedFulfillmentDate?: string;
  numberOfGuests?: number;
  voided?: boolean;
  voidDate?: string;
  voidBusinessDate?: number;
  paidDate?: string;
  closedDate?: string;
  deletedDate?: string;
  deleted?: boolean;
  businessDate?: number;
  server?: ExternalReference;
  pricingFeatures?: "TAXESV2" | "TAXESV3";
  approvalStatus?: "NEEDS_APPROVAL" | "APPROVED" | "FUTURE" | "NOT_APPROVED";
  createdDevice?: Device;
  lastModifiedDevice?: Device;
  createdDate?: string;
  curbsidePickupInfo?: CurbsidePickupInfo;
}

export interface Check extends ExternalReference {
  openedDate?: string;
  closedDate?: string;
  modifiedDate?: string;
  deletedDate?: string;
  deleted?: boolean;
  selections?: Selection[];
  customer?: Customer;
  appliedLoyaltyInfo?: AppliedLoyaltyInfo;
  taxExempt?: boolean;
  displayNumber?: string;
  appliedServiceCharges?: AppliedServiceCharge[];
  amount?: number;
  taxAmount?: number;
  totalAmount?: number;
  payments?: Payment[];
  tabName?: string;
  paymentStatus?: "OPEN" | "PAID" | "CLOSED";
  appliedDiscounts?: AppliedDiscount[];
  voided?: boolean;
  voidDate?: string;
  voidBusinessDate?: number;
  paidDate?: string;
  createdDevice?: Device;
  lastModifiedDevice?: Device;
  createdDate?: string;
}

export interface DeliveryInfo {
  address1?: string;
  address2?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  latitude?: number;
  longitude?: number;
  notes?: string;
  deliveredDate?: string;
  dispatchedDate?: string;
  deliveryEmployee?: ExternalReference;
}

export interface Device {
  id?: string;
}

export interface Customer {
  firstName?: string;
  lastName?: string;
  phone?: string;
  email?: string;
}

export interface Selection extends ExternalReference {
  item?: ExternalReference;
  itemGroup?: ExternalReference;
  optionGroup?: ExternalReference;
  preModifier?: ExternalReference;
  quantity?: number;
  seatNumber?: number;
  unitOfMeasure?: "NONE" | "LB" | "OZ" | "KG" | "G";
  selectionType?: "NONE" | "OPEN_ITEM" | "SPECIAL_REQUEST" | "PORTION";
  salesCategory?: ExternalReference;
  appliedDiscounts?: AppliedDiscount[];
  deferred?: boolean;
  preDiscountPrice?: number;
  price?: number;
  tax?: number;
  voided?: boolean;
  voidDate?: string;
  voidBusinessDate?: number;
  voidReason?: ExternalReference;
  displayName?: string;
  createdDate?: string;
  modifiedDate?: string;
  modifiers?: Selection[];
  fulfillmentStatus?: "NEW" | "HOLD" | "SENT" | "READY";
  taxInclusion?: "INCLUDED" | "NOT_INCLUDED" | "INHERITED";
  appliedTaxRate?: AppliedTaxRate[];
  diningOption?: ExternalReference;
  openPriceAmount?: number;
}

export interface AppliedLoyaltyInfo extends ToastReference {
  loyaltyIdentifier?: string;
  maskedLoyaltyIdentifier?: string;
  vendor?:
    | "TOAST"
    | "PUNCHH"
    | "PUNCHH2"
    | "PAYTRONIX"
    | "APPFRONT"
    | "INTEGRATION";
  accrualFamilyGuid?: string;
  accrualText?: string;
}

export interface AppliedServiceCharge extends ExternalReference {
  chargeAmount?: number;
  serviceCharge?: ExternalReference;
  chargeType?: "FIXED" | "PERCENT" | "OPEN";
  name?: string;
  delivery?: boolean;
  takeout?: boolean;
  gratuity?: boolean;
  taxable?: boolean;
  appliedTaxes?: AppliedTaxRate[];
  serviceChargeCalculation?: "PRE_DISCOUNT" | "POST_DISCOUNT";
}

export interface Payment extends ExternalReference {
  paidDate?: string;
  paidBusinessDate?: string;
  type?:
    | "CASH"
    | "CREDIT"
    | "GIFTCARD"
    | "HOUSE_ACCOUNT"
    | "REWARDCARD"
    | "LEVELUP"
    | "OTHER"
    | "UNDETERMINED";
  cardEntryMode?:
    | "SWIPED"
    | "KEYED"
    | "ONLINE"
    | "EMV_CHIP_SIGN"
    | "TOKENIZED"
    | "PRE_AUTHED"
    | "SAVED_CARD"
    | "FUTURE_ORDER";
  amount?: number;
  tipAmount?: number;
  amountTendered?: number;
  cardType?:
    | "VISA"
    | "MASTERCARD"
    | "AMEX"
    | "DISCOVER"
    | "JCB"
    | "DINERS"
    | "CIT"
    | "MAESTRO"
    | "LASER"
    | "SOLO"
    | "UNKNOWN";
  last4Digits?: string;
  originalProcessingFee?: number;
  cashDrawer?: ExternalReference;
  refundStatus?: "NONE" | "PARTIAL" | "FULL";
  refund?: Refund;
  paymentStatus?:
    | "OPEN"
    | "PROCESSING"
    | "AUTHORIZED_AT_RISK"
    | "AUTHORIZED"
    | "ERROR"
    | "ERROR_NETWORK"
    | "DENIED"
    | "PROCESSING_VOID"
    | "VOIDED_AT_RISK"
    | "CANCELLED"
    | "CAPTURE_IN_PROGRESS"
    | "CAPTURED"
    | "VOIDED";
  voidInfo?: VoidInformation;
  houseAccount?: ExternalReference;
  otherPayment?: ExternalReference;
  createdDevice?: Device;
  lastModifiedDevice?: Device;
  mcaRepaymentAmount?: number;
  cardPaymentId?: string;
}

export interface Refund {
  refundAmount?: number;
  tipRefundAmount?: number;
  refundDate?: string;
  refundBusinessDate?: string;
}

export interface AppliedDiscount extends ExternalReference {
  name?: string;
  discountAmount?: number;
  nonTaxDiscountAmount?: number;
  discount?: ToastReference;
  triggers?: AppliedDiscountTrigger[];
  approver?: ExternalReference;
  processingState?: "PENDING_APPLIED" | "APPLIED" | "PENDING_VOID" | "VOID";
  loyaltyDetails?: LoyaltyDetails;
  comboItems?: ExternalReference[];
  appliedPromoCode?: string;
}

export interface AppliedDiscountTrigger {
  selection?: ExternalReference;
  quantity?: number;
}

export interface LoyaltyDetails {
  referenceId?: string;
  vendor?:
    | "TOAST"
    | "PUNCHH"
    | "PUNCHH2"
    | "PAYTRONIX"
    | "APPFRONT"
    | "INTEGRATION";
}

export interface AppliedTaxRate extends ToastReference {
  entityType?: string;
  taxRate?: ToastReference;
  name?: string;
  rate?: number;
  taxAmount?: number;
  type?: "PERCENT" | "FIXED" | "NONE" | "TABLE";
}

export interface VoidInformation {
  voidUser?: ExternalReference;
  voidApprover?: ExternalReference;
  voidDate?: string;
  voidBusinessDate?: number;
  voidReason?: ExternalReference;
}

export interface ApplicableDiscountsRequest {
  order: Order;
  promoCode?: string;
}

export interface ApplicableDiscount {
  discount: ToastReference;
  applicableChecks?: ExternalReference[];
  applicableSelections?: ExternalReference[];
}

export interface OrderResponse {
  orders?: Order[];
  status?: number;
}

export interface CurbsidePickupInfo extends ToastReference {
  transportColor?: string;
  transportDescription?: string;
  notes?: string;
}
