# Simple Client Oauth1

Package that performs simple requests for an Oauth1 service.

## Install

> npm install simple-client-oauth1 --save

## Usage

const simpleOauth = require("simple-client-oauth1");

> simpleOauth.GetReturnRequest(<br/>
 > &nbsp; &nbsp; urlRequest,<br/>
 > &nbsp; &nbsp; methodRequest,<br/>
 > &nbsp; &nbsp; bodyRequest,<br/>
 > &nbsp; &nbsp; consumerKeyOauth,<br/>
 > &nbsp; &nbsp; consumerKeySecretOauth,<br/>
 > &nbsp; &nbsp; tokenKeyOauth,<br/>
 > &nbsp; &nbsp; tokenKeySecretOauth<br/>
 > &nbsp; ).then(data => { <br/>
 > &nbsp; &nbsp; console.log("body response:", data); <br/>
 > &nbsp; }).catch(e => { <br/>
 > &nbsp; &nbsp; console.error("error:", e); <br/>
> });

### Other language

> Package Nuget: https://github.com/josembergff/simple-client-oauth1-nuget
