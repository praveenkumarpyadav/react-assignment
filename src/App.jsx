import React from 'react'
import image from "./fz.jpg"
import Nav from './Nav';
import photo from "./royal.jpg"
import deer from "./nature.jpeg"

const App = () => {
  return (
    <><div>App</div>
    <h1>jspiders</h1>
    <img src={image} alt="text" />
    <Nav string="shankar" number={43000} boolean={true} empty={null} animal={deer} data={photo}/>
    {/* <img src={photo} alt="" /> */}
    <Nav username="mrutyunjaya"/>
       <Nav num={12}/>
    

    </>
    
  )
}

export default App;