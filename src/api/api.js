import axios from "axios"

const instance = axios.create({

    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "3c982f57-1042-4867-8827-32c70e4d6d7f"
    }

})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)

    },

    follow(userId) {
        return instance.post(`follow/${userId}`)

    },

    getProfile(userId) {
        return instance.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)

    }
}

export const authAPI = {
    me() {
        return instance.get(`https://social-network.samuraijs.com/api/1.0/auth/me`)
    }
}
