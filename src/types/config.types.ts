import { ToastReference, ExternalReference } from './toast.types';

export interface Discount extends ToastReference{
    name?: string;
    active?: boolean;
    type?: 'PERCENT' | 'FIXED' | 'OPEN_PERCENT' | 'OPEN_FIXED' | 'BOGO' | 'FIXED_TOTAL';
    percentage?: number;
    amount?: number;
    selectionType?: 'CHECK' | 'ITEM' | 'BOGO';
    nonExclusive?: boolean;
    itemPickingPriority?: 'FIRST' | 'LEAST_EXPENSIVE' | 'MOST_EXPENSIVE';
    fixedTotal?: number;
}

export interface RevenueCenter extends ToastReference {
    name?: string;
    description?: string;
}

export interface DiningOption extends ExternalReference {
    name?: string;
    behavior?: 'DINE_IN' | 'TAKE_OUT' | 'DELIVERY';
    curbside?: boolean;
}

export interface CashDrawer extends ToastReference {
    printer?: ToastReference;
}

export interface AlternatePaymentType extends ExternalReference {
    name?: string;
}

export interface NoSaleReason extends ToastReference {
    name?: string;
}

export interface PayoutReason extends ToastReference {
    name?: string;
}

export interface VoidReason extends ToastReference {
    name?: string;
}

export interface BreakType extends ToastReference {
    name?: string;
    active?: boolean;
    paid?: boolean;
    duration?: number;
    enforceMinimumTime?: boolean;
    trackMissedBreaks?: boolean;
    breakIntervalHrs?: number;
    breakIntervalMins?: number;
    trackBreakAcknowledgement?: boolean;
}