//arr.splice = 특정요소를 지우고, 지운 것을 반환하고, 추가할 수 있음
let arr1 = [1,2,3,4,5]
let result = arr1.splice(1,2)
console.log(arr1)
console.log(result)


//arr.slice = 요소 반환
let arr = [1,2,3,4,5]
console.log(arr.slice(1,2))



//arr.concat = 새 배열을 합쳐서 반환
let arr2 = [1,2,3]
arr2.concat([11,22])
arr2.concat([33,44,55], [66,77])

console.log(arr2.concat([33,44,55], [66,77]))


//arr.forEach = 배열 반복
let user = ['선민', '승은', '주은']
user.forEach((name, index) => {
    console.log(`${index + 1}. ${name}`)
});


//arr.indexOf/ arr.lastindexOf
let arr3 = [1,2,3,4,4,6,7,8]
arr3.indexOf(3)
console.log(arr3.indexOf(4,4))  //입력한 값의 순번을 알려주는 메서드 만약 같은 수가 있을 시에는 뒤에 입력한 (n,m)식일 때 m의 숫자만 탐색함
console.log(arr3.lastIndexOf(6)) //뒤에서 부터 찾아온다고 생각하면 됨. 같은 수가 두개 이상일 시 뒤에 있는 숫자만 탐색



let userList = [
    {name: '선민', age: 27},
    {name: '승은', age: 25},
    {name: '주은', age: 26}
]

const result1 = userList.find((user5) => {
    if(user5.age > 19) {    //userList의 age가 19가 넘는다면 true로 리턴
        return true;
    }
    return false;
});

console.log(result1);   //result1



let userList2 = [
    {name: '선민', age: 27},
    {name: '승은', age: 25},
    {name: '로라', age: 3}
]

const result2 = userList2.find((user6) => {
    if(user6.age < 19) {
        return true;
    }
    else {
        return false;
    }
})

console.log(result2)



let userList3 = [
    {name: '선민', age:5},
    {name: '승은', age:25},
    {name: '주은', age:26},
    {name: '상후', age:20}
]

const result3 = userList3.findIndex((user7) => {
    for (i = 0; i<userList3.length; i++) {

        if (user7.age < 19) {
            return true
        }
        return false;
    }
})

console.log(result3)



let userList4 = [
    {name: '선민', age: 27},
    {name: '승은', age: 26},
    {name: '로라', age: 3},
    {name: '주은', age: 26}
]


//arr.filter는 조건이 맞는 모든 배열을 출력해주는 메소드이다.
const result5 = userList4.filter((user9) => {
    if(user9.age > 19) {
        return true;
    }
    return false;
})

console.log(result5)



const List = [1,2,3,4,5,6,7,,8,9,10]

const result10 = List.filter((List1) => {
    return List1 % 2 === 0;
})

console.log(result10)



const List1 = [1,2,3,4,5,6,7,8,9,10]

const result11 = List1.filter((List2) => {
    return List2 % 2 === 1;
})

console.log(result11)



const ggg = [1,2,3,4,5,6,7,8,9,10]

const result12 = ggg.filter((ggg1) => {
    return ggg1 % 2 === 0;
})

console.log(result12)



//arr.reverse는 이름을 역순으로 재정렬함, 최근에 가입한 유저 목록, 최근에 작성한 글을 보기 위해 사용

const arr10 = [1,2,3,4,5]

const result13 = arr10.reverse()

console.log(result13)



//arr.map은 함수를 받아서 특정 기능을 시행하고 새로운 배열을 반환하는 메소드이다.
let userList11 = [
    {name: '선민', age: 27},
    {name: '승은', age: 25},
    {name: '주은', age: 26}
]

let newUserList = userList11.map((user13,index) => {
    return Object.assign({}, user13, { //assign을 이용해서 복제를 할 건데 먼저 빈 객체를 만들고 만든 빈 객체에 user13을 덮고 또 다시 빈 객체를 만든 이후에 id와 isAdult를 추가한다.
        id : index + 1,
        isAdult : user13.age > 19
    })
})

console.log(newUserList)




let userList10 = [
    {name: '선민', age: 27},
    {name: '승은', age: 25},
    {name: '주은', age: 26}
]

let newUserList2 = userList10.map((user20,index) => {
    return Object.assign({}, user20, {
        id : index + 1,
        isAdult : user20.age > 26
    })
})

console.log(newUserList2)





//arr.join은 배열을 합쳐서 문장을 만들 때 사용
let fff = ["안녕", "나는", "선민"]

let ddd = fff.join(" ")
console.log(ddd)


//arr.split은 문자열을 배열로 만들어준다.
let hhh = "안녕, 승은, 나는, 선민"
let sss = hhh.split(",")   //괄호안에 문자를 대입하면 대입한 문자를 기준으로 속성을 나눔
console.log(sss)


//array.isarray() 배열인지 아닌지 확인하는 메서드
let people = ['선민', '승은', '주은']
let people2 = {
    name:'선민',
    age: 27
}

//typeof는 객체인지 아닌지 확인해주는 메소드인데, array.isarray는 배열인지 아닌지 확인하는 메서드
console.log(typeof people)
console.log(typeof people2)
console.log(Array.isArray(people))
console.log(Array.isArray(people2))