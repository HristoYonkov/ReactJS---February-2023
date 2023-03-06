export const getAll = async () => {
    const response = await fetch(`http://localhost:3005/api/users`)
    const result = await response.json();
    return result.users;
}

export const getOne = async (id) => {
    const response = await fetch(`http://localhost:3005/api/users/${id}`)
    const result = await response.json();
    return result.user;
}

export const create = async (userData) => {
    const response = await fetch(`http://localhost:3005/api/users`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(userData)
    })
    const result = await response.json();

    return result.user;
}