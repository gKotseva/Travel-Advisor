import * as request from '../lib/request'

export const getAllItemsPerUser = async (email) => {
    const result = await request.post('/api/bucket/all', {email})

    return result;
}

export const addToBucket = async(data) => {
    const result = await request.post(`/api/bucket/add`, data)

    return result
}

export const removeFromBucket = async(data) => {
    const result = await request.post(`/api/bucket/remove`, data)

    return result
}