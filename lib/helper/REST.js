'user strict';
const Helper = require('../helper');
const unirest = require('unirest');
/**
 * REST helper to execute RESTful API calls, this is currently under development phase.
 * Usage:
 *      let response = yield I.sendGet('https://randomuser.me/api/')
 *      I.say(`I received: ${response.raw_body}`)
 * Configuration:
 *      Helper should be configured like:
 *      "helpers": {
 *          "REST": {}
 *      }
 */
class REST extends Helper {
  constructor(config) {
    super(config);
  }

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

  sendPost(url, headers = {}, payload = {}){
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
  }

  sendPut(url, headers = {}, payload = {}){
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
  }

  sendDelete(url, headers = {}){
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
  }
}

module.exports = REST;
