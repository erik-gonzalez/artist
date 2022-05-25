import {useState, useEffect } from 'react';
import axios from "axios"

export default function useAuth(code) {

    const [accessToken, setAccessToken]= useState()
    const [refreshToken, setRefreshToken]= useState()
    const [expiresIn, setExpiresIn]= useState()

    useEffect(()=>{
        axios.post("http://localhost:3001/log",{
            code,
        })
        .then(res => {
            setAccessToken(res.data.accessToken)
            setRefreshToken(res.data.refreshToken)
            setExpiresIn(res.data.expiresIn)
            window.history.pushState({}, null, "/music")
        }).catch(() => {
            window.location = "/music" 
        })
    }, [code])

    useEffect(() => {
        if (!refreshToken || !expiresIn) return
        const interval = setInterval(() => {

        
        axios.post("http://localhost:3001/refresh",{
            refreshToken,
        })
        .then(res => {
            setAccessToken(res.data.accessToken)
            setExpiresIn(res.data.expiresIn)
        }).catch(() => {
            window.location = "/music" 
        })
        }, (expiresIn - 60) * 1000 )

        return () => clearInterval(interval)

    }, [refreshToken, expiresIn])

    return accessToken

}
