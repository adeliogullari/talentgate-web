"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";

interface RegisterButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  id: string;
  variant:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | null;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  className: string;
}


const RegisterButton = ({ ...props }: Partial<RegisterButtonProps>) => {
  return (
    <Button
      id={props.id}
      variant={props.variant}
      onClick={props.onClick}
      className={props.className}
    >
      Register
    </Button>
  );
};

export default RegisterButton;
