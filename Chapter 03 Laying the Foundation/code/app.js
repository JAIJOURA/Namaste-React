import React from 'react'
import ReactDOM from 'react-dom/client'

//  const heading1= React.createElement('h1',{key:'hw'},'Hello World')
//  const heading2= React.createElement('h1',{key:'nr'},'Namaste React')
//  const heading3= React.createElement('h1',{key:'j'},'Jod!!')

// const div= React.createElement('div',{style:{
//     color:'red'} , className:"nested-div"},[heading1,heading2,heading3])
// const div = (
//     <div style={{color:'red'}}>
//         <h1>Jai</h1>
//         <h1>Jai</h1>
//         <h1>Jai</h1>
//     </div>
//  )
const heading = ()=>(
    <div>
            <h1>Jaiii</h1>
            <h1>Jaiii</h1>
            <h1>Jaiii</h1>
            </div>
)
const Divv = ()=>{
    return (
        <div className='jai'>
            {heading()}
            <h1>JOODDDD!!!</h1>
            <h1>JOODDDD!!!</h1>
            <h1>JOODDDD!!!</h1>
            </div>
    )
}

const Heading =()=>(
    <div className='flex'> 
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxzdnx_hf5GQJEpX97mkOOzQCTQ0gwTc1TUA&usqp=CAU" alt="logo" />
<img src="https://t3.ftcdn.net/jpg/05/17/79/88/360_F_517798849_WuXhHTpg2djTbfNf0FQAjzFEoluHpnct.jpg" alt="" />
     </div>
)


//  console.log(heading) return object 
// react create element always give objects
const root = ReactDOM.createRoot(document.getElementById('root')) // Create Root element for the React DOM
root.render(<Heading/>);