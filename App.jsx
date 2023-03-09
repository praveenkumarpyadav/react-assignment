import React from 'react'
import Course from './json assignment/Course';
import JSON from "./json assignment/userdata.json"
import "./json assignment/global.css"

const App = () => {
  return (
    <Course payload={JSON}/>
  )
}

export default App;