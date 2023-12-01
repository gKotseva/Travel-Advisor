import * as request from '../lib/request'


export const register = async (email, password, repeatPassword) => {
    const result = await request.post('/api/users/register', {
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