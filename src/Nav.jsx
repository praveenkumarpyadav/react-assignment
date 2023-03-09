import React from "react";


const Nav=(props)=>{
    return(
       <>
       <img src={props.data} alt="" height={100} width={100} />
       <h1>{props.string} {props.string} {props.number} {props.empty} {props.boolean} </h1>
       <img src={props.animal} alt="" />
       {/* <img src={props.data} alt="" /> */}
       <h2>{props.username}</h2>
       <h3>{props.num}</h3>
       </>
    )
}
export default Nav;