# request-multiple-urls

![npm scoped](https://img.shields.io/badge/URL-Hello-orange) ![stars](https://img.shields.io/github/stars/Nazehs/request-multiple-urls) ![forks](https://img.shields.io/github/forks/Nazehs/request-multiple-urls)![open issues](https://img.shields.io/github/issues/Nazehs/request-multiple-urls)

This is a small package that allows you to send multiple requests at the same time

## Dependecies

- node-fetch ^3.1.0

## Install

```
 npm install request-multiple-urls

```

## Usage

```js
const multipleCall = require("request-multiple-urls");
const urls = [
  "https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsi.json",
];
multipleCall(urls).then((results) => {
  console.log(results);
  for (let result of results) {
    const {
      data,
      data: { items },
    } = result;
    console.log(data);
    console.log(items);
  }
});
```
