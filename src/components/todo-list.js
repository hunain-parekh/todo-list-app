import { useState } from "react";
import { AddItem } from "./add-item";
import { TodoItem } from "./todo-item";
import './todo-list.css';

export function TodoList(){
    const [viewAddForm,SetViewAddForm] = useState(false);
    const [todoList,setTodoList] = useState([]);
    function handleAddFormView(){
        SetViewAddForm(true);
    }
    function handleAddItem(e){
        e.preventDefault();
        setTodoList(prevDate => [...prevDate,{
            title: e.target.title.value,
            desc : e.target.desc.value,
            due_date : e.target.due_date.value
        }]);
        SetViewAddForm(false);
    }
    const todo_list = todoList.map(item=> <TodoItem id={item} title={item.title} desc={item.desc} due_date={item.due_date}/>);
    return(
        <>
            {viewAddForm ? <AddItem addItem={handleAddItem}></AddItem> : null}
            <div className="list">
                <div className="list-header">
                <h3>TODO LIST</h3>
                </div>
                <ul className="todo-list">
                {todo_list}
                </ul>
                <button className="add-btn" onClick={handleAddFormView}>Add Item</button>
            </div>
        </>
    );
}