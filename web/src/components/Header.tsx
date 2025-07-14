import logo from "../assets/logo.svg";
import logout from "../assets/logout.svg";

type HeaderProps = React.ComponentProps<"header"> & {
  user?: string;
};

export function Header({ user, ...rest }: HeaderProps) {
  return (
    <header className="header" {...rest}>
      <img src={logo} alt="logo" />
      <div>
        <span>Hello {(user = "John Doe")}</span>
        <img src={logout} alt="door out" />
      </div>
    </header>
  );
}
