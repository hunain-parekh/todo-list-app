import './todo-item.css';


export function TodoItem(props){
    return(
        <>

            <li key={props.id} className="todo-item">
                <div className='item-header'>
                    <i class="fa-regular fa-pen-to-square"></i>
                    <i class="fa-sharp fa-solid fa-trash"></i>
                </div>
                <h5>{props.title}</h5>
                <p className='desc'>{props.desc}</p>
                <p className='due-date'>{props.due_date}</p>
            </li>
        </>
    );
}