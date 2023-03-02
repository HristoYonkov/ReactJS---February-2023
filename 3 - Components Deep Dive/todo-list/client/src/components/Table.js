import Row from "./Row";

export default function Table({ todos, changeStatus, deleteList }) {

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

                {todos.map(x =>
                    <Row key={x._id} {...x} changeStatus={changeStatus} deleteList={deleteList} />
                )}

            </tbody>
        </table>
    );
}