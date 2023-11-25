const user = {
    name : '선민',
    age : 27
}

for (let key in user)     //key는 user안에 있다. 있는 객체들을 반복한다.

    console.log(`그의 ${key}은 ${user[key]}`) //${key}는 키 값을 의미하고 ${user[key]}는 프로퍼티를 의미한다

 

const user1 = {
    name : '승은',
    age : 25
}
 
for (let key1 in user1)
    console.log(`그녀의 ${key1}는 ${user1[key1]}`)



const user2 = {
    name : '주은',
    age : 25
}

for (let key2 in user2)
    console.log(`그녀의 ${key2}는 ${user2[key2]}`)

//생성한 변수 명을 잘 기억하고, ${}, ${[]}의 차이점을 잘 기억하자


const showName = Symbol("show name")
user1[showName] = function () {
    console.log(this.name)
}

user[showName];


//심볼을 사용하면 다른 개발자가 만들어놓은 코드에 중복돼서 작동을 안 되는 경우는 없다.
