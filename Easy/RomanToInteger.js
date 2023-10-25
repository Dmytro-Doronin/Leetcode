var romanToInt = function(s) {

    const arr = s.split('')

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

    for(let i of arr) {
        result += description[i]
    }

    return result
};

console.log(romanToInt("MCMXCIV"))