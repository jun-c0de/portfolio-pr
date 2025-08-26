import { useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { api } from "../lib/api"

const AdminLogin = () => {

    const nav = useNavigate()
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })

    const [checking, setChecking] = useState(true)
    const [submitting, setSubmitting] = useState(false)

    const [error, setError] = useState(null)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }


    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await api.post('/api/auth/login',
                formData, {
                withCredentials: true
            }
            )
            if (response.data.user) {
                nav("/admin/post")
            }
        } catch (error) {
            const errorMsg = error.response.data.message || '로그인 실패'

            setError({
                message: errorMsg
            })
        }

    }


    return (
        <div>
            <div className='login-header'>
                <h3>관리자 로그인</h3>
                <p>관리자 전용 페이지 입니다.</p>
            </div>
            <form className='login-form' >
                <div className="form-field">

                    <label htmlFor="username">관리자 아이디 :</label>
                    <input type="text" id='username' required placeholder='관리자 아이디' />
                </div>
                <div className="form-field">

                    <label htmlFor="password">관리자 비밀번호 :</label>
                    <input type="password" id='password' required placeholder='관리자 비밀번호' />
                </div>
                <div className="error-box"></div>
                <button type='submit'>로그인</button>
            </form>
        </div>
    )
}

export default AdminLogin