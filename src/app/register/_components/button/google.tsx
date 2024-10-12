"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"

interface GoogleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    id: string | undefined
    variant: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined    
    onClick: React.MouseEventHandler<HTMLButtonElement> | undefined
}

const GoogleButton = ({ className, ...props }: Partial<GoogleButtonProps>) => {
    return (
        <Button
            id={props.id}
            variant={props.variant}
            onClick={props.onClick}
            className={className}
        >
            Google
        </Button>
    );
};

export default GoogleButton;