const multipleCall = require("../index");

const urls = [
  "https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsi.json",
  "https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-hkd.json",
  "https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-usd.json",
];

// Testing for the actual call of the function fucntion for multiple urls using the sample above
describe("The multiple url request function ", () => {
  it("returns an array of data", async () =>
    multipleCall(urls).then((result) =>
      expect(result).toEqual(
        expect.arrayContaining([
          expect.objectContaining({ status: "fulfilled" }),
        ])
      )
    ));

  // Testing for urls errors when an empty or normal string is provided
  it("tests for when not an array or empty url is passed error", () =>
    multipleCall().then((result) =>
      expect(result).toEqual({
        message: "Pls provide an array of urls!",
      })
    ));

  // Testing for when the promise is rejected because of invalid url.
  it("tests for error", () => {
    try {
      const url = [
        "https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsi.jsons",
      ];
      return multipleCall(url).then((result) =>
        expect(result).toEqual(
          expect.arrayContaining([
            expect.objectContaining({ status: "rejected" }),
          ])
        )
      );
    } catch (error) {
      expect(result).toEqual({
        message: "Unexpected token < in JSON at position 0",
      });
    }
  });
});
