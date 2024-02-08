import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const VerifyEmail = () => {
    const { id } = useParams();
    const [message, setMessage] = useState('')
    const mailVerification = async () => {
        try {
            const data = await axios.get("http://localhost:2304/api/auth/verifymail/" + id);
            console.log(data,'errormss')
            if (data.data.status) {
                setIsLoading(false);
                setIsVerified(true);
                setMessage(data.data.message)

            } if (!data.data.status) {
                setMessage(data.data.message)

            }
        } catch (error) {
            console.log(error)
        }

    }
    useEffect(() => { mailVerification() }, [])

    const [isLoading, setIsLoading] = useState(true);
    const [isVerified, setIsVerified] = useState(false);



    const redirectToLoginPage = () => {
        window.location.href = '/login';
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '20vh' }}>
            {isLoading && <div>{message}</div>}

            {isVerified && (
                <div style={{ marginBottom: '20px' }}>
                    {message}
                </div>
            )}

            {isVerified && (
                <button className='btn btn-success' onClick={redirectToLoginPage}>
                    Login in React
                </button>
            )}
        </div>
    );
};

export default VerifyEmail;


