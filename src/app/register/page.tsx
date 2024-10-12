"use client";

import * as React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
  CardDescription,
} from "@/components/ui/card";
import EmailInput from "./_components/input/email";
import PasswordInput from "./_components/input/password";
import RegisterButton from "./_components/button/register";
import GoogleButton from "./_components/button/google";
import LinkedinButton from "./_components/button/linkedin";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import {
  updateFirstname,
  updateLastname,
  updateUsername,
  updateEmail,
  updatePassword,
  register,
} from "./_lib/slice";
import { google } from "../login/_lib/slice";
import { signIn, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import Link from "next/link";
import FirstnameInput from "./_components/input/firstname";
import LastnameInput from "./_components/input/lastname";
import UsernameInput from "./_components/input/username";

export default function RegisterPage() {
  const { data: session } = useSession();
  const dispatch = useAppDispatch();
  const firstname = useAppSelector((state) => state.registerReducer.firstname);
  const lastname = useAppSelector((state) => state.registerReducer.lastname);
  const username = useAppSelector((state) => state.registerReducer.username);
  const email = useAppSelector((state) => state.registerReducer.email);
  const password = useAppSelector((state) => state.registerReducer.password);
  const registerLoading = useAppSelector((state) => state.registerReducer.loading);
  const loginLoading = useAppSelector((state) => state.loginReducer.loading);

  const handleFirstnameChange =
    () => (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(updateFirstname(event.target.value));
    };
  const handleLastnameChange =
    () => (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(updateLastname(event.target.value));
    };
  const handleUsernameChange =
    () => (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(updateUsername(event.target.value));
    };
  const handleEmailChange =
    () => (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(updateEmail(event.target.value));
    };

  const handlePasswordChange =
    () => (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(updatePassword(event.target.value));
    };

  const handleRegister = () => {
    dispatch(register({ firstname, lastname, username, email, password }));
  };

  const handleGoogleSignIn = () => {
    signIn("google");
  };

  const handleLinkedinSignIn = () => {
    signIn("linkedin");
  };

  React.useEffect(() => {
    if (registerLoading === "succeeded" && loginLoading !== "succeeded") {
      redirect("/login");
    }
    if (registerLoading !== "succeeded" && loginLoading === "succeeded") {
      redirect("/careers");
    }
    if (session?.idToken) {
      dispatch(google({ token: session.idToken }));
    }
  }, [registerLoading, loginLoading, session]);

  return (
    <main className="flex h-screen justify-center items-center">
      <Card className="rounded-3xl shadow-md p-5 w-96">
        <CardHeader className="flex items-center">
          <CardTitle className="text-2xl">Register</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 gap-5">
          <FirstnameInput
            id="firstname"
            type="firstname"
            placeholder="Firstname"
            value={firstname}
            onChange={handleFirstnameChange()}
            className={"focus-visible:ring-transparent"}
          />
          <LastnameInput
            id="lastname"
            type="lastname"
            placeholder="Lastname"
            value={lastname}
            onChange={handleLastnameChange()}
            className={"focus-visible:ring-transparent"}
          />
          <UsernameInput
            id="username"
            type="username"
            placeholder="Username"
            value={username}
            onChange={handleUsernameChange()}
            className={"focus-visible:ring-transparent"}
          />
          <EmailInput
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange()}
            className={"focus-visible:ring-transparent"}
          />
          <PasswordInput
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange()}
            className={"focus-visible:ring-transparent"}
          />
          <RegisterButton id="register" onClick={handleRegister} />
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
          <GoogleButton
            id="google"
            variant="outline"
            onClick={handleGoogleSignIn}
          />
          <LinkedinButton
            id="linkedin"
            variant="outline"
            onClick={handleLinkedinSignIn}
          />
        </CardContent>
        <CardFooter className="flex flex-col items-center">
          <CardDescription className="flex flex-row justify-center items-center">
            <span className="text-muted-foreground">Have an account?</span>
            <Link href={"/login"}>
              <Button
                variant="link"
                className="p-0 ml-1 underline decoration-transparent"
              >
                Login
              </Button>
            </Link>
          </CardDescription>
        </CardFooter>
      </Card>
    </main>
  );
}
