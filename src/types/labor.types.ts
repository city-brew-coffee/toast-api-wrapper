import { ExternalReference } from "./toast.types";

export declare class Employee extends ExternalReference{
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

export declare class JobWageOverride {
    wage?: number;
    jobReference?: ExternalReference[];
} 