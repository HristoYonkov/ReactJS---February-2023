import { useState, useEffect } from "react";

import * as userService from '../../services/userService';

import { userActions } from './UserListConstants';
import { UserDetails } from "./user-details/UserDetails";
import { UserEdit } from "./user-edit/UserEdit";
import { UserItem } from "./user-item/UserItem";
import { UserDelete } from "./user-delete/UserDelete";
import { UserCreate } from "./user-create/UserCreate";

export const UserList = () => {
    const [users, setUsers] = useState([]);
    const [action, setAction] = useState({ user: null, action: null });
    const [formValues, setFormValues] = useState({
        firstName: '',
        lastName: ''
    });
    const [formErrors, setFormErrors] = useState({
        firstName: '',
        lastName: ''
    });

    useEffect(() => {
        userService.getAll()
            .then(users => setUsers(users));
    }, []);

    const actionTypeHandler = (id, actionType) => {
        userService.getOne(id)
            .then(user => {
                setAction({
                    user,
                    action: actionType
                })
            });
    };

    const closeHandler = () => {
        setAction({ user: null, action: null });
    };

    const createHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const {
            firstName,
            lastName,
            email,
            imageUrl,
            phoneNumber,
            ...address
        } = Object.fromEntries(formData);

        const userData = {
            firstName,
            lastName,
            email,
            imageUrl,
            phoneNumber,
            address
        }
        userService.create(userData)
            .then(user => {
                setUsers(state => [...state, user])
                closeHandler();
            })
    }

    const editHandler = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const {
            firstName,
            lastName,
            email,
            imageUrl,
            phoneNumber,
            ...address
        } = Object.fromEntries(formData);

        const userData = {
            firstName,
            lastName,
            email,
            imageUrl,
            phoneNumber,
            address
        }
        userService.edit(userData, action.user._id)
            .then(user => {
                let newState = users.map((x) => {
                    if (x._id === user._id) {
                        return { ...user };
                    }
                    return x;
                });

                setUsers(newState);
                closeHandler();
            })
    }

    const delHandler = (id) => {
        userService.del(action.user._id)
            .then(user => {
                let newState = users.filter((x) => x._id !== user.userId);
                setUsers(newState);
                closeHandler();
            })
    }

    const onChangeHandler = (e) => {
        setFormValues(state => ({ ...state, [e.target.name]: e.target.value }))
    }

    const validateForm = (e) => {
        const value = e.target.value;
        const errors = {};
        if (e.target.name === 'firstName' && ((value.length > 0 && value.length < 3) || value.length > 20)) {
            errors.firstName = 'First name must be between 3 and 20 characters!';
        }

        if (e.target.name === 'lastName' && ((value.length > 0 && value.length < 3) || value.length > 20)) {
            errors.lastName = 'Last name must be between 3 and 20 characters!';
        }
        setFormErrors(errors);
    }

    return (
        <>
            <div className="table-wrapper">

                {/* Overlap Components!!! */}

                {action.action === userActions.details &&
                    <UserDetails
                        user={action.user}
                        closeHandler={closeHandler}
                    />
                }

                {action.action === userActions.edit &&
                    <UserEdit
                        user={action.user}
                        closeHandler={closeHandler}
                        editHandler={editHandler}
                    />
                }

                {action.action === userActions.delete &&
                    <UserDelete
                        user={action.user}
                        closeHandler={closeHandler}
                        delHandler={delHandler}
                    />
                }

                {action.action === userActions.add &&
                    <UserCreate
                        closeHandler={closeHandler}
                        createHandler={createHandler}
                        formValues={formValues}
                        onChangeHandler={onChangeHandler}
                        formErrors={formErrors}
                        validateForm={validateForm}
                    />
                }

                <table className="table">
                    <thead>
                        <tr>
                            <th>
                                Image
                            </th>
                            <th>
                                First name<svg aria-hidden="true" focusable="false" data-prefix="fas"
                                    data-icon="arrow-down" className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                    <path fill="currentColor"
                                        d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                    </path>
                                </svg>
                            </th>
                            <th>
                                Last name<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                                    className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512">
                                    <path fill="currentColor"
                                        d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                    </path>
                                </svg>
                            </th>
                            <th>
                                Email<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                                    className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512">
                                    <path fill="currentColor"
                                        d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                    </path>
                                </svg>
                            </th>
                            <th>
                                Phone<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                                    className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512">
                                    <path fill="currentColor"
                                        d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                    </path>
                                </svg>
                            </th>
                            <th>
                                Created
                                <svg aria-hidden="true" focusable="false" data-prefix="fas"
                                    data-icon="arrow-down" className="icon active-icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                    <path fill="currentColor"
                                        d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                    </path>
                                </svg>
                            </th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user =>
                            <tr key={user._id}>
                                <UserItem
                                    {...user}
                                    actionTypeHandler={actionTypeHandler}
                                />
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            <button className="btn-add btn" onClick={() => actionTypeHandler(null, userActions.add)}>Add new user</button>
        </>
    );
}