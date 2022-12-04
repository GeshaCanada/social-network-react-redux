import axios from "axios"

const instance = axios.create ({

    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/', 
    headers: {
            "API-KEY": "3c982f57-1042-4867-8827-32c70e4d6d7f"
        }

})

export const getUsers = (currentPage = 1, pageSize = 10) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data
        })
}

export const unFollowUser = (u) => {
    return instance.delete(`follow/${u.id}`)
        .then(response => {
            return response.data
        })
}

export const followUser = (u) => {
    return instance.post(`follow/${u.id}`)
        .then(response => {
            return response.data
        })


}
