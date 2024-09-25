"use client"

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from "@/components/ui/card";
import EmailInput from "./_components/input/email";
import PasswordInput from "./_components/input/password";
import LoginButton from "./_components/button/login";
import GoogleButton from "./_components/button/google";
import LinkedinButton from "./_components/button/linkedin";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { updateEmail, updatePassword, login } from "./_lib/slice";
import { signIn } from 'next-auth/react';
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

export default function Login() {
    const dispatch = useAppDispatch();
    const email = useAppSelector((state) => state.loginReducer.email);
    const password = useAppSelector((state) => state.loginReducer.password);

    const handleEmailChange = () => (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(updateEmail(event.target.value));
    };

    const handlePasswordChange = () => (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(updatePassword(event.target.value));
    };

    const handleLogin = () => {
        dispatch(login({ email, password }));
    };

    const handleGoogleSignIn = () => {
        signIn("google");
    };

    const handleLinkedinSignIn = () => {
        signIn("linkedin");
    };

    return (
        <main className="flex h-screen justify-center items-center">
            <Card className="rounded-3xl shadow-md p-5 w-96">
                <CardHeader className="flex items-center">
                    <CardTitle className="text-2xl">Login</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-1 gap-5">
                    <EmailInput id="email" type="email" placeholder="Email" value={email} onChange={handleEmailChange()} className={"focus-visible:ring-transparent"} />
                    <PasswordInput id="password" type="password" placeholder="Password" value={password} onChange={handlePasswordChange()} className={"focus-visible:ring-transparent"} />
                    <div className="grid grid-cols-2">
                        <div className="flex items-center space-x-2">
                            <Checkbox id="terms" />
                            <label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                Remember me
                            </label>
                        </div>
                        <div className="flex justify-end">
                            <Button variant="link" className="p-0 h-auto underline decoration-transparent">
                                Forgot Password?
                            </Button>
                        </div>
                    </div>
                    <LoginButton id="login" variant="outline" onClick={handleLogin} />
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-background px-5 text-muted-foreground">
                                OR
                            </span>
                        </div>
                    </div>
                    <GoogleButton id="google" variant="outline" onClick={handleGoogleSignIn} />
                    <LinkedinButton id="linkedin" variant="outline" onClick={handleLinkedinSignIn} />
                </CardContent>
                <CardFooter className="flex flex-col items-center">
                    <CardDescription className="flex flex-row justify-center items-center">
                        <span className="text-muted-foreground">{"Don't have an account?"}</span>
                        <Button variant="link" className="p-0 ml-1 underline decoration-transparent">
                            Register
                        </Button>
                    </CardDescription>
                </CardFooter>
            </Card>
        </main>
    );
}
