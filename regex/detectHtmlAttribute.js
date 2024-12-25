function processData(input) {
  const tagMap = new Map();
  const tagContents = input.match(/(?<=<\s*(?!\/)).+?(?=\/?>)/g);
  for(const tagContent of tagContents) {
    const tagName = tagContent.match(/^\w+(?=\s+|$)/)[0];
    const attributeSet  = tagMap.get(tagName) || new Set();
    const attributes = tagContent.match(/(?<=\s+)\w+(?==)/g);

    if(attributes && attributes.length > 0) {
      for(let i = 0; i < attributes.length; i++) {
        attributeSet.add(attributes[i]);
      }
    }
    tagMap.set(tagName, attributeSet);
  }

  for(const tagName of [...tagMap.keys()].sort()) {
    const attributeSet = tagMap.get(tagName);
    const attributes = Array.from(attributeSet).sort();
    console.log(`${tagName}:${attributes.join(',')}`);
  }

}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});
