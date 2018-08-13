# Simple Client Oauth1

Package that performs simple requests for an Oauth1 service.

## Install

```bash
 npm install --save simple-client-oauth1
```

## Example Usage

```bash
const simpleOauth = require("simple-client-oauth1");

simpleOauth.GetReturnRequest(
        urlRequest,
        methodRequest,
        bodyRequest,
        consumerKeyOauth,
        consumerKeySecretOauth,
        tokenKeyOauth,
        tokenKeySecretOauth
    ).then(data => {
        console.log("body response:", data);
    }).catch(e => {
        console.error("error:", e);
});
```

### Other language

> Package Nuget: https://github.com/josembergff/simple-client-oauth1-nuget
