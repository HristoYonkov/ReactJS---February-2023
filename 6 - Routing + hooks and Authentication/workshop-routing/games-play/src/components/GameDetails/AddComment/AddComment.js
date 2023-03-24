import { useForm } from "../../../hooks/useForm";


export const AddComment = ({
    onCommentSubmit,
}) => {
    const {values, changeHandler, onSubmit} = useForm({
        comment: '',

    }, onCommentSubmit);

    return (
        <article className="create-comment">
            {/* <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) --> */}
            <label>Add new comment:</label>
            <form className="form" onSubmit={onSubmit}>
                {/* <input type="text" name="username" placeholder='Пешо' value={username} onChange={(e) => setUsername(e.target.value)} /> */}
                <textarea name="comment" placeholder="Comment......" value={values.comment} onChange={changeHandler}></textarea>
                <input className="btn submit" type="submit" value="Add Comment" />
            </form>
        </article>
    );
}