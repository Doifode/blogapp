import React from 'react';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import axios from "axios";
import { registrationVal } from '../helpers/Helper';
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom';


//USER REGISTRATION FORM PAGE 

const Register = () => {

  const navigate = useNavigate()
  // USER REGISTER API CALLING FUNCTION
  const RegisterUser = async (values) => {
    try {
      const res = await axios.post("http://localhost:2304/api/auth/register", values)
      toast.success(res.data);
      navigate("/login")
    } catch (error) {
      console.log(error)
      toast.error(error.response.data)
    }
  }

  return (
    <div className='auth shadow-sm border  '>
      <h1>Register User</h1>
      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        onSubmit={
          (values) => {
            RegisterUser(values)
          }}
        validationSchema={registrationVal}
      >
        {() => (
          <Form className='border shadow-lg'>
            <Field type="text" name="username" placeholder="username" />
            <small className="text-danger">
              <ErrorMessage className='text-danger' name='username' />
            </small>
            <Field type="email" name="email" placeholder="Email" />
            <small className='text-danger'><ErrorMessage name='email' /></small>
            <Field type="password" name="password" placeholder="password" />
            <small className='text-danger'>
              <ErrorMessage name='password' />
            </small>
            <button type="submit" className='btn'>Submit</button>
          </Form>
        )}
      </Formik>
    </div>)
}

export default Register