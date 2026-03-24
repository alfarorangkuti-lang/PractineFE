import axiosClient from "./axios";


export const getUser = async () => {
    const res = await axiosClient.get('/user')
    return res.data
}

export const logout = async () => {
    const res = await axiosClient.post('/logout')
    return res.data
}

export const login = async (email: string, password: string) => {
    const res = await axiosClient.post('/login', {
        email,
        password
    })

    // simpan token
    if (res.data.token) {
        localStorage.setItem("token", res.data.token)
    }

    return res.data
}