import { ToastReference } from './toast.types';

export class Discount extends ToastReference{
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