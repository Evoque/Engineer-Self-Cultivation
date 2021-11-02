

// The `greeter` object can log to a file or display an alert. You can provide LogOptions to `.log(...)` and alert options to `.alert(...)`

class Greeter {
  constructor(name: string) {}

  log(ops: any) {}
  alert(ops: any) {}
}


const g = new Greeter("Hello");
g.log({ verbose: true });
g.alert({ modal: false, title: 'Current Greeting' });

// Declaration: Use namespaces to organize types.
declare namespace GreetingLib {
  interface LogOptions {
    verbose?: boolean;
  }

  interface AlertOptions {
    modal: boolean;
    title?: string;
    color?: string;
  }
}


// => https://www.typescriptlang.org/docs/handbook/declaration-files/by-example.html
// Objects with Properties
let result = myLib.makeGreeting("hello, world");
console.log("The computed greeting is:" + result);
let count = myLib.numberOfGreetings;

declare namespace myLib {
  function makeGreeting(s: string): string;
  let numberOfGreetings: number;
}
// Overloaded Functions
type Widget = any;

let x: Widget = getWidget(43);
let arr: Widget[] = getWidget("all of them");

declare function getWidget(n: number): Widget;
declare function getWidget(s: string): Widget[];
// Reusable Types(Interfaces)
// Reusable Types(Type Aliases)
// Organizing Types
// Classes
declare class Greeter1 {
  constructor(greeting: string);
  greeting: string;
  showGreeting(): void;
}
// Global Variables
declare const  foo: number;

// Global Functions
declare function greet(greeting: string): void;
