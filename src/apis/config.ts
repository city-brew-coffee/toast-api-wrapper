import { FunctionParams, ToastError } from "../types/toast.types";
import {
  Discount,
  RevenueCenter,
  DiningOption,
  BreakType,
  AlternatePaymentType,
} from "../types/config.types";
import fetch from "node-fetch";

export async function getDiscounts(
  params: FunctionParams,
  pageSize?: number
): Promise<Discount[]> {
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${params.accessToken}`,
      "Toast-Restaurant-External-ID": `${params.restaurantGuid}`,
    },
  };

  try {
    const response = await fetch(
      `https://${params.toastHostname}/config/v2/discounts?pageSize=${pageSize}`,
      options
    );
    return (await response.json()) as unknown as Discount[];
  } catch (e: any) {
    throw new ToastError({
      message: e.message,
      endpoint: "get discounts",
      path: "/config/v2/discounts",
    });
  }
}

export async function getRevenueCenters(
  params: FunctionParams,
  pageSize?: number
): Promise<RevenueCenter[]> {
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${params.accessToken}`,
      "Toast-Restaurant-External-ID": `${params.restaurantGuid}`,
    },
  };

  try {
    const response = await fetch(
      `https://${params.toastHostname}/config/v2/revenueCenters?pageSize=${pageSize}`,
      options
    );
    return (await response.json()) as unknown as RevenueCenter[];
  } catch (e: any) {
    throw new ToastError({
      message: e.message,
      endpoint: "get revenue centers",
      path: "/config/v2/revenueCenters",
    });
  }
}

export async function getDiningOptions(
  params: FunctionParams,
  pageSize?: number
): Promise<DiningOption[]> {
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${params.accessToken}`,
      "Toast-Restaurant-External-ID": `${params.restaurantGuid}`,
    },
  };

  try {
    const response = await fetch(
      `https://${params.toastHostname}/config/v2/diningOptions?pageSize=${pageSize}`,
      options
    );
    return (await response.json()) as unknown as DiningOption[];
  } catch (e: any) {
    throw new ToastError({
      message: e.message,
      endpoint: "get dining options",
      path: "/config/v2/diningOptions",
    });
  }
}

export async function getBreakTypes(
  params: FunctionParams,
  pageSize?: number
): Promise<BreakType[]> {
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${params.accessToken}`,
      "Toast-Restaurant-External-ID": `${params.restaurantGuid}`,
    },
  };

  try {
    const response = await fetch(
      `https://${params.toastHostname}/config/v2/breakTypes?pageSize=${pageSize}`,
      options
    );
    return (await response.json()) as unknown as BreakType[];
  } catch (e: any) {
    throw new ToastError({
      message: e.message,
      endpoint: "get break tyes",
      path: "/config/v2/breakTypes",
    });
  }
}

export async function getAlternatePaymentTypes(
  params: FunctionParams,
  pageSize?: number
): Promise<AlternatePaymentType[]> {
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${params.accessToken}`,
      "Toast-Restaurant-External-ID": `${params.restaurantGuid}`,
    },
  };

  try {
    const response = await fetch(
      `https://${params.toastHostname}/config/v2/alternatePaymentTypes?pageSize=${pageSize}`,
      options
    );
    return (await response.json()) as unknown as AlternatePaymentType[];
  } catch (e: any) {
    throw new ToastError({
      message: e.message,
      endpoint: "get alternate payment types",
      path: "/config/v2/alternatePaymentTypes",
    });
  }
}
