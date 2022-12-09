import './todo-item.css';


export function TodoItem(props){
    return(
        <>
            <li key={props.id} className="todo-item">
                <h5>{props.title}</h5>
                <p>{props.desc}</p>
                <p>{props.due_date}</p>
            </li>
        </>
    );
}