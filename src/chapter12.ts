// 타입 별칭

interface User {
    name : string;
}

interface Action {
    do() : void;
}

// intersection
type UserAction = User & Action;

function createUserAction1() : UserAction {
    return {
        do() {},
        name : ''
    };
}

type StringOrNumber = string | number;
type arr<T> = T[];
type P<T> = Promise<T>;

type User2 = {
    name : string;
    login() : boolean;
}

class UserImpl implements User2 {
    name : string;
    login() : boolean {
        throw new Error('Method not implements');
    }
}

type UserState = "PENDING" | "APPROVED" | "REJECTED";

function checkUser(User2 : User2) : UserState {
    if(User2.login()) {
        return "APPROVED";
    } else {
        return "REJECTED";
    }
}