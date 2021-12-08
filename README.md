# request-multiple-urls

![npm scoped](https://img.shields.io/badge/URL-Hello-orange) ![stars](https://img.shields.io/github/stars/Nazehs/request-multiple-urls) ![forks](https://img.shields.io/github/forks/Nazehs/request-multiple-urls)![open issues](https://img.shields.io/github/issues/Nazehs/request-multiple-urls)

This is a small package that allows you to send multiple requests at the same time

## Dependecies

- node-fetch ^3.1.0

node-fetch is an implementation of the native Fetch API for Node.js and has lesser dependencies. It's basically the same as window.fetch so it's easy to implement or extend thus that makes it a best option for the package.

PROS:

support for Promises
same API as window.fetch
few dependencies

CONS:

same ergonomics as window.fetch

`Promise.allsetlled()` was used instead of `Promise.all()` because with `Promise.allsettled()` you can get response on the endpoints that were successful and the failed ones whereas `Promised.all()` can reject/invalidate the promises if any of them is rejected.

## Test covered

The below are the tests that were covered in this package

- Given that when a user provide an array of urls then the package should make a simultaneous request and return the response as a promise

- Given that when a user doesn't pass any array or empty url the package should throw an error as king them to provide a valid array list.

- Given that when there's an error in the APIs call there should be a graceful exiting of the program with the error message.

## Installation

```
 npm install request-multiple-urls

```

## Usage

```js
const multipleCall = require("request-multiple-urls");
const urls = [
  "https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsi.json",
  "https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-hkd.json",
  "https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-usd.json",
];

multipleCall(urls).then((results) => {
  console.log(results);
  for (let result of results) {
    const {
      value,
      value: {
        data: { items },
      },
    } = result;
    console.log(value);
    console.log(items);
  }
});
```
