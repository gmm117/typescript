// index type
interface  Props {
    [key: string]: string; // string or number만 인덱스타입 지정가능 
}

const p: Props = {
    name: 'hong',
    a: 'd',
    b: 'e',
    c: '3',// 문자로만 가능 3
    3: '4' // 키가 string일 경우 숫자가 넣더라도 허용한다.
}

// 어떠한 키가 올지를 모를 경우 인덱스 타입지정가능

console.log(p.name);
console.log(p.c);
console.log(p.dfaa);

let keys : keyof Props;

interface  User1 {
    name : string;
    age : number;
    hello(msg : string) : void;
}

let keyOfUser : keyof User1; // 해당 인덱스가 어떤 키타입을 가지고 있는지 여부를 확인
keyOfUser = "age";
console.log(keyOfUser);

let helloMethod: User1["hello"];
console.log(helloMethod);
