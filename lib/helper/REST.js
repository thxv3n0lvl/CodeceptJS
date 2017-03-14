let Helper = require('../helper');
let unirest = require('unirest');

/**************************************
 * REST helper to execute RESTful API calls, this is currently under development phase.
 * Usage:
 *      let response = yield I.sendGet('https://randomuser.me/api/')
 *      I.say(`I received: ${response.raw_body}`)
 * Configuration:
 *      Helper should be configured like:
 *      "helpers": {
 *          "REST": {}
 *      }
 ****************************************/
class REST extends Helper {
    constructor(config) {
        super(config);
    }

    /*************************
     * We return a Promise with the Response object from
     * unirest library. Any questions go to github.
     * [https://github.com/Mashape/unirest-nodejs]
     ************************/
    sendGet(url, headers = {}){
        if (url.length > 0) {
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
        } else {
        throw 'Parameter [URL] cannot be empty while sending a GET!!';
        }
    }

    sendPost(url, headers = {}, payload={}){
        if (url.length > 0) {
            return new Promise(function (resolve, reject){
                unirest.post(url)
                    .headers(headers)
                    .send(payload)
                    .end(function (response){
                        if(response.code >= 400) {
                            return reject(response);
                        }
                        return resolve(response);
                    });
            });
        } else {
            throw 'Parameter [URL] cannot be empty while sending a POST!';
        }
    }

    sendPut(url, headers = {}, payload = {}){
        if (url.length > 0) {
            return new Promise(function (resolve, reject){
                unirest.put(url)
                    .headers(headers)
                    .send(payload)
                    .end(function (response){
                        if(response.code >= 400) {
                            return reject(response);
                        }
                        return resolve(response);
                    });
          });
        } else {
            throw 'Parameter [URL] cannot be empty while sending a PUT!';
        }
    }

    sendDelete(url, headers = {}){
        if (url.length > 0) {
            return new Promise(function (resolve, reject){
                unirest.delete(url)
                    .headers(headers)
                    .end(function (response){
                        if(response.code >= 400) {
                          return reject(response);
                        }
                        return resolve(response);
                    });
            });
        } else {
            throw 'Parameter [URL] cannot be empty while sending a DELETE!';
        }
    }
}

// TODO: Create a method to assert on unirest Response object.
// TODO: Refactor sendGet and sendPost to not use `new Promise()`
module.exports = REST;
