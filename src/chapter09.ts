// class 

interface User {
    name : string;
}

interface Product {
    id : string;
    price : number;
}

interface Store {
    id : string,
    product : Product;
}

class Cart {
    // protected user: User;
    // private store : object; // 접근제한자 선언가능(private,public,protected)
    constructor(protected user: User, private store?: Store) { // protected 인자로 받을 시 protected user/this.user = user 생략가능
        // this.user = user;
        // this.store = {};
    }
    put(id: string, product: Product) {
        this.store = {
            id,
            product
        };
    }
    get(id:string) {
        return this.store.id === id ? this.store : undefined;
    }
}

class PromotionCart extends Cart {
    addPromotion() {
        console.log(this.user);
    }
}

const cartJohn = new Cart({name : 'john'});
cartJohn.put("1", {id : "123", price: 3333});
console.log(cartJohn.get("1"));


const cartjay = new Cart({name : 'jay'});


interface Person {
    name : string;
    say(message: string) : void;
}

interface Programmer {
    writeCode(requirement: string): string;
}

class KoreanProgrammer implements Person, Programmer {
    constructor(public name: string) {

    }
    say(message: string) : void {
        console.log(message);
    }
    writeCode(requirement: string): string {
        console.log(requirement);
        return requirement + '......';
    }
}

const jay = new KoreanProgrammer('jay');
jay.say('hi');

// 추상클래스
abstract class Koeran implements Person {
    public abstract jumin: number;

    constructor(public name:string) {
        
    }
    say(message: string) : void {
        console.log(message);
    }
    abstract loveKimchi() : void;
}

// 추상클래스이므로 자식클래스에서 상속을 받아줘야지 사용이 가능
// const kor = new Koeran("1");

class KoreanProgrammer1 extends Koeran implements Programmer {
    constructor(public name: string, public jumin: number) {
        super(name);
    }
    say(message: string) : void {
        console.log(message);
    }
    writeCode(requirement: string): string {
        console.log(requirement);
        return requirement + '......';
    }
    loveKimchi() : void {
        console.log('i love Kimchi');
    }
}

const hong = new KoreanProgrammer1('hong', 841030);
hong.loveKimchi();