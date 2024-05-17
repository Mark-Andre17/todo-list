import React from "react";
import Header from './header/Header';
import Content from './main/Content';
import { useState } from 'react';


function App() {

  const initArray = [
    {favorite: false, title: 'купить машину'},
    {favorite: true, title: 'купить бананы'},
    {favorite: false, title: 'купить яблоки'},
    {favorite: false, title: 'купить квартиру'},
    {favorite: false, title: 'купить самолет'},
  ]

  const [text, setText] = useState('');

  const [todos, setTodo] = useState(initArray);

  const deleteTodo = (deleteIndex) => {
    const filterTodo = todos.filter((item,index) => {
      if(deleteIndex === index){
        return false;
      }
      return true;
    })
    setTodo(filterTodo);
  }

  const addFavorite = (favoriteIndex) => {
    const filterTodo = todos.map((item, index) => {
      if(favoriteIndex === index){
      return {
        ...item,
        favorite: !item.favorite
        }
      }
      return item;
    })
    setTodo(filterTodo);
  }

  const todo = todos.map((item) => item.title)

  const addTodo = (e) => {
    e.preventDefault();
    if (text === '') return alert('Задачи нет, строка не должна быть пустой');
    else if (todo.includes(text.toLowerCase())) return alert('Такая задача уже есть'), setText('');
        setTodo([
          {
            favorite: false,
            title: text
          },
          ...todos
        ])
        setText('');
  }


  return (
    <div className="App">
        <Header text={text} setText={setText} addTodo={addTodo} todos={todos}/>
        <Content deleteTodo={deleteTodo} addFavorite={addFavorite} todos={todos}/>
    </div>
  );
}

export default App;
