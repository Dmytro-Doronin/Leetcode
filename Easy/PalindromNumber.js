var isPalindrome = function(x) {
    const result = x.toString().split('').reverse().join('')

    return Number(result) === x;
};

console.log(isPalindrome(-121))