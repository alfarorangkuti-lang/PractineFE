import axios from "axios";
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

export const register = async (email:string, password:string, password_confirmation:string , business_name:string, name:string ) => {
    const res = await axiosClient.post('/register', {
        email,
        password,
        password_confirmation,
        name,
        business_name,
    })
    const token = res.data.token
    if (token) {
    localStorage.setItem("token", token)    
    }
    
    return res.data

}

export const resendEmailVerification = async() => {
    const res = await axiosClient.post('/email/verification-notification')
    return res.data
}


export const handleFirstSubscription = async () => {
    const res = await axiosClient.post('/firstSubs')
    const token = res.data.snap_token
    return token
}

export const testPayment = async() => {
    const req = await axiosClient.post('testPayment')
    return req.status
}

export const getTokenSubscription = async(monthAmount:number) => {
    const req = await axiosClient.post('/subscribe', {monthAmount:monthAmount})
    const res = req.data.snap_token
    return res
}