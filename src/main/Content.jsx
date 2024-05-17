import React from "react";


function Content(props){
    let todoClass;
    return(
        <main className="main">
            <section className="todo">
                <div className="todo-list">
                    <ul className="todo-items">
                    {props.todos.map((item, index) => (
                        <div className={item.favorite === true ? todoClass = 'todo-item selected' : todoClass = 'todo-item'} key={index}>
                            <button className="todo-favorite" onClick={() => props.addFavorite(index)}>&#9733;</button>
                            <li>{item.title}</li>
                            <button className="todo-delete" onClick={() => props.deleteTodo(index)}>&times;</button>
                        </div>
                    ))}
                    </ul>
                </div>
            </section>
        </main>
    )
}


export default Content;