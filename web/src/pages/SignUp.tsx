import { useState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

export function SingUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isloading, setIsLoading] = useState("false");

  function handleSubmit(e: React.FormEvent) {
    console.log({ name, email, password, confirmPassword });
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <Input
        required
        legend="Name"
        placeholder="Your Name"
        onChange={(e) => setName(e.target.value)}
      />

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
      <Input
        required
        legend="
        Confirm password"
        type="password"
        placeholder="Confirm your password."
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <Button type="submit" onClick={handleSubmit}>
        Sign Up
      </Button>

      <a href="/">Already a member? Click here.</a>
    </form>
  );
}
