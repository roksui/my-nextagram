"use client";

import { useFormState } from "react-dom"
import { login } from "./actions"

const initialState = {
  success: true,
  message: ""
}

const LoginForm = () => {
  const [state, formAction] = useFormState(login, initialState);

  return (
    <form action={formAction}>
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;