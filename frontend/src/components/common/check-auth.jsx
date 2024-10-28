import React from 'react'
import { useLocation } from 'react-router-dom'

function CheckAuth({isAuthencated, user, children}) {

    const location = useLocation()
    return (
        <div>CheckAuth</div>
    )
}

export default CheckAuth