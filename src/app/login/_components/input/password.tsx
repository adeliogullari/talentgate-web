"use client"

import * as React from "react"
import { Input } from "@/components/ui/input"

interface PasswordInputProps extends React.HTMLAttributes<HTMLDivElement> {
    id: string | undefined
    type: React.HTMLInputTypeAttribute | undefined
    placeholder: string | undefined
    value: string | number | readonly string[] | undefined
    onChange: React.ChangeEventHandler<HTMLInputElement> | undefined
}

export function PasswordInput({ className, ...props }: Partial<PasswordInputProps>) {

    return (
        <Input
            id={props.id}
            type={props.type}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
        />
    )
}