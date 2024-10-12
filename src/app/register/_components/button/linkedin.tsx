"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"

interface LinkedinButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    id: string | undefined
    variant: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined    
    onClick: React.MouseEventHandler<HTMLButtonElement> | undefined
}

const LinkedinButton = ({ className, ...props }: Partial<LinkedinButtonProps>) => {
    return (
        <Button
            id={props.id}
            variant={props.variant}
            onClick={props.onClick}
            className={className}
        >
            Linkedin
        </Button>
    );
};

export default LinkedinButton;