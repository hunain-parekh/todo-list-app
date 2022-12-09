import './add-item.css';

export function AddItem({addItem,handleAddFormView}){
    return(
        <div className='main-form'>
            <form onSubmit={(e)=> addItem(e)}>
            <div className='form-header'>
                ADD ITEM
                <i className="fa-solid fa-xmark" onClick={handleAddFormView}></i>
            </div>
                <div className='input-div'>
                    <label>Title:</label>
                    <input type="text" id='title' required></input>
                </div>
                <div className='input-div'>
                    <label>Description:</label>
                    <textarea id='desc' required></textarea>
                </div>
                <div className='input-div'>
                    <label>Due Date:</label>
                    <input type="date" id='due_date' required></input>
                </div>
                <div className='btn-div'>
                    <button type='submit'>Add Item</button>
                </div>
            </form>
        </div>
    );
}