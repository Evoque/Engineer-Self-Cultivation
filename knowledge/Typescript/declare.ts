

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

