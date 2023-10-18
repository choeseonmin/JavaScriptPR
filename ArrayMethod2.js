//arr.sort 배열 재정렬 하지만 배열 자체가 변경되니 조심해야함
let arr = [1,5,7,2,123,6]
arr.sort()
console.log(arr) //하지만 정렬이 1,123,2,5,6,7 이렇게 나오는데 이유는 문자취급을 해서 정렬되기 때문이다




let arr2 = ['a', 'b', 'c', 'd', 'e', 'f']
arr2.sort()
console.log(arr2)





let arr3 = [1,6,4,12,41,5]   //sort는 함수도 받을 수 있다.
function fn(a,b) {        //함수를 선언함
     return a-b;          //이 식 자체가 뭘 의미하냐면 어떤 정렬방법을 의미하는 듯함, a와 b를 비교했을 때 뺼셈을 했을 때 음수가 나오면 위치를 변경함. --> 내부 로직인 거 같음.
}

arr3.sort(fn)             //선언한 함수를 이용해서 정렬한다는 뜻
console.log(arr3)
arr.sort((a,b) => {     //arr.sort((a,b) => { . . . }) 함수를 따로 선언하지 않아도 이런식으로 코드를 작성할 수 있다.
    return a-b;
})



//forEach로 배열 안 객체들 더하기
let arr4 = [1,2,3,4,5]
let result = 0;
arr4.forEach((num) => {
    result += num;
})

console.log(result)



let arr5 = [1,2,3,4,5]
let result1 = 0;

arr5.forEach((num) => {
    result1 += num;
})
console.log(result1)




//arr.reduce는 위에 forEach로 더하는 것을 기능화 한 것이다.
let arr6 = [1,2,3,4,5]
const result2 = arr6.reduce((prev, cul) => {   //arr6로 선언한 배열을 reduce를 사용한다는 것이고 prev를 계산값, cul을 현재값으로 생각한다.
    return prev + cul               //초기 값은 0으로 설정해놨으니 0+1 = 1이고 그 이후에 순차적으로 계산.
},0)

console.log(result2)

let arr7 = [1,2,3,4,5]
const result3 = arr7.reduce((prev1, cul1) => {
    return prev1 + cul1
},0)   //여기 적은 0이 초기값임

console.log(result3)



//arr.reduce 응용
let student = [
    {name: '선민', age: 27},
    {name: '승은', age: 25},
    {name: '주은', age: 26},
    {name: '유주', age: 3},
    {name: '로라', age: 4},
]

let ggg = student.reduce((prev, cur) => {
    if(cur.age > 19) {
        prev.push(cur.name)
    }
    return prev
},[])

console.log(ggg)



//연습2
let Student2 = [
    {name: '선민', age: 27},
    {name: '승은', age: 25},
    {name: '주은', age: 26},
    {name: '로라', age: 3},
    {name: '유주', age: 4},
]
let hhh = Student2.reduce((prev, cur) => {
    if(cur.age > 19) {
        prev.push(cur.name)
    }
    return prev;
},[])
//student2를 reduce를 이용할건데 prev, cur라는 초기 값을 설정하는데 이건 prev는 계산값이고 cur는 현재 들어갈 값이다.
//만약에 이번에 들어갈 값의 age가 19보다 높으면
//계산될 prev값에 들어갈 값의 이름이 배열안에 들어간다.
//그리고 계산된 prev값을 반환한다. ========= 이게 hhh의 역할
//마지막으로  hhh값을 출력.
console.log(hhh)



//연습3
let Student3 = [
    {name: '선민', gender: 'male'},
    {name: '승은', gender: 'female'},
    {name: '주은', gender: 'female'},
    {name: '로라', gender: 'female'},
    {name: '유주', gender: 'female'}
]

let sss = Student3.reduce((prev, cur) => {
   if(cur.gender === 'female') {
       prev.push(cur.name)  //계산될 값에 현재값의 이름을 추가한다.
   }
   return prev
},[])  //[]을 적은 이유는 배열형식으로 가져온다? 아니면 배열형식의 자료를 쓴다? 라고 생각하면 됨.

console.log(sss)