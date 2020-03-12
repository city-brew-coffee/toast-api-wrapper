export class Restaurant {
    restaurantGuid?: string;
    lastUpdated?: string;
    restaurantTimeZone?: string;
    menus?: Menu[];
    modifierGroupReferences?: { string: ModiferGroup };
    modifierOptionReferences? : { string: ModifierOption };
    preModifierGroupReferences? : { string: PreModifierGroup }
}

export class Menu {
    name?: string;
    guid?: string;
    masterId?: number;
    description?: string;
    highResImage?: string;
    image?: string;
    visibility?: Visibility;
    availability?: {alwaysAvailable?: boolean, schedule?: object};
    menuGroups?: MenuGroup;
}

export class MenuGroup {
    name?: string;
    guid?: string;
    masterId?: number;
    description?: string;
    image?: string;
    visibility?: Visibility;
    itemTags?: ItemTag;
    menuGroups?: MenuGroup[];
    menuItems?: MenuItem[];
}

export class MenuItem {
    name?: string;
    guid?: string;
    masterId?: number;
    image?: string;
    visibility?: Visibility;
    price?: number;
    pricingStrategy?: 'BASE_PRICE' | 'MENU_SPECIFIC_PRICE' | 'TIME_SPECIFIC_PRICE' | 'SIZE_PRICE' | 'OPEN_PRICE';
    pricingRules?: PricingRule[];
    isDiscountable?: boolean;
    salesCategory?: SalesCategory;
    taxInfo?: string[];
    itemTag?: ItemTag;
    plu?: string;
    sku?: string;
    calories?: number;
    unitOfMeasure?: 'NONE' | 'LB' | 'OZ' | 'KG' | 'G';
    portions?: Portion[];
    modifierGroupReferences?: number[];
}

export class ModiferGroup {
    name?: string;
    guid?: string;
    referenceId?: number;
    masterId?: number;
    visibility?: Visibility;
    pricingStrategy?: 'NONE' | 'SEQUENCE_PRICE' | 'SIZE_PRICE' | 'SIZE_SEQUENCE_PRICE';
    pricingRules?: PricingRule[];
    defaultOptionsChargePrice?: 'YES' | 'NO';
    defaultOptionsSubstitutionPricing?: 'YES' | 'NO';
    minSelections?: number;
    maxSelections?: number;
    requiredMode?: 'REQUIRED' | 'OPTIONAL_FORCE_SHOW' | 'OPTIONAL';
    isMultiSelect?: boolean;
    preModifierGroupReference?: number;
    modifierOptionReferences?: number[];
}

export class ModifierOption {
    referenceId?: number;
    name?: string;
    guid?: string;
    masterId?: number;
    description?: string;
    image?: string;
    visibility?: Visibility;
    price?: number;
    pricingStrategy?: 'GROUP_PRICE' | 'MENU_SPECIFIC_PRICE' |'TIME_SPECIFIC PRICE' | 'BASE_PRICE' | 'SIZE_PRICE';
    pricingRules?: PricingRule[];
    salesCategory?: SalesCategory;
    taxInfo?: string[]
    modifierOptionTaxInfo?: ModifierOptionTaxInfo;
    itemTags?: ItemTag[];
    plu?: string;
    sku?: string;
    calories?: number;
    unitOfMeasure?: 'NONE' | 'LB' | 'OZ' | 'KG' | 'G';
    isDefault?: boolean;
    allowsDuplicates?: boolean;
    portions?: Portion[];
    modifierGroupReferences?: number[];
}

export class PreModifierGroup {
    name?: string;
    guid?: string;
    preModifiers?: PreModifier[];
}

export class PreModifier {
    name?: string;
    guid?: string;
    fixedPrice?: number;
    multiplicationFactor?: number;
    displayMode?: 'PREFIX' | 'SUFFIX';
}

export class MenuMetadata {
    restaurantGuid?: string;
    lastUpdated?: string;
}

export class PricingRule {
    timeSpecificPricingRules?: TimeSpecificPrice;
    sizeSpecificPricingGuid?: string;
    sizeSequencePricingRules?: SizeSequencePricingRule;
}

export class TimeSpecificPrice {
    timeSpecificPrice?: number;
    basePrice?: number;
    schedule?: Schedule[];
}

export class Schedule {
    days?: ('SUNDAY' | 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY')[];
    timeRanges?: TimeRange[];
}

export class TimeRange {
    start?: string;
    end?: string;
}

export class SizeSequencePricingRule {
    sizeName?: string;
    sizeGuid?: string;
    sequencePrices?: SequencePrice[]; 
}

export class SequencePrice {
    sequence?: number;
    price?: number;
}

export class SalesCategory {
    name?: string;
    guid?: string;
}

export class Portion {
    name?: string;
    guid?: string;
    modifierGroupReferences?: number[];
}

export class ItemTag {
    name?: string;
    guid?: string;
}

export class ModifierOptionTaxInfo {
    taxRateGuids?: string[];
    overrideItemTaxRates?: boolean;
}

export type Visibility = ('POS' | 'KIOSK' | 'GRUBHUB' | 'TOAST_ONLINE_ORDERING')[]