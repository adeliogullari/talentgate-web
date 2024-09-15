"use client"

import * as React from "react";
import { EmailInput } from "./_components/input/email";
import { PasswordInput } from "./_components/input/password";
import { LoginButton } from "./_components/button/login";
import { GoogleButton } from "./_components/button/google";
import { LinkedinButton } from "./_components/button/linkedin";
import { useAppSelector, useAppDispatch } from "@/lib/hooks"
import { updateEmail, updatePassword, login } from "./_lib/slice";

import { signIn } from 'next-auth/react';

export default function Login() {

    const dispatch = useAppDispatch();

    const email = useAppSelector((state) => state.loginReducer.email)
    const password = useAppSelector((state) => state.loginReducer.password)

    const handleEmailChange = () => (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(updateEmail(event.target.value))
    }

    const handlePasswordChange = () => (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(updatePassword(event.target.value))
    }

    const handleLogin = () => {
        dispatch(login({email: email, password: password}))
    }

    const handleGoogleSignIn = () => {
        signIn("google")
    }

    return (
            <main className="flex h-screen justify-center items-center">
                <EmailInput id="email" type="email" placeholder="Email" value={email} onChange={handleEmailChange()}/>
                <PasswordInput id="password" type="password" placeholder="Password" value={password} onChange={handlePasswordChange()}/>
                <LoginButton id="login" variant="outline"  onClick={handleLogin}/>
                <GoogleButton id="google" variant="outline" onClick={handleGoogleSignIn}/>
                <LinkedinButton id="linkedin" variant="outline"/>
            </main>
    )
}