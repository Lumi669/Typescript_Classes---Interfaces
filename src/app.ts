interface Named {
  readonly name: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  //If comment out Line12, it shows error, Line9 error is:
  //"Class 'Person' incorrectly implements interface 'Greetable'.
  //Property 'name' is missing in type 'Person' but
  //required in type 'Greetable'.ts(2420)""
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
user1.greet("Hello, ");

//shows error too for type Cannot assign to 'name' because
//it is a read-only property.ts(2540)
//user1.name = "Hello";
