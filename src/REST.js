const baseUrl = 'https://uxcandy.com/~shapoval/test-task-backend/v2';

export const getAllTasks = async url => {
    return await fetch(url)
    .then(response => response.json())
    .catch(err => console.error('ERROR', err))
}

export const addTask = async formData => {
    return await fetch(baseUrl+'/create?developer=aleksey', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .catch(err => console.error('ERROR', err))
}

export const logIn = async formData => {
    return await fetch(baseUrl+'/login?developer=aleksey', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .catch(err => console.error('ERROR', err))
}

export const editTask = async (formData, id) => {
    return await fetch(baseUrl+`/edit/${id}?developer=aleksey`, {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .catch(err => console.error('ERROR', err))
}