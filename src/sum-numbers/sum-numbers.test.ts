import SumNumbers from "./sum-numbers";

describe("SumNumbers", () => {
  it("sums two numbers", () => {
    const output = SumNumbers(1, 1);

    expect(output).toEqual(2);
  });
});
