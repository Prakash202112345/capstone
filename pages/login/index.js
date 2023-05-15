import React, { useState } from 'react'
import { Button, TextField } from '@mui/material'
import styles from "./style.module.scss"
import { toast } from 'react-toastify'
import { providers, signIn, getSession, csrfToken, useSession } from "next-auth/react";
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Header from '@/component/Header';

function Login() {
  const { data: session } = useSession();
  const router = useRouter()
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  })

  useEffect(() => {
    if (session) {
      router.push('/students/dashboard');
    }
  }, [session]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const status = await signIn("credentials", { email: loginData.email, password: loginData.password, redirect: false, callbackUrl: '/students/dashboard', });
      if (status.ok) {
        toast.success("Sign in successful", {
          position: toast.POSITION.TOP_CENTER,
          theme: "colored"
        })
        router.push("/students/dashboard")
      }
      else {
        toast.error("Invalid email or password", {
          position: toast.POSITION.TOP_CENTER,
          theme: "colored"
        })
      }
    }
    catch (error) {
      toast.error(error.message)
    }

  }
  return (
    <>
      <Header HeaderText={"Login"} />
      <section className="login">
        <div className="container">
          <div className="row ">
            <div className="col-md-6 mx-auto">
              <h4>Welcome User</h4>
              <div className="mt-3">
                <TextField
                  label="Email"
                  fullWidth
                  value={loginData.email}
                  onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                  variant="outlined" />
              </div>
              <div className="mt-3">
                <TextField
                  label="Password"
                  fullWidth
                  value={loginData.password}
                  type='password'
                  onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                  variant="outlined" />
              </div>
              <div className="mt-3">
                <Button variant='contained' color='primary' onClick={handleSubmit}>Login</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Login
