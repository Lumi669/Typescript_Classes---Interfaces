type Greetable = {
  readonly name: string;

  greet(phrase: string): void;
};

class Person implements Greetable {
  name: string;
  age = 30;

  constructor(n: string, a: number) {
    this.name = n;
    this.age = a;
  }

  greet(phrase: string) {
    console.log(`${phrase} ${this.name}, I am ${this.age} years old.`);
  }
}

//We can also set user1 type as Person
//let user1: Person;
let user1: Greetable;

user1 = new Person("Rose", 20);
user1.greet("Hello, I am your friend");

//shows error too for type Cannot assign to 'name' because
//it is a read-only property.ts(2540)
user1.name = "Hello";
