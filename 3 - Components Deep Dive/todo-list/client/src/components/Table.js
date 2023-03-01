export default function Table() {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th className="table-header-task">Task</th>
                    <th className="table-header-status">Status</th>
                    <th className="table-header-action">Action</th>
                </tr>
            </thead>
            <tbody>

                {/* <!-- Todo item --> */}
                <tr className="todo is-completed">
                    <td>Give dog a bath</td>
                    <td>Complete</td>
                    <td className="todo-action">
                        <button className="btn todo-btn">Change status</button>
                    </td>
                </tr>

                {/* <!-- Todo item --> */}
                <tr className="todo is-completed">
                    <td>Do laundry</td>
                    <td>Complete</td>
                    <td className="todo-action">
                        <button className="btn todo-btn">Change status</button>
                    </td>
                </tr>

                {/* <!-- Todo item --> */}
                <tr className="todo">
                    <td>Vacuum floor</td>
                    <td>Incomplete</td>
                    <td className="todo-action">
                        <button className="btn todo-btn">Change status</button>
                    </td>
                </tr>

                {/* <!-- Todo item --> */}
                <tr className="todo is-completed">
                    <td>Feed cat</td>
                    <td>Complete</td>
                    <td className="todo-action">
                        <button className="btn todo-btn">Change status</button>
                    </td>
                </tr>

                {/* <!-- Todo item --> */}
                <tr className="todo">
                    <td>Change light bulbs</td>
                    <td>Incomplete</td>
                    <td className="todo-action">
                        <button className="btn todo-btn">Change status</button>
                    </td>
                </tr>

                {/* <!-- Todo item --> */}
                <tr className="todo is-completed">
                    <td>Feed cat</td>
                    <td>Complete</td>
                    <td className="todo-action">
                        <button className="btn todo-btn">Change status</button>
                    </td>
                </tr>

                {/* <!-- Todo item --> */}
                <tr className="todo">
                    <td>Change light bulbs</td>
                    <td>Incomplete</td>
                    <td className="todo-action">
                        <button className="btn todo-btn">Change status</button>
                    </td>
                </tr>

                {/* <!-- Todo item --> */}
                <tr className="todo is-completed">
                    <td>Go to Store</td>
                    <td>Completed</td>
                    <td className="todo-action">
                        <button className="btn todo-btn">Change status</button>
                    </td>
                </tr>

                {/* <!-- Todo item --> */}
                <tr className="todo">
                    <td>Fill gas tank</td>
                    <td>Incomplete</td>
                    <td className="todo-action">
                        <button className="btn todo-btn">Change status</button>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}