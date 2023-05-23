import { MenuItemInventory } from "../types/stock.types";
import { FunctionParams, ToastError } from "../types/toast.types";
import fetch from "node-fetch";

export async function getStock(
  params: FunctionParams
): Promise<MenuItemInventory[]> {
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${params.accessToken}`,
      "Toast-Restaurant-External-ID": `${params.restaurantGuid}`,
    },
  };

  try {
    const response = await fetch(
      `https://${params.toastHostname}/stock/v1/inventory`,
      options
    );
    return (await response.json()) as unknown as MenuItemInventory[];
  } catch (e: any) {
    throw new ToastError({
      message: e.message,
      endpoint: "get inventory",
      path: "/stock/v1/inventory",
    });
  }
}
