import { useState } from "react";
import { AddItem } from "./add-item";
import { TodoItem } from "./todo-item";
import './todo-list.css';

export function TodoList(){
    
    const [viewAddForm,SetViewAddForm] = useState(false);
    const [todoList,setTodoList] = useState([]);
    const [key,SetKey] = useState(1);

    function handleAddFormView(){
        viewAddForm ? SetViewAddForm(false) : SetViewAddForm(true);
    }

    function handleAddItem(e){
        e.preventDefault();
        setTodoList(prevDate => [...prevDate,{
            id: key,
            title: e.target.title.value,
            desc : e.target.desc.value,
            due_date : e.target.due_date.value
        }]);
        SetViewAddForm(false);
        SetKey(prevKey=> prevKey+1);
    }

    function handleEditItem(e){
        let i = todoList.findIndex(item => item.id === parseInt(e.target.id.value));
        todoList[i].title = e.target.title.value;
        todoList[i].desc = e.target.desc.value;
        todoList[i].due_date = e.target.due_date.value;
        setTodoList([...todoList]);
    }

    function handleDeleteItem(id){
        setTodoList([...todoList.filter(item => item.id !== id)]);
    }

    const todo_list = todoList.map(item=> <TodoItem key={item.id} id={item.id} title={item.title} desc={item.desc} due_date={item.due_date} deleteItem={handleDeleteItem} editItem={handleEditItem}/>);
    return(
        <>
            {viewAddForm ? <AddItem addItem={handleAddItem} handleAddFormView={handleAddFormView}></AddItem> : null}
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