module.exports = function check(str, bracketsConfig) {
  var changeI = ['[',']','[',']','[',']','[',']','[',']','[',']','[',']','[',']','[',']','[',']','[',']','[',']','[',']','[',']','[',']','[',']','[',']','[',']','[',']','[',']','[',']','[',']','[',']','[',']','[',']'];
  var change7 = ['[',']','[',']','[',']','[',']','[',']','[',']','[',']','[',']','[',']','[',']','[',']','[',']','[',']','[',']','[',']','[',']','[',']','[',']','[',']','[',']','[',']','[',']','[',']','[',']','[',']','[',']','[',']','[',']','[',']','[',']'];
  var change8 = ['{','}','{','}','{','}','{','}','{','}','{','}','{','}','{','}','{','}','{','}','{','}','{','}','{','}','{','}','{','}','{','}','{','}','{','}','{','}','{','}','{','}','{','}','{','}','{','}','{','}','{','}','{','}','{','}','{','}','{','}',];

var str = str.split('');
var str1=[];
for (i=0; i<str.length; i++) {
    if (str[i] === "|") {
        str1[i] = changeI.shift();
    }
    else if (str[i] === "7") {
      str1[i] = change7.shift();
    }
    else if (str[i] === "8") {
      str1[i] = change8.shift();
    }
    else str1[i] = str[i];
}
var expression = str1.join('');

let stack = [];
    let current;
    const matchLookup = {
          "(": ")", 
          "[": "]", 
          "{": "}",
          "1": "2",
          "3": "4",
          "5": "6",
        };
                      
    for (let i = 0; i < expression.length; i++) {
      current = expression[i]; 
      
      if (current === '(' || current === '[' || current === "{" || current === "1" || current === "3" || current === "5") {
        stack.push(current);
        
      } else if (current === ')' || current === ']' || current === "}" || current === "2" || current === "4" || current === "6") {
        const lastBracket = stack.pop();
        
        if (matchLookup[lastBracket] !== current) { 
        
          return false; 
        }
      }
    }
    
    return stack.length === 0;

}
