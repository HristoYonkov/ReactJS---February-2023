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