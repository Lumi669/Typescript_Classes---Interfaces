interface Person {
  name: string;
  age: number;

  greet(phrase: string): void;
}

let user1: Person;

user1 = {
  name: "rose",
  age: 30,
  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  },
};

//call greet
user1.greet("Hi there, ");
