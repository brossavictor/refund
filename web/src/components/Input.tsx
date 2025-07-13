type InputProps = React.ComponentProps<"input"> & {
  legend?: string;
};

export function Input({ legend, type = "text", ...rest }: InputProps) {
  return (
    <fieldset>
      {legend && <legend>{legend}</legend>}
      <input type={type} {...rest} />
    </fieldset>
  );
}
