// Intersection & Union Types

interface User {
    name : string;
}

interface Action {
    do() : void;
}

// 기존타입을 활용해서 처리할 경우 Intersection 을 통해서 처리가능하다.
function createUserAction11(u: User, a: Action): User & Action {
    return {...u, ...a};
}

const ua = createUserAction11({name :'hong'}, {do() {}});
console.log(ua);

function isAction(v: User | Action) : v is Action {
    return (<Action>v).do !== undefined; // type assertion
}

function process(v: User | Action) {
    if(isAction(v)) {
        v.do();
    } else {
        console.log(v.name);
    }
}

// Union Types
function compare(x: string | number, y: string | number) {
    if(typeof x === 'number' && typeof y === 'number') {
        return x === y ? 0 : x > y ? 1 : -1;
    } else if(typeof x === 'string' && typeof y === 'string') {
        return x.localeCompare(y);
    } 

    throw Error('not supported type');
}

// 타입에 대한 명확한 처리를 위해서는 함수오버로딩을 통해서 처리를 하면 된다.
function compare1(x: string, y: string) : number;
function compare1(x: number, y: number) : number;
function compare1(x: string | number, y: string | number) : number {
    if(typeof x === 'number' && typeof y === 'number') {
        return x === y ? 0 : x > y ? 1 : -1;
    } else if(typeof x === 'string' && typeof y === 'string') {
        return x.localeCompare(y);
    } 

    throw Error('not supported type');
}

const result = compare1(3, 1);
console.log(result);
console.log([3, 2, 1].sort(compare1));

