import React from "react";
import Button from "./Button";


function Form(props) {
    return(
        <div>
            <form className="header-form">
                <input type="text" placeholder="Введите текст" value={props.text} onChange={(event) => props.setText(event.target.value)}/>
                <Button addTodo={props.addTodo}/>
            </form>
        </div>
    )
}


export default Form;