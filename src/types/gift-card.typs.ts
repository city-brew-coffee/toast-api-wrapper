export interface GiftCardTransaction {
    activateTransactionInformation?: TransactionInformationActivate;
    addValueTransactionInformation?: TransactionInformationAddValue;
    getBalanceTransactionInformation?: TransactionInformationGetBalance;
    redeemTransactionInformation?: TransactionInformationRedeem;
    reverseTransactionInformation?: TransactionInformationReverse;
}

export interface TransactionInformationActivate {
    giftCardIdentifier: string;
    identifierSource: GiftCardIdentifierSource;
    initialBalance: number;
    checkIdentifier: string;
}

export interface TransactionInformationAddValue {
    giftCardIdentifier: string;
    identifierSource: GiftCardIdentifierSource;
    additionalValue: number;
    checkIdentifier: string;
}

export interface TransactionInformationGetBalance {
    giftCardIdentifier: string;
    identifierSource: GiftCardIdentifierSource;
}

export interface TransactionInformationRedeem {
    giftCardIdentifier: string;
    identifierSource: GiftCardIdentifierSource;
    redeemedValue: number;
    checkIdentifier: string;
    isCashOut: boolean;
}

export interface TransactionInformationReverse {
    giftCardIdentifier: string;
    identifierSource: GiftCardIdentifierSource;
    previousTransaction: string;
    checkIdentifier: string;
}

export interface GiftCardTransactionResponse {
    transactionStatus: GiftCardTransactionStatuses;
    activateResponse?: TransactionResponseActivate;
    addValueResponse?: TransactionResponseAddValue;
    getBalanceResponse?: TransactionResponseGetBalance;
    redeemResponse?: TransactionResponseRedeem;
    reverseResponse?: TransactionResponseReverse;
}

export interface TransactionResponseActivate {
    currentBalance: number;
}

export interface TransactionResponseAddValue {
    currentBalance: number;
}

export interface TransactionResponseGetBalance {
    currentBalance: number;
}

export interface TransactionResponseRedeem {
    currentBalance: number;
    redeemedValue: number;
}

export interface TransactionResponseReverse {
    currentBalance: number;
}

export type GiftCardIdentifierSource = 'KEYED' | 'SCANNED' | 'SWIPED' | 'UNKNOWN';
export type GiftCardTransactionType = 'GIFTCARD_ACTIVATE' | 'GIFTCARD_ADD_VALUE' | 'GIFTCARD_GET_BALANCE' | 'GIFTCARD_REDEEM' | 'GIFTCARD_REVERSE';
export type GiftCardTransactionStatuses = 'ACCEPT' | 'ERROR_INVALID_TOAST_TRANSACTION_TYPE' | 'ERROR_CARD_ALREADY_ACTIVATED' | 'ERROR_CARD_NOT_ACTIVATED' | 'ERROR_CARD_INVALID' | 'ERROR_INVALID_INPUT_PROPERTIES' | 'ERROR_TRANSACTION_DOES_NOT_EXIST' | 'ERROR_INVALID_TOKEN' | 'ERROR_TRANSACTION_CANNOT_BE_REVERSED' | 'ERROR_INVALID_RESTAURANT';