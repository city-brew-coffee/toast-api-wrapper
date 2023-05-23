import { FunctionParams, ToastError } from "../types/toast.types";
import { Restaurant, MenuMetadata } from "../types/menus.types";
import fetch from "node-fetch";

export async function getMenu(params: FunctionParams): Promise<Restaurant> {
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${params.accessToken}`,
      "Toast-Restaurant-External-ID": `${params.restaurantGuid}`,
    },
  };

  try {
    const response = await fetch(
      `https://${params.toastHostname}/menus/v2/menus`,
      options
    );
    return (await response.json()) as unknown as Restaurant;
  } catch (e: any) {
    throw new ToastError({
      message: e.message,
      endpoint: "get menu",
      path: "/menus/v2/menus",
    });
  }
}

export async function getMenuMetadata(
  params: FunctionParams
): Promise<MenuMetadata> {
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${params.accessToken}`,
      "Toast-Restaurant-External-ID": `${params.restaurantGuid}`,
    },
  };
  try {
    const response = await fetch(
      `https://${params.toastHostname}/menus/v2/metadata`,
      options
    );
    return (await response.json()) as unknown as MenuMetadata;
  } catch (e: any) {
    throw new ToastError({
      message: e.message,
      endpoint: "get menu metadata",
      path: "/menus/v2/metadata",
    });
  }
}
