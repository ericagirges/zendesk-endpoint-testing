const getUsers = {
    url: 'http://localhost:3000/users',
    headers: {"Authorization": "Bearer PyOAYC3N62gqpf"},
    type: 'GET',
    dataType: 'json'
};

const createUser = {
    url: 'http://localhost:3000/users',
    type: 'POST',
    dataType: 'json'
};

const deleteUser = {
    url: 'http://localhost:3000/users',
    type: 'DELETE',
    dataType: 'json'
}

export {
    getUsers,
    createUser,
    deleteUser
}