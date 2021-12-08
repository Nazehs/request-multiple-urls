"use strict";
import fetch from "node-fetch";
const multipleCall = async (urls = []) => {
  try {
    // making sure that there param is an array and is not empty
    if (urls.length > 0 && Array.isArray(urls)) {
      // sent all the request at once
      let allResponse = await Promise.all(
        urls.map(async (url) => {
          let urlResponse = await fetch(url);
          return urlResponse.json();
        })
      );
      // return the promise of the response
      return allResponse;
    } else {
      // when the urls provided are not an array or empty
      return { message: "Pls provide an array of urls!" };
    }
  } catch (error) {
    const { message } = error;
    return { message };
  }
};

export default multipleCall;
