## 1.7.0

- Update `node-fetch` to `^3.3.1`

## 1.4.5

- Fixed some bugs
- Added get orders in bulk endpoint. More info: https://doc.toasttab.com/Ie5QH/apiOrdersGetDetailedInfoAboutMultipleOrders.html

## 1.4.0

- **POSSIBLE BREAKING CHANGE** Updated to Toast's new Auth credentials to /authentication/v1/authentication/login endpoint. View Toast docs for more info.
- Converted all class objects to interfaces
- Added getApplicableDiscountsForOrder, addCheckLevelDiscounts, addItemLevelDiscounts, addPaymentToCheck, updateTipOnPayment, and getCheckPricesForOrder in orders api.
- Added gift card integration types.
- added curbisde parameter to dining option and curbside into to orders
- changed menu visibility
- added createdDate fileds to check and orders

## 1.3.8

- Added get alternate payment types method

## 1.3.5

- Change token retrieval to use x-www-url-encoded request

## 1.3.3

- Added GET break types in config API
- change get time entires to use modified date

## 1.3.2

- Added parts of the config API

## 1.3.0

- Added parts of labor API

## 1.2.0

- Swapped out request for node-fetch for HTTP requests as request is deprecated

## 1.1.0

- Bug fixes
- Added loyalty types

## 1.0.18

- Fix bug in Menu class where menu was not an array of MenuGroup

## 1.0.17

- Add menu export to index.ts

## 1.0.16

- Added support for Menus API
- Started changelog
- Updated more helpful README
