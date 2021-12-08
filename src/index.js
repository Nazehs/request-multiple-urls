"use strict";

const fetch = require("node-fetch");

const multipleCall = async (urls = []) => {
  try {
    // making sure that there param is an array and is not empty
    if (urls.length > 0 && Array.isArray(urls)) {
      // sent all the request at once
      const allResponse = await Promise.allSettled(
        urls.map(async (url) => {
          const urlResponse = await fetch(url);
          return urlResponse.json();
        })
      );
      // return the promise of the response
      return allResponse;
    }
    // when the urls provided are not an array or empty
    throw Error("Pls provide an array of urls!");
  } catch (error) {
    const { message } = error;
    return { message };
  }
};

module.exports = multipleCall;
