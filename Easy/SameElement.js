const array = [1,2,3,2,3,4,5,6] // [2,3]

const checkArr = (arr) => {
    const obj = {}
    const arr2 = []
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) {
            obj[arr[i]] = obj[arr[i]] + 1
        } else {
            obj[arr[i]] = 1
        }
    }

    for (let i in Object.keys(obj)) {
        if (obj[i] > 1) {
            arr2.push(+i)
        } else {

        }
    }

    return arr2
}
console.log(checkArr(array))

