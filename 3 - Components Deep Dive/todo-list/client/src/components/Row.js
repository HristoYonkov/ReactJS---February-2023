export default function Row({
    _id,
    text,
    isCompleted,
    changeStatus
}) {

    return (
        <tr className={isCompleted ? "todo is-completed" : "todo"}>
            <td>{text}</td>
            <td>{isCompleted ? "Completed" : "Not Completed"}</td>
            <td className="todo-action">
                <button onClick={() => changeStatus(_id)} className="btn todo-btn">Change status</button>
            </td>
        </tr>
    );
}