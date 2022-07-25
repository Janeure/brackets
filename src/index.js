module.exports = function check(str, bracketsConfig) {
  let box = {};
  let open = []
  for (key of bracketsConfig) {
    box[key[1]] =  key[0];
    open.push(key[0])
}
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    let top = stack[stack.length-1];
    let x = str[i];
    if (stack.length !== 0 && box[x] === top) {
          stack.pop();
    }
    else {
      stack.push(x);
    }
  }
  return stack.length === 0;
}