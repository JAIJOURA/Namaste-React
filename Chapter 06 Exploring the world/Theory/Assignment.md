Q. What is Microservice?
A. Microservices are an architectural and organizational approach to software development where software is composed of small independent services that communicate over well-defined APIs. These services are owned by small, self-contained teams.

Microservices architectures make applications easier to scale and faster to develop, enabling innovation and accelerating time-to-market for new features.

Q. What is Monolith architecture?
A. A monolithic architecture is the traditional unified model for the design of a software program. Monolithic, in this context, means "composed all in one piece." According to the Cambridge dictionary, the adjective monolithic also means both "too large" and "unable to be changed."

Q. What is the difference between Monolith and Microservice?
A. A monolithic application runs on a single server, but microservices applications benefit more from the cloud environment.

Q. Why do we need a useEffect Hook?
A. The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments. The second argument is optional.

Q. What is Optional Chaining?
A. The optional chaining (?.) operator accesses an object's property or calls a function. If the object accessed or function called using this operator is undefined or null, the expression short circuits and evaluates to undefined instead of throwing an error.

Q. What is Shimmer UI?
A. A shimmer UI is a version of the UI that doesn't contain actual content, but instead mimics the layout and shapes of the content that will eventually appear.

Q. What is the difference between JS expression and JS statement?
A. Expressions are unique in meaning, while statements are two-sided in execution. For example, 1 has a certain value while go( ) may be executed or not.

Statements are the whole structure, while expressions are the building blocks. For example, a line or a block of code is a statement.

Q. What is Conditional Rendering, explain with a code example
A. Conditional rendering is a powerful tool for creating dynamic and engaging user interfaces in React applications.

You can use it to control what content is rendered and when, and it improves user experience, simplifies your code, and helps you create more flexible and adaptable components.

```
 # Code

```

Q. What is CORS?
A. Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.

Q. What is async and await?
A. Async: It simply allows us to write promises-based code as if it was synchronous and it checks that we are not breaking the execution thread. It operates asynchronously via the event loop. Async functions will always return a value. It makes sure that a promise is returned and if it is not returned then JavaScript automatically wraps it in a promise which is resolved with its value.

Await: Await function is used to wait for the promise. It could be used within the async block only. It makes the code wait until the promise returns a result. It only makes the async block wait.

Q. What is the use of `const json = await data.json();` in getRestaurant().
A.  The data object, returned by the await fetch(), is a generic placeholder for multiple data formats. so we can extract the JSON object from a fetch response by using await data.json(). data.json() is a method on the data object that lets you extract a JSON object from the data or response. The method returns a promise because we have used await keyword. so data.json() returns a promise resolved to a JSON object.