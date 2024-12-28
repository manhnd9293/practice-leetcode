function processData(input) {
  //Enter your code here
  const regex = /^[_\.]\d+[a-zA-Z]_?$/;
  const inputLines = input.split('\n');
  for(let i = 1; i < inputLines.length; i++) {
    const line = inputLines[i];
    if(regex.test(line)) {
      console.log('VALID');
    } else {
      console.log('INVALID');
    }
  }
}

const input = "5\n" +
  "_9\n" +
  ".08__\n" +
  "..00_\n" +
  ".aaaa_\n" +
  "_a9."
processData(input);