

`interface`s allow us to build up new types from other types by extending them. 

`intersection types` that is mainly used to combine existing object types. 



Type aliases and interfaces are very similar, and in many cases you can choose between them freely. Almost all features of an `interface` are available in `type`. the key distinction is that a type cannot be re-opened to add new properties vs an interface which is always extendable.

```typescript
// Adding new fields to an existing interface
interface Window {
  title: string
}

interface Window {
  ts: TypeScriptAPI
}

const src = 'const a = "Hello World"';
window.ts.transpileModule(src, {});


// A type cannot be changed after being created
type Window = {
  title: string
}

type Window = {
  ts: TypeScriptAPI
}

 // Error: Duplicate identifier 'Window'.
```

