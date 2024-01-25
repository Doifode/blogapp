import React, { useContext } from 'react';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import { loginVal } from '../helpers/Helper';
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../helpers/AuthContext';


//LOGIN PAGE 
const Login = () => {

  const { login } = useContext(Context); // DESTRUCTURING THE LOGIN FUNCTION FORM CONTEXT
  const navigate = useNavigate();

  const LoginUser = async (values) => {

    const data = await login(values);

    if (data?.status) {
      toast.success("Login successfully."); // SUCCESS TOAST MESSAGE 
      sessionStorage.setItem("access_token", data?.token) // SETTING TOKEN IN SESSION STORAGE
      navigate("/") // AFTER LOGIN SENDING TO HOME PAGE
      if (!data.status) return toast.error(data?.message) // ERROR MESSAGE TOASTER
    }
  }

  return (<div className='auth shadow-sm border '>
    <h1>Login User</h1>
    <Formik
      initialValues={{ username: "", password: "" }}
      onSubmit={
        (values) => {
          LoginUser(values)
        }}
      validationSchema={loginVal}
    >
      {() => (
        <Form className='border shadow-lg'>
          <Field type="text" name="username" placeholder="username" />
          <small className="text-danger">
            <ErrorMessage className='text-danger' name='username' />
          </small>
          <Field type="password" name="password" placeholder="password" />
          <small className='text-danger'>
            <ErrorMessage name='password' />
          </small>
          <span className='text-center'>
            <small >Don't you have an account? <Link to={"/register"}> Register</Link> </small>
          </span>
          <button type="submit" className='btn'>Login</button>
        </Form>
      )}
    </Formik>
  </div>)
}
export default Login