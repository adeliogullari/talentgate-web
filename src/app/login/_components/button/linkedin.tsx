"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"

interface LinkedinButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    id: string | undefined
    variant: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined    
    onClick: React.MouseEventHandler<HTMLButtonElement> | undefined
}

export function LinkedinButton({ className, ...props }: Partial<LinkedinButtonProps>) {

    return (
        <Button
            id="google"
            variant="outline">
                Linkedin
        </Button>
    )
}