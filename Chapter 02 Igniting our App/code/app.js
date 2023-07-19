    // const heading= document.createElement('h1')
    // heading.innerHTML='Hello World'
    // const root=document.getElementById('root')
    // root.appendChild(heading)

    import React from "react"
    import  ReactDOM  from "react-dom/client"

    const heading1 = React.createElement('h1', {key:'hw'}, 'Hello World')
    const heading2 = React.createElement('h1', {key:'nr'}, 'Namaste React')
    const div = React.createElement('div', {
        style: {
            color: 'red'
        }, className: "nested-div"
    }, [heading1, heading2])

    //  console.log(heading) return object 
    // react create element always give objects
    const root = ReactDOM.createRoot(document.getElementById('root')) // Create Root element for the React DOM
    root.render(div)