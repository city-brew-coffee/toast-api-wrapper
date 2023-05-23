import { FunctionParams, ToastError } from "../types/toast.types";
import { Deposit, CashEntry } from "../types/cash-management.types";

export async function getDeposits(
  params: FunctionParams,
  businessDate?: string
): Promise<Deposit[]> {
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${params.accessToken}`,
      "Toast-Restaurant-External-ID": `${params.restaurantGuid}`,
    },
  };

  try {
    const response = await fetch(
      `https://${params.toastHostname}/cashmgmt/v1/deposits?businessDate=${businessDate}`,
      options
    );
    return response.json();
  } catch (e: any) {
    throw new ToastError({
      message: e.message,
      endpoint: "get deposits",
      path: "/cashmgmt/v1/discounts",
    });
  }
}

export async function getCashEntries(
  params: FunctionParams,
  businessDate?: string
): Promise<CashEntry[]> {
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${params.accessToken}`,
      "Toast-Restaurant-External-ID": `${params.restaurantGuid}`,
    },
  };

  try {
    const response = await fetch(
      `https://${params.toastHostname}/cashmgmt/v1/entries?businessDate=${businessDate}`,
      options
    );
    return response.json();
  } catch (e: any) {
    throw new ToastError({
      message: e.message,
      endpoint: "get cash entries",
      path: "/cashmgmt/v1/entries",
    });
  }
}
