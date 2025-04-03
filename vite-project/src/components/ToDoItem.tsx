import React from "react";
import "./item.css"
interface ToDoItemProps{
    todo: string;
    onDelete: ()=> void;
}
const ToDoItem = React.memo(({todo, onDelete}: ToDoItemProps)=>{
    console.log(`Render: ${todo}`);
    return(
        <li>
            {todo}<button className="itembutton" onClick={onDelete}>Sil</button>
        </li>
    )
})
export default ToDoItem;