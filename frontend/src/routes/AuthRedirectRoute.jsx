import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { api } from '../lib/api'
export default function AuthRedirectRoute({ Component }) {

    const [isAuthenticated, SetIsAuthenticated] = useState(null)

    useEffect(() => {

        let alive = true

            (async () => {
                try {
                    await api.post('/api/auth/verify-token', {})

                    if (alive) SetIsAuthenticated(true)
                } catch (error) {
                    if (alive) SetIsAuthenticated(false)
                }
            })()

        return () => { alive = false }
    }, [])

    if (isAuthenticated === null) return null;

    return isAuthenticated ?
        <Navigate to='/admin/post' replace /> :
        <Component />
}

