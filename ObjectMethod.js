// Object.assign
//
// let n = 'name'
// let a = 'age'
//
// const user = {
//     [n] : '선민',
//     [a] : 27
// }
//
// console.log(user)
//
// //n과 a를 이미 선언하고 배열 형식으로 소환하면 { name: '선민', age: 27 } 이렇게 출력된다.
//
// function makeObj(key, val) {  
//     return {
//         [key] : val
//     }
// }
//
// const obj = makeObj('나이', 33)
//
// console.log(obj)

const user1 = {
    name : '선민',
    age : 27,
    gender : 'male'
}

const copy = Object.keys(user1)

console.log(copy)

const user2 = {
    name : '승은',
    age : 25,
    gender : 'female'
}

const result2 = Object.values(user2)

console.log(result2)


const user3 = {
    name : '주은',
    age : 26,
    gender : 'female'
}

const result4 = Object.entries(user3)

console.log(result4)

const user5 = [
    ['name','유주'],
    ['age',4],
    ['gender', 'female']
]

const result5 = Object.fromEntries(user5)
console.log(result5)


const user6 = {
    brother : '선민',
    sister1 : '승은',
    sister2 : '주은',
    dog : '로라',
    baby : '유주'
}

const result6 = Object.keys(user6)
const result7 = Object.values(user6)
const result8 = Object.entries(user6)
console.log(result6)
console.log(result7)
console.log(result8)

const user7 = [
    [ 'brother', '선민' ],
    [ 'sister1', '승은' ],
    [ 'sister2', '주은' ],
    [ 'dog', '로라' ],
    [ 'baby', '유주' ]
]

const result9 = Object.fromEntries(user7)
console.log(result9)
