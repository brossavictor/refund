import { useState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  /* const [isloading, setIsLoading] = useState("false"); */

  function handleSubmit() {
    console.log({ email, password /* , isloading */ });
  }

  return (
    <form className="signIn" onSubmit={(e) => e.preventDefault()}>
      <Input
        required
        legend="E-mail"
        type="email"
        placeholder="your@email.com"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        required
        legend="Password"
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button type="submit" onClick={handleSubmit}>
        Sign In
      </Button>

      <a href="/signup">Sign up</a>
    </form>
  );
}
