export interface MenuItemInventory {
  guid: string;
  itemGuidValidity?: "VALID" | "INVALID";
  status: "IN_STOCK" | "QUANTITY" | "OUT_OF_STOCK";
  quantity?: number;
}
