type ButtonProps = React.ComponentProps<"button"> & {
  isLoading?: boolean;
};

export function Button({
  children,
  isLoading,
  type = "button",
  ...rest
}: ButtonProps) {
  return (
    <button type={type} disabled={isLoading} {...rest}>
      {children}
    </button>
  );
}
