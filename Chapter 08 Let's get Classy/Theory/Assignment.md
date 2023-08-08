Q. How do you create `Nested Routes` react-router-dom cofiguration
A. To create Nested routing we have to make children of children 
```javascript
{
    path:'/',
    element:<Outlet/>,
    chilren:[
        {
            path:'/contact',
            element:<Contact/>
        },{
            path:'/about',
            element:<About/>,
            children:[{
                path:'profile', // without '/' because means from the Root i.e localhost/profile  
                element:<Profile/>
            }]
        }
        ]
}
```
`Children are always render in Outlet component.`
`Outlet Component should be in parent conponent.`

Q. What is the order of `life cycle method` calls in Class Based Components.
A. The order of life cycle method calls in class based component is constructor is called first then the render method which is the initial render and next componentDidMount called after the initial render after this componentDidUpdate called after every re-render after this componentWillUnmount called before the unmounting of component.
```constructor --> render --> componentDidMount --> componentDidUpdate --> componentWillUnmount ```

Q. Why do we use `componentDidMount`?
A. The `componentDidMount()` method allows us to execute the React code when the component is already placed in the DOM (Document Object Model). This method is called during the Mounting phase of the React Life-cycle i.e after the component is rendered. Wwe can run any piece of react code to modify the components. For ex. It's the best place to make `API calls`.

Q. Why do we use componentWillUnmount? Show with example
A. `componentWillUnmount()` is useful for the cleanup of the application when we switch routes from one place to another. Since we are working with a SPA(Single Page Application) the component process always runs in the background even if we switch to another route. So it is required to stop those processes before leaving the page. If we revisit the same page, a new process starts that affects the browser performance. For example, in Repo class, during `componentDidMount()` a timer is set with an interval of every one second to print in console. When the component is unmounted (users moves to a different page), the timer will be running in the background, which we might not even realize and causing huge performance issue. To avoid such situations the cleanup function can be done in componentWillUnmount, in this example clearInterval(timer) to clear the timer interval before unmounting Repo component.


 
