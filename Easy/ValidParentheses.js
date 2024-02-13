
const str = "(){}[]"

const isValid = function(s) {
    if (s.length % 2 !== 0) {
        return false
    }

    function isOpen(char) {
        return char ==='(' || char ==='{' || char === '['
    }

    function isPair(open, close) {
        return open === '{' && close === '}' || open === '(' && close === ')' || open === '[' && close === ']'
    }

    const stack = []

    for (let i = 0; i < s.length; i++) {
        if (isOpen(s[i])) {
            stack.push(s[i])
        } else if (stack.length && isPair(stack[stack.length - 1], s[i])) {
            stack.pop()
        } else {
            return false
        }

    }

    return stack.length === 0
};

console.log(isValid("{[]}"))

// const a = [1,2,3]
//
// console.log(a[a.length - 1])