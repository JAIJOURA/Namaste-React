Q. Is JSX mandatory for React?
A. JSX is not requirement for React. Using React without JSX especially convenient when you don't want to set up compilation in your build environment.

Q. Is ES6 mandatory for React?
A. No. ES6 is not mandatory for React but it is highly recommendable.

Q. {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX.
A. {TitleComponent} is a JS expression or a JS element. 
{<TitleComponent/>} is a Function component or just a normal function
{<TitleComponent></TitleComponent>} this is equivalent only when {<TitleComponent/>} has no child components.
The opening and closing tags are created to include the child components.

Q. How can i Write comments in JSX?
A. {/*  */} - for single or multiline comments.

Q. What is <React.Fragment></React.Fragment> and <></>?
A. <React.Fragment></React.Fragment> is a feature in React that allows you to return multiple elements from a React component by allowing you to group a list of children without adding extra nodes to the DOM. <></> is the shorthand tag for React.Fragment. The only difference between them is that the shorthand version does not support the key attribute.

Q. What is Reconcilation in React?
A. Reconcilation is the process through which React updates the Broswer DOM and makes React work faster. React use a Diffing algorithm so that component updates are predictable and faster. React would first calculate the difference between the real DOM and the copy of DOM (Virtual DOM) when there's an update of components. React stores a copy of Browser DOM which is called Virtual DOM. When we make changes or add data, React creates a new Virtual DOM and compares it with the previous one. Comparison is done by Diffing Algorithm. React compares the Virtual DOM with Real DOM. It finds out the changed nodes and updates only the changed nodes in Real DOM leaving the rest nodes as it is. This process is called Reconciliation.

Q. What is React Fiber?
A. React Fiber is a concept of ReactJs that is used to render a system faster, smoother and smaller. The Fiber reconciler, which became the default reconciler for React 16 and above, is a complete rewrite of React’s reconciliation algorithm to solve some long-standing issues in React. Because Fiber is asynchronous, React can:

1. Pause, resume, and restart rendering work on components as new updates come in
2. Reuse previously completed work and even abort it if not needed
3. Split work into chunks and prioritize tasks based on importance

Q. Why do we need Keys in React?
A. A key is a special attribute you need to include when creating lists of elements in React. Keys are used in React to identify which items in the list are changed, updated, or deleted. In other words, we can say that keys are unique Identifier used to give an identity to the elements in the lists. Keys should be given to the elements within the array to give the elements a stable identity.

Q. Can we use index as keys in React?
A. Yes, we can use the index as keys, but it is not considered as a good practice to use them because if the order of items may change. This can negatively impact performance and may cause issues with component state. Keys are taken from each object which is being rendered. There might be a possibility that if we modify the incoming data react may render them in unusual order.

Q. What is props in React? Ways to
A. props stands for properties. Props are arguments passed into React components. props are used in React to pass data from one component to another (from a parent component to a child component(s)). They are useful when you want the flow of data in your app to be dynamic.

Q. What is Config Driven UI?
A. Config Driven UI are based on the configurations of the data application receives. It is rather a good practice to use config driven UIs to make application for dynamic. It is a very common & basic approach to interact with the User. It provides a generic interface to develop things which help your project scale well. It saves a lot of development time and effort. A typical login form, common in most of the Apps. Most of these forms also get frequent updates as the requirements increase in terms of Form Validations, dropdown options,.. or design changes.