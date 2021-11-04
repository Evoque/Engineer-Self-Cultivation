refer to: https://www.typescriptlang.org/docs/handbook/2/functions.html



#### `function type expression` similar to arrow functions

```typescript
function greeter(fn: (a: string) => void) {
    fn("Hello, World");
}
```



#### Call Signatures

In Javascript, functions can have properties in addition to being callable. However, the function type expression syntax doesn't allow for declaring properties. 

```typescript
type DescribableFunction = {
    description: string;
    // This is fucking different compared to `type expression`
    (someArg: number): boolean;
}
```



#### Construct Signatures

```typescript
type ReactConstructor = {
    new (s: string): SomeObject
}

// You can combine call and construct signatures in the same type arbitrarily
interface CallOrConstruct {
    new (s: string): Date;
    (n?: number): number;
}
```



#### Generic Functions

```typescript
function firstElement<T>(arr: T[]): T|undefined {
    return arr[0];
}
```



#### Inference

```typescript
function map<Input, Output>(arr: Input[], fn:(arg:Input) => Output): Output[] {
    return arr.map(func);
}
```



#### Constraints

```typescript
function longest<T extends { length: number }>(a: T, b: T) {
    return a.length + b.length;
}
```



> **Rule:** When possible, use the type parameter itself rather than constraining it.
>
> Always use as few type parameters as possible.
>
> `type parameters` are for relating the types of multiple values
>
> Always prefer parameters with `union types` instead of overloads when possible.



#### Declaring `this` in a Function

```typescript
interface DB {
    filterUsers(filter: (this: User) => boolean): User[];
}
```



In TypeScript, `void` is not the same as `undefined`.

`object` is not `Object`. Always use object.

function types are considered to be `object`s in TypeScript.



#### `unknown`

The `unknown` type represents any value. This is similar to the `any` type, but is safer because it's not legal to do anything with an `unknown` value: 

```typescript
function f1(a: any) {
    a.b(); // OK
}
function f2(a: unknown) {
    a.b();
    // Error: Object is of type 'unknown'.
}
```

Typescript doesn't allow you to use an unknown type before casting it.























