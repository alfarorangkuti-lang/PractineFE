import axios from "axios"

const axiosClient = axios.create({
    baseURL: "http://127.0.0.1:8000/api",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
})

// 🔥 otomatis inject token
axiosClient.interceptors.request.use((config) => {
    if (typeof window !== "undefined") {
        const token = localStorage.getItem("token")

        if (token && config.headers) {
            config.headers.Authorization = `Bearer ${token}`
        }
    }

    return config
})

// 🔥 handle global error (auto logout)
axiosClient.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            localStorage.removeItem("token")
            window.location.href = "/auth/login"
        }
        return Promise.reject(error)
    }
)

export default axiosClient