import { FunctionParams, ToastError, ApiResponse } from "../types/toast.types";
import {
  Order,
  ApplicableDiscountsRequest,
  ApplicableDiscount,
  Payment,
  OrderResponse,
} from "../types/orders.types";
import { Discount } from "../types/config.types";
import fetch from "node-fetch";

export async function getOrders(
  params: FunctionParams,
  start: string,
  end: string
): Promise<string[]> {
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${params.accessToken}`,
      "Toast-Restaurant-External-ID": `${params.restaurantGuid}`,
    },
  };

  try {
    const response = await fetch(
      `https://${params.toastHostname}/orders/v2/orders?startDate=${start}&endDate=${end}`,
      options
    );
    return (await response.json()) as unknown as string[];
  } catch (e: any) {
    throw new ToastError({
      message: e.message,
      endpoint: "get orders",
      path: "/orders/v2/orders",
    });
  }
}

export async function getOrderDetails(
  params: FunctionParams,
  orderGuid: string
): Promise<Order> {
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${params.accessToken}`,
      "Toast-Restaurant-External-ID": `${params.restaurantGuid}`,
    },
  };

  try {
    const response = await fetch(
      `https://${params.toastHostname}/orders/v2/orders/${orderGuid}`,
      options
    );

    return (await response.json()) as unknown as Order;
  } catch (e: any) {
    throw new ToastError({
      message: e.message,
      endpoint: "get order details",
      path: "/orders/v2/orders/{orderGuid}",
    });
  }
}

export async function addOrder(
  params: FunctionParams,
  order: Order
): Promise<ApiResponse<Order>> {
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${params.accessToken}`,
      "Toast-Restaurant-External-ID": `${params.restaurantGuid}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(order),
  };

  const response = await fetch(
    `https://${params.toastHostname}/orders/v2/orders`,
    options
  );
  const responseText = await response.text();
  try {
    const response = JSON.parse(responseText);
    return {
      rawResponse: responseText,
      status: response.statusText,
      response: JSON.parse(responseText),
    };
  } catch (e: any) {
    return {
      rawResponse: responseText,
      status: response.statusText,
      response: undefined,
      error: e.toString(),
    };
  }
}

export async function getApplicableDiscountsForOrder(
  params: FunctionParams,
  order: Order,
  promoCode?: string
): Promise<ApplicableDiscount> {
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${params.accessToken}`,
      "Toast-Restaurant-External-ID": `${params.restaurantGuid}`,
    },
    body: JSON.stringify({
      order,
      promoCode,
    } as ApplicableDiscountsRequest),
  };

  try {
    const response = await fetch(
      `https://${params.toastHostname}/orders/v2/applicableDiscounts`,
      options
    );
    return (await response.json()) as unknown as ApplicableDiscount;
  } catch (e: any) {
    throw new ToastError({
      message: e.message,
      endpoint: "get applicable discounts",
      path: "/orders/v2/applicableDiscounts",
    });
  }
}

export async function addCheckLevelDiscounts(
  params: FunctionParams,
  discounts: Discount[],
  orderGuid: string,
  checkGuid: string
): Promise<Order> {
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${params.accessToken}`,
      "Toast-Restaurant-External-ID": `${params.restaurantGuid}`,
    },
    body: JSON.stringify(discounts),
  };

  try {
    const response = await fetch(
      `https://${params.toastHostname}/orders/v2/orders/${orderGuid}/checks/${checkGuid}/appliedDiscounts`,
      options
    );
    return (await response.json()) as unknown as Order;
  } catch (e: any) {
    throw new ToastError({
      message: e.message,
      endpoint: "add check level discounts",
      path: "/orders/{orderGuid}/checks/{checkGuid}/appliedDiscounts",
    });
  }
}

export async function addItemLevelDiscounts(
  params: FunctionParams,
  discounts: Discount[],
  orderGuid: string,
  checkGuid: string,
  selectionGuid: string
): Promise<Order> {
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${params.accessToken}`,
      "Toast-Restaurant-External-ID": `${params.restaurantGuid}`,
    },
    body: JSON.stringify(discounts),
  };

  try {
    const response = await fetch(
      `https://${params.toastHostname}/orders/v2/orders/${orderGuid}/checks/${checkGuid}/selections/${selectionGuid}/appliedDiscounts`,
      options
    );
    return (await response.json()) as unknown as Order;
  } catch (e: any) {
    throw new ToastError({
      message: e.message,
      endpoint: "add item level discounts",
      path: "/orders/{orderGuid}/checks/{checkGuid}/selections/{selectionGuid}/appliedDiscounts",
    });
  }
}

export async function addPaymentToCheck(
  params: FunctionParams,
  payments: Payment[],
  orderGuid: string,
  checkGuid: string
): Promise<Order> {
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${params.accessToken}`,
      "Toast-Restaurant-External-ID": `${params.restaurantGuid}`,
    },
    body: JSON.stringify(payments),
  };

  try {
    const response = await fetch(
      `https://${params.toastHostname}/orders/v2/orders/${orderGuid}/checks/${checkGuid}/payments`,
      options
    );
    return (await response.json()) as unknown as Order;
  } catch (e: any) {
    throw new ToastError({
      message: e.message,
      endpoint: "add payment to check",
      path: "/orders/{orderGuid}/checks/{checkGuid}/payments",
    });
  }
}

export async function updateTipOnPayment(
  params: FunctionParams,
  tipAmount: number,
  orderGuid: string,
  checkGuid: string,
  paymentGuid: string
): Promise<Order> {
  const options = {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${params.accessToken}`,
      "Toast-Restaurant-External-ID": `${params.restaurantGuid}`,
    },
    body: JSON.stringify({ tipAmount }),
  };

  try {
    const response = await fetch(
      `https://${params.toastHostname}/orders/v2/orders/${orderGuid}/checks/${checkGuid}/payments/${paymentGuid}`,
      options
    );
    return (await response.json()) as unknown as Order;
  } catch (e: any) {
    throw new ToastError({
      message: e.message,
      endpoint: "update tip on payment",
      path: "/orders/{orderGuid}/checks/{checkGuid}/payments/{paymentGuids}",
    });
  }
}

export async function getCheckPricesForOrder(
  params: FunctionParams,
  order: Order
): Promise<ApiResponse<Order>> {
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${params.accessToken}`,
      "Toast-Restaurant-External-ID": `${params.restaurantGuid}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(order),
  };

  const response = await fetch(
    `https://${params.toastHostname}/orders/v2/prices`,
    options
  );
  const responseText = await response.text();
  try {
    const order = JSON.parse(responseText);
    return {
      rawResponse: responseText,
      status: response.statusText,
      response: order,
    };
  } catch (e: any) {
    return {
      rawResponse: responseText,
      status: response.statusText,
      response: undefined,
      error: e.toString(),
    };
  }
}

export async function getOrdersBulk(
  params: FunctionParams,
  startDate: string,
  endDate: string,
  pageSize: number,
  page: number
): Promise<Order[]> {
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${params.accessToken}`,
      "Toast-Restaurant-External-ID": `${params.restaurantGuid}`,
    },
  };

  try {
    const response = await fetch(
      `https://${params.toastHostname}/orders/v2/ordersBulk?startDate=${startDate}&endDate=${endDate}&pageSize=${pageSize}&page=${page}`,
      options
    );
    return (await response.json()) as unknown as Order[];
  } catch (e: any) {
    throw new ToastError({
      message: e.message,
      endpoint: "get orders in bulk",
      path: "/ordersBulk",
    });
  }
}
