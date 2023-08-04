Q. What are various ways to add images into our App? Explain with code example.
A. There are several ways to add images into our App :-
1. Images in the src Folder
```
import logo from './logo.svg'
<img src={logo} className="App-logo" alt="logo" />
```
2. Images in CSS
```
.logo{
    background-image:url(./logo.png);
}
```
3. Using `require()` function
In React, the `require()` function is available thanks to Node.js
```
function App() {
  return (
    <div>
        <img 
          src={require('./victor-grabarczyk-r02cXESP0aI-unsplash.jpg')} 
          alt="logo" 
        />
    </div>
  );
}

export default App;
```
4. Images in Public Folder.
```
img src="./logo.svg" className="App-logo" alt="logo" />
```
5. Images from HTTPS
```
<img src="https://images.unsplash.com/photo-1639577171043-....." alt="" />
```

Q. What would happen if we do console.log(useState())?
A. If we do console.log(`useState()`) it will give us an array of two `[undefined, ƒ]` where the first item in an array is `state` is `undefined` and second item in an array is `setState` `function` is bound dispatchSetState.

Q. How will useEffect behave if we don't add a dependency array ?
A. Syntax of `useEffect`
```
useEffect(()=>{},[])
```
When the `dependency array is not add to useEffect() Hook`, the callback function will be executed `every time` the component is rendered and re-rendered.
```
useEffect(() => {
	console.log("I run everytime this component rerenders")
});
``` 
Q. What is `SPA`?
A. `SPA(Single Page Applicaton)` is a web app implementation that loads only a single web document, and then updates the body content of that single document via JavaScript APIs such as XMLHttpRequest and Fetch when different content is to be shown.

Q. What is the difference between Client Side Routing and Server Side Routing?
A. In `Server-side routing or rendering (SSR)`, every change in URL, http request is made to server to fetch the webpage, and replace the current webpage with the older one.

In `Client-side routing or rendering (CSR)`, during the first load, the webapp is loaded from server to client, after which whenever there is a change in URL, the router library navigates the user to the new page without sending any request to backend. All` Single Page Applications` uses `client-side routing`.

