import { FunctionParams, ToastError } from "../types/toast.types";
import { RestaurantGuid, RestaurantInfo } from "../types/restaurants.types";
import fetch from "node-fetch";

export async function getRestaurantsInGroup(
  params: FunctionParams
): Promise<RestaurantGuid[]> {
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${params.accessToken}`,
      "Toast-Restaurant-External-ID": `${params.restaurantGuid}`,
    },
  };

  try {
    const response = await fetch(
      `https://${params.toastHostname}/restaurants/v1/groups/${params.managmentGroupGuid}/restaurants`,
      options
    );
    return (await response.json()) as unknown as RestaurantGuid[];
  } catch (e: any) {
    throw new ToastError({
      message: e.message,
      endpoint: "get restaurants in group",
      path: "/restaurants/v1/groups/{managmentGroupGuid}/restaurants",
    });
  }
}

export async function getRestaurantInformation(
  params: FunctionParams
): Promise<RestaurantInfo> {
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${params.accessToken}`,
      "Toast-Restaurant-External-ID": `${params.restaurantGuid}`,
    },
  };

  try {
    const response = await fetch(
      `https://${params.toastHostname}/restaurants/v1/restaurants/${params.restaurantGuid}`,
      options
    );
    return (await response.json()) as unknown as RestaurantInfo;
  } catch (e: any) {
    throw new ToastError({
      message: e.message,
      endpoint: "get restaurant information",
      path: "/restaurants/v1/restaurants/{restaurantGuid}",
    });
  }
}
