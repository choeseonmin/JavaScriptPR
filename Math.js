// toString

let num = 10;
num.toString();
num.toString(2);

console.log(num.toString(2));

let num1 = 255;
console.log(num1.toString(16 ))


Math.ceil()  //올림 메서드
Math.floor()  //내림 메서드
Math.round() //반올림 메서드

// 예를 들면 소수점 33.01123124를 소수점 두번 째 자리 까지 출력해주세요 라는 요구사항이 있을 때
// 위 숫자를 a라 칭하고 a * 100 곱하고 Math.round 메소드를 이용해서 반올림을 한뒤에 다시 100으로 나누면 완성된다.
// 예를 들면
// let a = 33.01;
// Math.round(a * 100)/100 = 33.01;
// 하지만 더 쉬운 방법이 있다. toFixed(); 이다.
// toFixed는 소수점 자릿수를 출력해주는 메소드이다.
// a.toFixed(2);를 이용하면 소수점 3번째 자리에서 반올림하여 2번째 까지 출력해준다.
//
// 근데 소수점 자리 입력을 0 혹은 변수의 수의 자리수 보다 많이 적으면
// 0을 입력하면 0번째 자리이기 때문에 정수가 출력되고,
// 더 많이 입력하면 부족한 자릿수는 0으로 채운다.
//
// 근데 한가지 문제점이 있다. toFixed는 문자열을 반환한다. 그래서 반환 후 number로 반환해준다
a.toFixed(2); // "33.01"
Number(a.toFixed(2)) // 33.01


// isNaN은 NaN인지 아닌지 판별하는 메소드이다. NaN을 판별하는 유일한 메소드이며
// isNaN은 자기 자신과 비교를 해도 false를 반환한다.
isNaN(x) //true
isNaN(3) //false
x == NaN //false
x === NaN //false
NaN == NaN //false


// parseInt() 는 Number와 같이 숫자로 변경해주는 메소드이다.
// 근데 차이점은 문자열도 숫자로 변경해준다.

let margin = '10px';

parseInt(margin) //10
Number(margin) //NaN

// parse는 읽을 수 있는 문자까지는 읽고 문자를 만나면 숫자를 반환한다.
// 그래서 변수가 숫자로 시작하는 것이 아닌 문자로 시작하면 NaN을 출력한다. 왜냐하면 문장 시작부터 문자열을 만났기 때문이다.
let b = 'f3'
parseInt(b) //NaN

// Math.random() 은 0~1 사이에서 무작위로 숫자를 생성하는 메소드이다.
// 1~100까지의 숫자를 뽑고 싶으면
Math.floor(Math.random() * 100) + 1

Math.max(), Min()
// 괄호안의 숫자 중 가장 큰 숫자와 가장 작은 숫자를 출력할 수 있다.

Math.abs() //절대값을 출력하는 메소드

Math.pow() //제곱하는 메소드
Math.pow(2, 10); // 2에 10승

Math.sqrt() //제곱근을 구하는 메소드
Math.sqrt(16) // 4