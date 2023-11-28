import * as request from '../lib/request'


export const register = async (email, password, repeatPassword) => {
    const result = await request.post('/api/users/register', {
        email, 
        password,
        repeatPassword
    })

    console.log(result) 

    return result;
}