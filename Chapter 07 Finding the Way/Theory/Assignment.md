Q. What are various ways to add images into our App? Explain with code example.
A. There are several ways to add images into our App :-
1. Images in the src Folder
```javascipt
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

