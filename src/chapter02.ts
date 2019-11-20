var hello = "hello";
let hello2 = "hello2";
const hello3 = "hello3";

console.log(`1 : ${hello} 2 : ${hello2} 3 : ${hello3}`);

// es5 compile : tsc .\chapter02.ts
// es6문법을 그대로 둘경우 : tsc .\chapter02.ts target es6
// promise es5 compile 할경우 error 발생(promise es5 지원불가능)
// 컴파일옵션 --lib 라이브러리지정 : tsc .\chapter02.ts --lib es5,es2015.promise,es2015.Iterable,dom
// 컴파일러에게 es2015.promise가 있다고 지정해줬기때문에 컴파일이 되지만 해당 웹브라우져가 런타임시 해당 라이브러리가 없을경우 에러발생이 생길 수 있음
// es6 문법 사용시 tsc .\chapter02.ts --target es6 --lib es5,es2015.promise,es2015.Iterable,dom --module commonjs 
// nodejs에서는 es6 이상의 js 파일 지원을 풀 지원을 하지 않기 떄문에 module간의 import, export는 commonjs 사용하도록 해야지 node ~~.js 실행가능
// config 파일을 볼경우 tsc .\chapter02.ts --target es6 --lib es5,es2015.promise,es2015.Iterable,dom --module commonjs --showConfig
/*
{
    "compilerOptions": {
        "target": "es6",
        "lib": [
            "es5",
            "es2015.promise",
            "es2015.iterable",
            "dom"
        ],
        "module": "commonjs"
    },
    "files": [
        "./chapter02.ts"
    ]
}
*/

let timeoutPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("1 sec");
    }, 1000);
});

timeoutPromise.then(value => console.log(value));

import add from './chapterUtil02.js';

const value = add(1, 2);
console.log(value);

