// enum 타입
enum StarbucksGrade {
    WELCOME,
    GREEN,
    GOLD
}

function getDiscount(v: StarbucksGrade) : number {
    switch(v) {
        case StarbucksGrade.WELCOME:
            return 0;
        case StarbucksGrade.GREEN:
            return 5;
        case StarbucksGrade.GOLD:
            return 10;
    }
}

console.log(getDiscount(StarbucksGrade.GREEN));
console.log(StarbucksGrade);
console.log(StarbucksGrade[0]);