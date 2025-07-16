console.log("Hello");
console.log("Hello");
console.log("Hello");

const user: { name: string; age: number } = { name: "Igor", age: 30 };
function greet(person: { name: string; age: number }): string {
  return "Hello, " + person.name + "! You are " + person.age + " years old.";
}

const arr = [1, 2, 3, 4, 5];
arr.forEach((n) => {
  console.log(n);
});

const longString =
  "ThisIsAVeryLongStringThatExceedsThePrintWidthAndShouldBeWrappedByPrettierSoItLooksMuchBetterAndCleaner";

interface User {
  id: number;
  name: string;
  email?: string;
}

class UserService {
  public users: User[];
  constructor() {
    this.users = [];
  }

  addUser(user: User): void {
    this.users.push(user);
  }
}

console.log(greet(user));
