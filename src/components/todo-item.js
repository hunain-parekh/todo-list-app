import { EditItem } from './edit-item';
import { useState } from 'react';
import './todo-item.css';


export function TodoItem(props){

    const [viewEditForm,SetViewEditForm] = useState(false);

    function handleEditFormView(){
        viewEditForm ? SetViewEditForm(false) : SetViewEditForm(true);     
    }

    function sendDataToTodoList(e){
        props.editItem(e);
        SetViewEditForm(false);
    }

    return(
        <>
            {viewEditForm ? <EditItem title={props.title} desc={props.desc} due_date={props.due_date} id={props.id} editItem={sendDataToTodoList} handleEditFormView={handleEditFormView}/>  : null}
            <li className="todo-item">
                <div className='item-header'>
                    <i className="fa-regular fa-pen-to-square" onClick={handleEditFormView}></i>
                    <i className="fa-sharp fa-solid fa-trash" onClick={()=> {props.deleteItem(props.id)}}></i>
                </div>
                <h5>{props.title}</h5>
                <p className='desc'>{props.desc}</p>
                <p className='due-date'>Due Date: {props.due_date}</p>
            </li>
        </>
    );
}