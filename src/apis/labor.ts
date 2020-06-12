import { FunctionParams, ToastError } from '../types/toast.types';
import { Employee, JobWageOverride, Job, Shift, TimeEntry } from '../types/labor.types';
const fetch = require('node-fetch');


export async function getEmployees(params: FunctionParams) : Promise<Employee[]> {
    const options = {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${params.accessToken}`,
            'Toast-Restaurant-External-ID': `${params.restaurantGuid}`
        },
    }
    
    try {
        const response = await fetch(`https://${params.toastHostname}/labor/v1/employees`, options);
        return response.json();
    } catch (e) {
        throw new ToastError({
            message: e.message,
            endpoint: 'get employees',
            path: '/labor/v1/employees'
        });
    }
}

export async function createEmployee(params: FunctionParams, employee: Employee) : Promise<Employee> {
    const options = {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${params.accessToken}`,
            'Toast-Restaurant-External-ID': `${params.restaurantGuid}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(employee),
    }
    
    try {
        const response = await fetch(`https://${params.toastHostname}/labor/v1/employees`, options);
        return response.json();
    } catch (e) {
        throw new ToastError({
            message: e.message,
            endpoint: 'create employee',
            path: '/labor/v1/employees'
        });
    }
}

export async function deleteEmployee(params: FunctionParams, employeeId: string) : Promise<Employee> {
    const options = {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${params.accessToken}`,
            'Toast-Restaurant-External-ID': `${params.restaurantGuid}`
        },
    }
    
    try {
        const response = await fetch(`https://${params.toastHostname}/labor/v1/employees/${employeeId}`, options);
        return response.json();
    } catch (e) {
        throw new ToastError({
            message: e.message,
            endpoint: 'delete employee',
            path: '/labor/v1/employees/{employeeId}'
        });
    }
}

export async function replaceEmployeeJobs(params: FunctionParams, employeeId: string, jobIds: {guid?: string, externalId?: string}[]) : Promise<Employee> {
    const options = {
        method: 'PUT',
        headers: {
            Authorization: `Bearer ${params.accessToken}`,
            'Toast-Restaurant-External-ID': `${params.restaurantGuid}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(jobIds),
    }
    
    try {
        const response = await fetch(`https://${params.toastHostname}/labor/v1/employees/${employeeId}/jobs`, options);
        return response.json();
    } catch (e) {
        throw new ToastError({
            message: e.message,
            endpoint: 'replace employee jobs',
            path: '/labor/v1/employees/{employeeId}/jobs'
        });
    }
}

export async function replaceEmployeeWageOverrides(params: FunctionParams, employeeId: string, wageOverrides: JobWageOverride[]) : Promise<Employee> {
    const options = {
        method: 'PUT',
        headers: {
            Authorization: `Bearer ${params.accessToken}`,
            'Toast-Restaurant-External-ID': `${params.restaurantGuid}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(wageOverrides),
    }
    
    try {
        const response = await fetch(`https://${params.toastHostname}/labor/v1/employees/${employeeId}/wageOverrides`, options);
        return response.json();
    } catch (e) {
        throw new ToastError({
            message: e.message,
            endpoint: 'replace employee wage overrides',
            path: '/labor/v1/employees/{employeeId}/wageOverrides'
        });
    }
}

export async function getJobs(params: FunctionParams) : Promise<Job[]> {
    const options = {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${params.accessToken}`,
            'Toast-Restaurant-External-ID': `${params.restaurantGuid}`
        },
    }
    
    try {
        const response = await fetch(`https://${params.toastHostname}/labor/v1/jobs`, options);
        return response.json();
    } catch (e) {
        throw new ToastError({
            message: e.message,
            endpoint: 'get jobs',
            path: '/labor/v1/jobs'
        });
    }
}

export async function getShifts(params: FunctionParams, startDate: string, endDate: string) : Promise<Shift[]> {
    const options = {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${params.accessToken}`,
            'Toast-Restaurant-External-ID': `${params.restaurantGuid}`
        },
    }
    
    try {
        const response = await fetch(`https://${params.toastHostname}/labor/v1/shifts?startDate=${startDate}&endDate=${endDate}`, options);
        return response.json();
    } catch (e) {
        throw new ToastError({
            message: e.message,
            endpoint: 'get shifts',
            path: '/labor/v1/shifts'
        });
    }
}

export async function getTimeEntries(params: FunctionParams, startDate: string, endDate: string) : Promise<TimeEntry[]> {
    const options = {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${params.accessToken}`,
            'Toast-Restaurant-External-ID': `${params.restaurantGuid}`
        },
    }
    
    try {
        const response = await fetch(`https://${params.toastHostname}/labor/v1/timeEntries?modifiedStartDate=${startDate}&modifiedEndDate=${endDate}`, options);
        return response.json();
    } catch (e) {
        throw new ToastError({
            message: e.message,
            endpoint: 'get time entries',
            path: '/labor/v1/timeEntries'
        });
    }
}