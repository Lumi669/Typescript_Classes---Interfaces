//define a type of functiton
//type AddFn = (a: number, b: number) => number;

//define/create a type of function with interface
interface AddFn {
  (a: number, b: number): number;
}

//create a new function which is of type AddFn
let add: AddFn;

//assign the new function
add = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Named {
  //after changing name in class Person to optional property
  //here in interface, the name property should also set
  //to optional, otherwise show error
  readonly name?: string;

  //set outputName as optional property
  outputName?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string;
  age = 30;

  constructor(a: number, n?: string) {
    //after changing name as an optional property
    if (n) {
      this.name = n;
    }

    //before changing name as an optional property
    // this.name = n;
    this.age = a;
  }

  greet(phrase: string) {
    if (this.name) {
      console.log(`${phrase} ${this.name}, I am ${this.age} years old.`);
    } else {
      console.log(`${phrase} I am ${this.age} years old.`);
    }
  }
}

//We can also set user1 type as Person
//let user1: Person;
let user1: Greetable;

user1 = new Person(40);
user1.greet("Hello, ");

//shows error too for type Cannot assign to 'name' because
//it is a read-only property.ts(2540)
//user1.name = "Hello";
