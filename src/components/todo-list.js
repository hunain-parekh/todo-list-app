import { TodoItem } from "./todo-item";
import './todo-list.css';

export function TodoList(){
    const list = [{
        title:"my item 1",
        desc : "this is my item 2 desc",
        due_date : "12-10-2022"
    },{
        title:"my item 2",
        desc : "this is my item 2 desc",
        due_date : "12-10-2022"
    }];
    const todo_list = list.map(item=> <TodoItem id={item} title={item.title} desc={item.desc} due_date={item.due_date}/>);
    return(
        <div className="list">
            <div className="list-header">
               <h3>TODO LIST</h3>
            </div>
            <ul className="todo-list">
            {todo_list}
            </ul>
            <button className="add-btn">Add Item</button>
        </div>
    );
}