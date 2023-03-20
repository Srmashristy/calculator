@@ -154,4 +154,20 @@ describe("calculate", function() {
  test(["2", "x", "2", "%"], {
    total: "0.04",
  });

  //Test that pressing the multiplication or division sign multiple times should not affect the current computation
  test(["2", "x", "x"], {
    total: "2",
    operation: "x"
  });

  test(["2", "÷", "÷"], {
    total: "2",
    operation: "÷"
  });

  test(["2", "÷", "x", "+", "-", "x"], {
    total: "2",
    operation: 'x'
  });
});
  2  
src/logic/operate.js
@@ -2,7 +2,7 @@ import Big from "big.js";

export default function operate(numberOne, numberTwo, operation) {
  const one = Big(numberOne || "0");
  const two = Big(numberTwo || "0");
  const two = Big(numberTwo || (operation === "÷" || operation === 'x' ? "1": "0")); //If dividing or multiplying, then 1 maintains current value in cases of null
  if (operation === "+") {
    return one.plus(two).toString();
  }
