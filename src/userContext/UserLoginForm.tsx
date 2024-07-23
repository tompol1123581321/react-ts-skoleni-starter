import { useState } from "react";
import { useUserSlice } from "../store/slices/user/userSlice";

export function LoginForm() {
  const { login } = useUserSlice();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div>
      <input
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button onClick={() => login({ username, email })}>Login</button>
    </div>
  );
}
