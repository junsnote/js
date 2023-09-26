// 1. 콘솔에게 메시지를 보내는 법
// console.log(54545)

// 2. 변수 정의
// variable - 값을 저장하거나 유지하는 역할을 수행
// const - 상수로 절대 변하지 않는 수
// let - 변하는 수를 지정할 때 사용
// var - 어떠한 규칙도 가지지 않고 정의

/*
const a = 5;
const b = 2;
let myName = "junsnote";

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hello" + myName);let
*/

// 3. 논리 연산
// boolean - true | false
// false != null
// const amIFat = null;
// let something;
// console.log(something, amIFat);

// 4. 배열
// const mon = "mon";
// const tue = "tue";
// const wed = "wed";
// const thu = "thu";
// const fri = "fri";
// const sat = "sat";
// const sun = "sun";

/*
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];
// Get Item from Array
console.log(daysOfWeek);

// Add one more day to the Array
daysOfWeek.push("sun");
console.log(daysOfWeek);

const toBuy = ["potato", "tomato", "pizza"];
toBuy.push("kimbab");
console.log(toBuy[2]);
*/

const playerName = "jun";
const playerPoints = 121212;
const playerHandsome = false;
const playerFat = "little bit";

// player [0] == name
// player [1] == points
const player = {
    name:"jun",
    points: 10,
    fat: true,
};
console.log(player);
player.lastName = "potato";
player.points= player.points + 15;
console.log(player.points);

