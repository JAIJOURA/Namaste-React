import React from 'react'
import ReactDOM from 'react-dom/client'

 const heading1= React.createElement('h1',{key:'hw'},'Hello World')
 const heading2= React.createElement('h1',{key:'nr'},'Namaste React')
 const heading3= React.createElement('h1',{key:'j'},'Jod!!')

const div= React.createElement('div',{style:{
    color:'red'} , className:"nested-div"},[heading1,heading2,heading3])

//  console.log(heading) return object 
// react create element always give objects
const root = ReactDOM.createRoot(document.getElementById('root')) // Create Root element for the React DOM
root.render(div);