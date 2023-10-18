function Item(title, price) {
    this.title = title;
    this.price = price;
    this.showPrice = function () {
        console.log(`가격은 ${price}원 입니다.`)
    }
}

    let item1 = new Item('사과', '500')
    let item2 = new Item ('키위', '700')
    let item3 = new Item ('바나나', '1000')

    item2.showPrice()

    console.log(item2, item1, item3)


function Stu(name, age) {
    this.name = name;                       //this는
    this.age = age;
    this.showInfo = function () {
        console.log(`${name}은 ${age}살 입니다`)
    }
}
    let stu1 = new Stu('선민', 27)
    let stu2 = new Stu('승은', 25)
    let stu3 = Stu('주은', 26) //Stu 앞에 new를 안 붙이면 Stu 함수를 사용하기는 하는데 리턴값이 없다.
    let stu4 = new Stu('유주', 4)

    stu4.showInfo()

    console.log(stu1,stu2,stu3,stu4)




    //반복문은 for문 괄호 밖에 조건이 있어야함.
    let a = ['선민','승은','주은','유주','수호','지호','승호','로라'];

    for (let i = 0; i < a.length; i++){ //헷갈리는데 i는 0이고, i가 let a 배열의 길이보다 작을 때 i는 1씩 증가한다.
        console.log(a[i]);  //i의 초기값은 0이고 배열의 길이는 1부터 시작하니 배열의 모든 요소를 출력한다.
    }
