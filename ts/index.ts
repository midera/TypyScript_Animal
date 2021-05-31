import {Animal} from "./component/animal";

class Cat implements Animal {
    public movement: string;
    public says: string;

    constructor(movement, says) {
        this.movement = movement;
        this.says = says;
    }

    info(info: string) {
        console.log(info);
    }
}

class Bird implements Animal {
    public movement: string;
    public says: string;

    constructor(movement, says) {
        this.movement = movement;
        this.says = says;
    }

    info(info: string) {
        console.log(info);
    }
}

class Fish implements Animal {
    public movement: string;
    public says: string;

    constructor(movement, says) {
        this.movement = movement;
        this.says = says;
    }

    info(info: string) {
        console.log(info);
    }
}
let cat = new Cat('running','meow');
let bird = new Bird('fly', 'chirp');
let fish = new Fish('swim', 'splosh!');

cat.info('cat');
bird.info('bird');
fish.info('fish');

console.log(cat);
console.log(fish);
console.log(bird);



abstract class Shape {
    a:number;
    b:number;
    c:number;
    constructor(a:number,b:number,c?:number) {
        this.a=a;
        this.b=b;
        this.c=c;
    }
    perimeter() {
        console.log(this.a+this.b+this.c) ;
    }

    area() {

    }
}

class Triangle extends Shape{
    r:number;
    constructor(a,b,c,r) {
        super(a,b,c);
        this.r=r;
    }
    perimeter() {
        super.perimeter();
    }

    area() {
        console.log((this.a*this.b*this.c)/4*this.r);
    }
}


class Rectangle extends Shape{
    constructor(a,b) {
        super(a,b);
    }
    perimeter() {
        console.log((this.a+this.b)*2);
    }

    area() {
        console.log(this.a*this.b);
    }
}


let array=[new Triangle(20,8,10,12),new Rectangle(20,8)];
for (let i = 0; i < array.length; i++) {
    let a=array[i];
    a.area();
    a.perimeter();
}