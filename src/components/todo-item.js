function TodoItem(props){
    return(
        <>
            <li key={props.id}>
                <h5>{props.title}</h5>
                <p>{props.desc}</p>
                <p>{props.due_date}</p>
            </li>
        </>
    );
}