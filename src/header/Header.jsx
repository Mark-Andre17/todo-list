import React from "react";
import Form from "./Form";


function Header(props){
    return(
        <header className="header">
            <h1 className="header__title">Список дел</h1>
            <Form todos={props.todos} setText={props.setText} text={props.text} addTodo={props.addTodo}/>
        </header>
    )
}


export default Header;