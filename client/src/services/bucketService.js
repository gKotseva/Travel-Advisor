import * as request from '../lib/request'

export const getAllItems = async () => {
    const result = await request.get('/api/bucket/all')

    return result;
}

export const addToBucket = async(data) => {
    const result = await request.post(`/api/bucket/add`, data)

    return result
}