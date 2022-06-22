//define a type of functiton
//type AddFn = (a: number, b: number) => number;

//define/create a type of function with interface
interface AddFn {
  (a: number, b: number): number;
}

//create a new function which is of type AddFn
let add: AddFn;

//assign the new function
add = (n1: string, n2: number) => {
  return n1 + n2;
};

interface Named {
  readonly name: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

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
user1.greet("Hello, ");

//shows error too for type Cannot assign to 'name' because
//it is a read-only property.ts(2540)
//user1.name = "Hello";
