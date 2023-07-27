Q. What is the difference between Named Export, Default Export and * as Export?
A. ES6 provides us to import & export a module and use it in other files. ES6 provides two ways to export a module from a file: named export and default export. In Named export, one can have multiple named exports per file. Then import the specific exports they want surrounded in {} braces. The name of imported module has to be the same as the name of the exported module. In Named export, the component is exported from MyComponent.js file like:
```
export const MyComponent = () => {}
export const MyComponent2 = () => {}
``` 
and the component is imported from MyComponent.js file like: here we must use `{}` in MyComponent.
```
// ex. importing a single named export
import { MyComponent } from "./MyComponent";

// ex. importing multiple named exports
import { MyComponent, MyComponent2 } from "./MyComponent";

// ex. giving a named import a different name by using "as":
import { MyComponent2 as MyNewComponent } from "./MyComponent";
```

In `Default export`, One can have only one default export per file. The naming of import is completely independent in default export and we can use any name we like.
In `Default export`, the component is exported from MyComponent.js file like:
```
const MyComponent = () => {}
export default MyComponent;
```
and the component is imported from MyComponent.js file like: here we must omit `{}` in MyComponent.
```
import MyComponent from "./MyComponent";
```

In `* as export`, it is used to import the whole module as a component and access the components inside the module.
In `* as export`, the component is exported from MyComponent.js file like:
```
export const MyComponent = () => {}
export const MyComponent2 = () => {}
export const MyComponent3 = () => {}
``` 
and the component is imported from MyComponent.js file like:
```
import * as MainComponents from "./MyComponent";
```
Now we can use them in JSX as:
```
<MainComponents.MyComponent />
<MainComponents.MyComponent2 />
<MainComponents.MyComponent3 />
```
We can use `Named export` and `Default export` together. So you should export like:
```
export const MyComponent2 = () => {}
const MyComponent = () => {}
export default MyComponent;
```
and import like:
```
import MyComponent, {MyComponent2} from "./MyComponent";
```

Q. What is the importance of config.js file?
A. Config.js allows developers to configure their applications in an XML block instead of hard coding values inside their scripts or in JSON objects

Q. What are `React Hooks`?
A. React Hooks are simple Js functions that we can use to isolate the reusable part from a functional component. Hooks can be stateful and can manage side-effects.

#React provides a bunch of standard in built hooks:
useState: To manages States.Returns a statefull value and an updater function to update it.

useEffect: To manage side-effects like API calls,subscriptions, timers, mutations, and more.

useContext: To return the current value for a context.

useReducer: A useState alternative to help with complex state management.

useCallback: It returns a memorized version of a callback to help a child component not re-render unnecessarily.

useMeno: It returns a memoized value that helps in performace optimizations.

useRef: It return a ref object with a .current property. The ref object is mutable. It is mainly used to access a child component imperatively.

useLayoutEffect: It fires at the end of all DOM mutations. It's best  to use useEffect as much as possible over the one as the useLayoutEffect fires synchronously.

useDebugValue: Helps to Display a label in React DevTools for the custon hooks.

Q. Why do we need a useState Hook?
A. The React useState Hook allows you to have state variables in functional componemts. You pass the initial state to this function, and it returns a varible with the current state value and another function to update this value.
