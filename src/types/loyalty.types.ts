import { Check, AppliedDiscount } from './orders.types';
export interface AccountInfo {
    identifier?: string;
    firstName?: string;
    lastName?: string;
    phone?: string;
    email?: string;
    pointsBalance?: string;
}

export interface AccountSearchCriteria {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
}

export interface LoyaltyTransaction {
    toastTransactionType: 'LOYALTY_INQUIRE' | 'LOYALTY_SEARCH' | 'LOYALTY_REDEEM' | 'LOYALTY_ACCRUE' | 'LOYALTY_REVERSE' | 'LOYALTY_TRANSFER';
    searchTransactionInformation: TransactionInformationSearch;
    checkTransactionInformation: TransactionInformationCheck;
    reverseTransactionInformation: TransactionInformationReverse;
    transferTransactionInformation: TransactionInformationTransfer;
}

export interface TransactionInformationSearch {
    searchCriteria?: AccountSearchCriteria;
}

export interface TransactionInformationCheck {
    loyaltyIdentifier?: string;
    orderGuid?: string;
    check?: Check;
    redemptions?: Redemption[];
}

export interface Redemption {
    identifier?: string;
    selectionGuid?: string;
    appliedDiscountGuid?: string;
    multiItemDiscountGuid?: string;
    amount?: number;
    itemApplication?: ItemRedemptionInfo[];
    quantity?: number;
}

export interface ItemRedemptionInfo {
    selectionIdentifier?: string;
    amount?: number;
    appliedDiscountIdentifier?: any;
}

export interface Offer {
    identifier: string;
    name: string;
    applicable: boolean;
    selectionType: 'CHECK' | 'ITEM' | 'MULTI_ITEM';
    itemApplication?: ItemRedemptionInfo[];
    amount: number;
    quantity: number;
    expiration: ExpirationData[];
}

export interface ExpirationData {
    date?: string;
    quantity?: number;
}

export interface TransactionInformationReverse {
    loyaltyIdentifier?: string;
    transactionId?: string;
    redemptions?: Redemption[];
}

export interface TransactionInformationTransfer {
    fromLoyaltyIdentifier?: string;
    toLoyaltyIdentifier?: string;
}

export interface LoyaltyTransactionResponse {
    transactionStatus: 'ACCEPT' | 'ERROR_INVALID_TOAST_TRANSACTION_TYPE' | 'ERROR_ACCOUNT_INVALID' | 'ERROR_INVALID_INPUT_PROPERTIES' | 'ERROR_TRANSACTION_DOES_NOT_EXIST' | 'ERROR_INVALID_TOKEN' | 'ERROR_TRANSACTION_CANNOT_BE_REVERSED' | 'ERROR_INVALID_RESTAURANT' | 'ERROR_INVALID_TRANSFER';
    searchResponse?: ResponseSeach;
    checkResponse?: ResponseCheck;
    transferResponse?: ResponseTransfer;
}

export interface ResponseSeach {
    accounts: AccountInfo[];
}

export interface ResponseCheck {
    accountInfo?: AccountInfo;
    offers?: Offer[];
    rejectedRedemptions?: RejectedRedemption[];
    appliedRedemptions?: Redemption[];
    userMessage?: string;
}

export interface RejectedRedemption {
    redemption?: Redemption;
    message?: string;
}

export interface ResponseTransfer {
    loyaltyIdentifier?: string;
}