const user = {
    [3+2] : 5,
    ["안녕"+"하세요"] : "Hello"
}

console.log(user)

const user1 = {
    name : '승은',
    age : 27
}


const cloneUser = user1;
const newUser = Object.assign({}, user1);

newUser.name = '선민';

console.log(user1.name)
console.log(newUser.name)




const user2 = {
    name : '수호',
    age : 7
}

const cloneUser1 = user2;
const newUser1 = Object.assign({}, user2);

newUser1.name = '지호'

console.log(user2.name)
console.log(newUser1.name)


const user = { name : '선민' }
const user1 = { age : 27 }
const user2 = { gender : 'male'}

Object.assign(user, user1, user2)

console.log(user)



console.log(user)