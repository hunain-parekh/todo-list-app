import { useState } from 'react';
import './edit-item.css';

export function EditItem({editItem,title,desc,due_date,id,handleEditFormView}){

    const [inputValues,setInputValues] = useState({
        title : title,
        desc : desc,
        due_date : due_date
    });

    function handleTitleInput(e){
        setInputValues(prevDate=>({
            title : e.target.value,
            desc: prevDate.desc,
            due_date : prevDate.due_date
        }));
    }

    function handleDescInput(e){
        setInputValues(prevDate=>({
            title : prevDate.title,
            desc: e.target.value,
            due_date : prevDate.due_date
        }));
    }

    function handleDateInput(e){
        setInputValues(prevDate=>({
            title : prevDate.title,
            desc: prevDate.desc,
            due_date : e.target.value
        }));
    }
    
    return(
        <div className='main-form'>
            <form onSubmit={(e)=> editItem(e)}>
            <div className='form-header'>
                EDIT ITEM
                <i className="fa-solid fa-xmark" onClick={handleEditFormView}></i>
            </div>
                <div className='input-div'>
                    <label>Title:</label>
                    <input type="text" id='title' onChange={handleTitleInput} value={inputValues.title} required></input>
                </div>
                <div className='input-div'>
                    <label>Description:</label>
                    <textarea id='desc' onChange={handleDescInput} value={inputValues.desc} required></textarea>
                </div>
                <div className='input-div'>
                    <label>Due Date:</label>
                    <input type="date" id='due_date' onChange={handleDateInput} value={inputValues.due_date} required></input>
                </div>
                <div className='btn-div'>
                    <input type="hidden" id='id' value={id}></input>
                    <button type='submit'>Edit Item</button>
                </div>
            </form>
        </div>
    );
}