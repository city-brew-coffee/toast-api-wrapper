import fetch from "node-fetch";

import {
  AuthReturnDataforRestaurantManagementGroupClient,
  AuthReturnDataforPartnerApiClient,
} from "../types/auth.types";
import { ToastError } from "..";

export async function requestNewToken(
  toastHostname: string,
  clientId: string,
  clientSecret: string
): Promise<
  | AuthReturnDataforRestaurantManagementGroupClient
  | AuthReturnDataforPartnerApiClient
> {
  const params = {
    clientId: clientId,
    clientSecret: clientSecret,
    userAccessType: "TOAST_MACHINE_CLIENT",
  };

  const options = {
    method: "POST",
    body: JSON.stringify(params),
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(
      `https://${toastHostname}/authentication/v1/authentication/login`,
      options
    );

    return (await response.json()) as unknown as
      | AuthReturnDataforRestaurantManagementGroupClient
      | AuthReturnDataforPartnerApiClient;
  } catch (e: any) {
    throw new ToastError({
      message: e.message,
      endpoint: "request credentials",
      path: "/authentication/v1/authentication/login",
    });
  }
}

export type ToastApiAccountType = "Restaurant-Management-Group" | "Partner-Api";
