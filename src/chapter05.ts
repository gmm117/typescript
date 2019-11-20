let numValue : number;
let stringValue : string;
let booleanValue : boolean;
let undefinedValue : undefined;
let nullValue : null;
let objValue : object;
let symbolValue : symbol;
let anyValue : any;

numValue = 3.3;
stringValue = "hello";
stringValue = 'hello';
stringValue = `
hello
${1+2}
`;
console.log(stringValue);

// null,undefine 하위타입은 상위타입에 값으로 세팅가능
// any 타입은 모든타입의 상위타입
booleanValue = true;
undefinedValue = null;
numValue = null;
numValue = undefined;

anyValue = 1;
anyValue = "3";
anyValue = null;
anyValue = {};

objValue = {name : 'jay'};
objValue = {};
objValue = new String('hello'); // 객체가 반환된다.

symbolValue = Symbol(); // Unique한 값이 리턴된다.
// {
//     symbolValue : 'hello'
// }

let nameList : string[];
// nameList = [1, 3]; (X)
nameList = ["1", "2"];
nameList.push("3");

let anyList : any[];
anyList = ["12", 3];

// 객체의 리터럴을 정의(property 리터럴 타입과 같이)
let user1: {name : string, score : number};
user1 = {name : 'hong', score : 100};

// 타입지정 배열
let tuple2: [number , string];
tuple2 = [1, "hong"];




// numValue = "3" (X)
// stringValue = 3 (X)
