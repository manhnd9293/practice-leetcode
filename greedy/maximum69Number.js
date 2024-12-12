/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
  const digits = String(num).split("");
  for(let i=0; i < digits.length; i++) {
    if(digits[i] === "6") {
      console.log(`digit ${i}`)
      digits[i] = "9";
      break;
    }
  }

  return Number(digits.join(""));
};