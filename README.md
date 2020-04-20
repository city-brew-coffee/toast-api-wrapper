# Toast API Wrapper

Wraps a few Toast REST API endpoints for usage in NodeJS. It was built primarily for internal use at City Brew Coffee (https://citybrew.com), but if you find it useful feel free to contribute.

## Features
- Written fully in Typescript and provides type definitions for all objects
- Very simple to use - no API clients to create
- Low overhead - uses node fetch for HTTP requests

## Usage
If using typescript:
1. Import the functions and objects you wish to use. Example:

 ```import { getOrders, requestNewToken, getOrderDetails, Check, Selection } from 'toast-api-wrapper';```

2. To generate a token, use the 'requestNewToken' function. **Remember: never store your client secret in sourcecode!**

3. For every function, the first paramter is a `FunctionParameters` object. This wraps the hostname, access token, and restaurant guid together and can be reused in multiple calls.

4. Every function returns a promise with the function's payload. Chain with `.then((result) => /* do stuff */)` or use `async/await`.

5. Just call functions and use their results. It's that easy!
