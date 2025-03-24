class Person {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    tellMyName(): void {
        console.log(`I am ${this.name}`);
    }

    tellMyAge(): void {
        console.log(`I am ${this.age} years old`);
    }
}

const john = new Person('John', 40);
const mary = new Person('Mary', 35);

john.tellMyName(); // I am John
john.tellMyAge();  // I am 40 years old

mary.tellMyName(); // I am Mary
mary.tellMyAge();  // I am 35 years old