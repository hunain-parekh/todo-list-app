import './todo-item.css';


export function TodoItem(props){
    return(
        <>
            <li className="todo-item">
                <div className='item-header'>
                    <i className="fa-regular fa-pen-to-square"></i>
                    <i className="fa-sharp fa-solid fa-trash" onClick={()=> {props.deleteItem(props.id)}}></i>
                </div>
                <h5>{props.title}</h5>
                <p className='desc'>{props.desc}</p>
                <p className='due-date'>Due Date: {props.due_date}</p>
            </li>
        </>
    );
}