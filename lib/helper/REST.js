let Helper = require('../helper');
let unirest = require('unirest');

/**
 * REST helper to execute RESTful API calls, this is currently under development phase.
 * usage:
 * ```js
 * let response = yield I.sendGet('https://randomuser.me/api/')
 * I.say(`I received: ${response.raw_body}`)
 * ```
 * Helper should be configured like:
 * ```js
 *   "helpers": {
 *     "REST": {}
 *    }
 * ```
 */
class REST extends Helper {
  constructor(config) {
    super(config);
  }

    /**
     * We return a Promise with the Response object from
     * unirest library. Any questions go to github.
     * [https://github.com/Mashape/unirest-nodejs]
     */
  sendGet(url, headers = {}){
    return new Promise(function (resolve, reject){
      unirest.get(url)
        .headers(headers)
        .end(function (response){
          if(response.code >= 400) {
            return reject(response);
          }
          return resolve(response);
        });
    });
  }
}

module.exports = REST;
