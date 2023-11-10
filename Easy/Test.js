console.log(1)

setTimeout(() => {
    console.log(2)
}, 1000)

fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then(res => console.log(3))

fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then(res => console.log(4))

setTimeout(() => {
    console.log(5)
    setTimeout(() => {
        console.log(6)
    }, 1000)
}, 1000)

console.log(7)
