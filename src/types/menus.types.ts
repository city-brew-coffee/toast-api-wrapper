export interface Restaurant {
    restaurantGuid?: string;
    lastUpdated?: string;
    restaurantTimeZone?: string;
    menus?: Menu[];
    modifierGroupReferences?: { [index:string]: ModiferGroup };
    modifierOptionReferences? : { [index:string]: ModifierOption };
    preModifierGroupReferences? : { [index:string]: PreModifierGroup }
}

export interface Menu {
    name?: string;
    guid?: string;
    masterId?: number;
    description?: string;
    highResImage?: string;
    image?: string;
    visibility?: Visibility;
    availability?: {alwaysAvailable?: boolean, schedule?: object};
    menuGroups?: MenuGroup[];
}

export interface MenuGroup {
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

export interface MenuItem {
    name?: string;
    guid?: string;
    masterId?: number;
    image?: string;
    visibility?: Visibility;
    price?: number;
    pricingStrategy?: 'BASE_PRICE' | 'MENU_SPECIFIC_PRICE' | 'TIME_SPECIFIC_PRICE' | 'SIZE_PRICE' | 'OPEN_PRICE';
    pricingRules?: PricingRules;
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

export interface ModiferGroup {
    name?: string;
    guid?: string;
    referenceId?: number;
    masterId?: number;
    visibility?: Visibility;
    pricingStrategy?: 'NONE' | 'SEQUENCE_PRICE' | 'SIZE_PRICE' | 'SIZE_SEQUENCE_PRICE';
    pricingRules?: PricingRules;
    defaultOptionsChargePrice?: 'YES' | 'NO';
    defaultOptionsSubstitutionPricing?: 'YES' | 'NO';
    minSelections?: number;
    maxSelections?: number;
    requiredMode?: 'REQUIRED' | 'OPTIONAL_FORCE_SHOW' | 'OPTIONAL';
    isMultiSelect?: boolean;
    preModifierGroupReference?: number;
    modifierOptionReferences?: number[];
}

export interface ModifierOption {
    referenceId?: number;
    name?: string;
    guid?: string;
    masterId?: number;
    description?: string;
    image?: string;
    visibility?: Visibility;
    price?: number;
    pricingStrategy?: 'GROUP_PRICE' | 'MENU_SPECIFIC_PRICE' |'TIME_SPECIFIC PRICE' | 'BASE_PRICE' | 'SIZE_PRICE';
    pricingRules?: PricingRules;
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

export interface PreModifierGroup {
    name?: string;
    guid?: string;
    preModifiers?: PreModifier[];
}

export interface PreModifier {
    name?: string;
    guid?: string;
    fixedPrice?: number;
    multiplicationFactor?: number;
    displayMode?: 'PREFIX' | 'SUFFIX';
}

export interface MenuMetadata {
    restaurantGuid?: string;
    lastUpdated?: string;
}

export interface PricingRules {
    timeSpecificPricingRules?: TimeSpecificPrice;
    sizeSpecificPricingGuid?: string;
    sizeSequencePricingRules?: SizeSequencePricingRule;
}

export interface TimeSpecificPrice {
    timeSpecificPrice?: number;
    basePrice?: number;
    schedule?: Schedule[];
}

export interface Schedule {
    days?: ('SUNDAY' | 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY')[];
    timeRanges?: TimeRange[];
}

export interface TimeRange {
    start?: string;
    end?: string;
}

export interface SizeSequencePricingRule {
    sizeName?: string;
    sizeGuid?: string;
    sequencePrices?: SequencePrice[]; 
}

export interface SequencePrice {
    sequence?: number;
    price?: number;
}

export interface SalesCategory {
    name?: string;
    guid?: string;
}

export interface Portion {
    name?: string;
    guid?: string;
    modifierGroupReferences?: number[];
}

export interface ItemTag {
    name?: string;
    guid?: string;
}

export interface ModifierOptionTaxInfo {
    taxRateGuids?: string[];
    overrideItemTaxRates?: boolean;
}

export type Visibility = ('POS' | 'KIOSK' | 'GRUBHUB' | 'TOAST_ONLINE_ORDERING' | 'ORDERING_PARTNERS')[]