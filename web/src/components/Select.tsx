type SelectProps = React.ComponentProps<"select"> & {
  legend?: string;
};

export function Select({ legend, children, ...rest }: SelectProps) {
  return (
    <fieldset>
      {legend && <legend>{legend}</legend>}
      <select value="" {...rest}>
        <option value="" hidden>
          Select...
        </option>

        {children}
      </select>
    </fieldset>
  );
}
