import * as request from '../lib/request'


export const register = async (firstName, lastName, email, password, repeatPassword) => {
    const result = await request.post('/api/users/register', {
        firstName,
        lastName,
        email, 
        password,
        repeatPassword
    })

    return result;
}

export const login = async (email, password) => {
    const result = await request.post('/api/users/login', {
        email, 
        password,
    })

    return result;
}

export const logout = async () => {
    const result = await request.get('/api/users/logout')

    return result;
}