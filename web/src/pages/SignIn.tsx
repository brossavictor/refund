import { Button } from "../components/Button";
import { Input } from "../components/Input";

export function SignIn() {
  return (
    <form>
      <Input
        required
        legend="E-mail"
        type="email"
        placeholder="your@email.com"
      />
      <Input
        required
        legend="Password"
        type="password"
        placeholder="password"
      />

      <Button>Sign In</Button>
    </form>
  );
}
