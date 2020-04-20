import { ExternalReference, ToastReference } from './toast.types';

export interface Employee extends ExternalReference{
    createdDate?: string;
    modifiedDate?: string;
    deletedDate?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    passcode?: string;
    externalEmployeeId?: string;
    deleted?: boolean;
    disabled?: boolean;
    jobReferences?: ExternalReference[];
    wageOverrides?: JobWageOverride[];
}

export interface JobWageOverride {
    wage?: number;
    jobReference?: ExternalReference;
}

export interface TimeEntry extends ExternalReference{
    createdDate?: string;
    modifiedDate?: string;
    deletedDate?: string;
    deleted?: boolean;
    jobReference?: ExternalReference;
    employeeReference?: ExternalReference;
    shiftReference?: ExternalReference;
    inDate?: string;
    outDate?: string;
    businessDate?: string;
    regularHours?: number;
    overtimeHours?: number;
    hourlyWage?: number;
    breaks?: TimeEntryBreak[];
    declaredCashTips?: number;
    nonCashTips?: number;
    cashGratuityServiceCharges?: number;
    nonCashGratuityServiceCharges?: number;
    tipsWithheld?: number;
    nonCashSales?: number;
    cashSales?: number;
}

export interface TimeEntryBreak {
    breakType?: ToastReference;
    paid?: boolean;
    inDate?: string;
    outDate?: string;
    missed?: boolean;
    auditResponse?: boolean;
}

export interface Shift extends ExternalReference{
    createdDate?: string;
    modifiedDate?: string;
    deletedDate?: string;
    deleted?: boolean;
    jobReference?: ExternalReference;
    employeeReference?: ExternalReference;
    inDate?: string;
    outDate?: string;
}

export interface Job extends ExternalReference {
    createdDate?: string;
    modifiedDate?: string;
    deletedDate?: string;
    title?: string;
    deleted?: boolean;
    wageFrequency?: 'HOURLY' | 'SALARY';
    defaultWage?: number;
    tipped?: boolean;
    code?: string;
}