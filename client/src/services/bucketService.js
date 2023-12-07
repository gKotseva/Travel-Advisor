import * as request from '../lib/request'

export const getAllItemsPerUser = async (email) => {
    const result = await request.post('/api/bucket/all', {email})

    return result;
}

export const addToBucket = async(data) => {
    const result = await request.post(`/api/bucket/addBucket`, data)

    return result
}

export const addToVisited = async(data) => {
    const result = await request.post(`/api/bucket/addVisited`, data)

    return result
}

export const removeFromBucket = async(data) => {
    const result = await request.post(`/api/bucket/removeBucket`, data)

    return result
}

export const removeFromVisited = async(data) => {
    const result = await request.post(`/api/bucket/removeVisited`, data)

    return result
}