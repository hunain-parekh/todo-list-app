import { useState } from "react";
import { AddItem } from "./add-item";
import { TodoItem } from "./todo-item";
import './todo-list.css';

export function TodoList(){
    
    const [viewAddForm,SetViewAddForm] = useState(false);
    const [todoList,setTodoList] = useState([]);
    const [key,SetKey] = useState(0);

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
        e.preventDefault();
        let index = e.target.id.value;
        let newList = todoList;
        newList[index].title = e.target.title.value;
        newList[index].desc = e.target.desc.value;
        newList[index].due_date = e.target.due_date.value;
        setTodoList([...newList]);
    }

    function handleDeleteItem(id){
        let newList = todoList;
        newList.forEach(e=>{
            if(e.id === id){
                let Index = newList.indexOf(e);
                newList.splice(Index,1);
            }
        });
        setTodoList([...newList]);
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