import React from "react";
import { User } from "../App/App.types";

interface HeaderProps {
  user: User;
  children: React.ReactNode;
}

export function Header({ user, children }: HeaderProps) {
  return (
    <div>
      <p>{user.name}</p>
      <p>{user.age}</p>

      {children}
    </div>
  );
}
