var romanToInt = function(s) {


    let result = 0

    const description = {
        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000,
    }

    for (let i = 0; i < s.length; i++) {
        let currNum = description[s[i]]
        let nextNum = description[s[i + 1]]

        if (currNum < nextNum) {
            result += nextNum - currNum
            i++
        } else {
            result += currNum
        }
    }

    return result
};

console.log(romanToInt("MCMXCIV"))