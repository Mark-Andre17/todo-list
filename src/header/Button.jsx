import React from "react";


function Button(props){
    return(
        <button className="header-btn" onClick={props.addTodo}>добавить</button>
    )
}


export default Button;

