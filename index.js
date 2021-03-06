const OAuth = require("oauth-1.0a");
const CryptoJS = require("crypto-js");
const Request = require("request");

module.exports.GetReturnRequest = async (
  url,
  method,
  requestData,
  consumerKey,
  consumerKeySecret,
  comsumeTokenKey,
  comsumeTokenKeySecret
) => {
  let oauth = OAuth({
    consumer: {
      key: consumerKey,
      secret: consumerKeySecret
    },
    signature_method: "HMAC-SHA1",
    hash_function(base_string, key) {
      return CryptoJS.HmacSHA1(base_string, key).toString(CryptoJS.enc.Base64);
    }
  });

  const token = {
    key: comsumeTokenKey,
    secret: comsumeTokenKeySecret
  };

  const request_data = {
    url: url,
    method: method,
    data: requestData
  };

  request_data.headers = oauth.toHeader(oauth.authorize(request_data, token));

  return new Promise((resolve, reject) => {
    const callback = (error, response, body) => {
      if (response) {
        console.error("statusCode:", response.statusCode);
      }

      console.error("body:", body);

      if (error) {
        console.error("error:", error);
        reject(error);
      } else {
        resolve(body);
      }
    };

    Request(request_data, callback);
  });
};
