import './add-item.css';

export function AddItem({addItem}){
    return(
        <div className='main-form'>
            <form onSubmit={(e)=> addItem(e)}>
            <div className='form-header'>
                ADD ITEM
            </div>
                <div className='input-div'>
                    <label>Title:</label>
                    <input type="text" id='title'></input>
                </div>
                <div className='input-div'>
                    <label>Description:</label>
                    <textarea id='desc'></textarea>
                </div>
                <div className='input-div'>
                    <label>Due Date:</label>
                    <input type="date" id='due_date'></input>
                </div>
                <div className='btn-div'>
                    <button type='submit'>Add Item</button>
                </div>
            </form>
        </div>
    );
}