function processData(input) {
  //Enter your code here
  const lines = input.match(/(?<=\n).*(?=\n)/g);
  for(const line of lines) {
    if(line.match(/^(\d{1,2}|1\d{2}|2[14]\d|25[0-5])((\.\d{1,2}|1\d{2}|2[14]\d|25[0-5])){3}$/)){
      console.log("IPv4")
    } else if (line.match(/^[a-f\d]{1,4}(:[a-f\d]{1,4}){7}$/)) {
      console.log("IPv6")
    } else {
      console.log("Neither");
    }
  }
}