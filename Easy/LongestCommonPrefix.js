// const stringsArray = ["apple", "banana", "kiwi", "grape", "orange"];
//
// const smallestString = stringsArray.reduce((smallest, current) => {
//     return current.length < smallest.length ? current : smallest;
// }, stringsArray[0]);
//
// console.log("Самая маленькая строка:", smallestString);



const longestCommonPrefix = function(strs) {

    if (strs.length === 0) {
        return ''
    }

    strs.sort()

    const firstItem = strs[0]
    const lastItem = strs[strs.length - 1]

    let prefix = ''

    for (let i = 0; i < firstItem.length; i++) {
        if (firstItem[i] === lastItem[i]) {
            prefix += firstItem[i]
        } else {
            break
        }
    }

    return prefix
};

console.log(longestCommonPrefix(["dog","racecar","car"]))