"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"

interface LoginButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    id: string
    variant: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null  
    onClick: React.MouseEventHandler<HTMLButtonElement>
    className: string
}

const LoginButton = ({ ...props }: Partial<LoginButtonProps>) => {

    return (
        <Button id={props.id} variant={props.variant} onClick={props.onClick} className={props.className}>
            Log In
        </Button>

    )
}

export default LoginButton;