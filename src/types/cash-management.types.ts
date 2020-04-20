import { ToastReference, ExternalReference } from './toast.types';

export interface Deposit extends ToastReference {
    amount?: number;
    date?: string;
    undoes?: string;
    employee?: ExternalReference;
}

export interface CashEntry extends ToastReference {
    amount?: number;
    reason?: string;
    date?: string;
    type?: 'CASH_IN' | 'CASH_COLLECTED' | 'CASH_OUT' | 'PAY_OUT' | 'UNDO_PAY_OUT' | 'TIP_OUT' | 'NO_SALE' | 'DRIVER_REIMBURSEMENT' | 'CLOSE_OUT_EXACT' | 'CLOSE_OUT_OVERAGE' | 'CLOSE_OUT_SHORTAGE';
    cashDrawer?: ToastReference;
    payoutReason?: ToastReference;
    noSaleReason?: ToastReference;
    undoes?: string;
    employee1?: ExternalReference;
    employee2?: ExternalReference;
}