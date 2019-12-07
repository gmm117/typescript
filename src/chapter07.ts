function add(x: number, y: number): number {
    return x + y;
}

// add(1, "2"); // 호출이 불가능하다.

const reulst = add(1, 2);

// name? optional parameter 정의 가능
// name? string = "-" 기본값 설정가능
function buildUserInfo(name: string = "-", email: string = "-") {
    return {name, email};
}

const user = buildUserInfo();

const add2 = (a: number, b: number) : number => a + b;

console.log(add2(1, 2));

// function overloading
function add3(a: number, b: number) : number;
function add3(a: string, b: string) : string;
function add3(a: any, b: any) : any {
    console.log(a + b);
}

//const sum = add3({}, {});


