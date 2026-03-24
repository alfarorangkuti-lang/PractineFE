import axios from "axios"

const axiosClient = axios.create({
    baseURL: "https://api.karawanggadget.com/api/",
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

export default axiosClient