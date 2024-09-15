"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"

interface LoginButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    id: string | undefined
    variant: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined    
    onClick: React.MouseEventHandler<HTMLButtonElement> | undefined
}

export function LoginButton({ className, ...props }: Partial<LoginButtonProps>) {

    return (
        <Button id={props.id} variant={props.variant} onClick={props.onClick}>
            Log In
        </Button>

    )
}