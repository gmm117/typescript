// 제네릭 개념
// 함수의 타입을 제네릭으로 지정해서 공통함수를 만들수 있도록 수정가능핟.
// createTuple2 타입지정안하더라도 인자의 특성에 따라서 정상적으로 할당은 된다.(명확하게 함수인자의 타입을 알아볼수 있음)

function createPromise<T>(x: T, timeout: number) {
    return new Promise<T>((resolve/*: (v:T) => void*/, reject) => {
        setTimeout(() => {
            resolve(x);
        }, timeout);
    });
}

createPromise<string>("hong", 100)
    .then(v => console.log(v));


function createTuple2<T, U>(v1 : T, v2: U) : [T, U] {
    return [v1, v2];
}

const t1 = createTuple2<string, number>("hong", 1234);
console.log(t1);

interface DB<T> {
    add(v: T): void;
    get(): T; 
}

class D<T> implements DB<T> {
    add(v: T) {
        throw new Error('error');
    }
    get() : T {
        throw new Error('error');
    }
}

interface JSONSerializer {
    serialize() : string;
}

// 제네릭 타입을 지정이 가능
class LocalDB<T extends JSONSerializer> implements DB<T> {
    constructor(private localStorageKey: string) {

    }
    add(v: T) {
        localStorage.setItem(this.localStorageKey, v.serialize());
    }
    get() : T {
        const v = localStorage.getItem(this.localStorageKey);
        return (v) ? JSON.parse(v) : null;
    }
}

interface User {name : string};

// const userDB = new LocalDB<User>('user');
// userDB.add({name : 'hong'});
// const addUSer = userDB.get();
// console.log(addUSer);

interface Vegitable {
    v: string;
}
interface Meat {
    m: string;
}

interface Cart2<T> {
    getItem() : T extends Vegitable ? Vegitable : Meat;
}

const cart1 : Cart2<Vegitable> = {
    getItem() {
        return {
            v: ''
        };
    }
}

cart1.getItem();



