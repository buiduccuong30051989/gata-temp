export const Select = (props) => {
  const {
    label = "",
    className = "",
    error = false,
    success = false,
    inputClassName = "",
    disabled = false,
    name = "",
    helperText = "",
    options = [],
    onChange,
    ...rest
  } = props;

  const getClassNameContainer = () => {
    return `select-field ${className} ${error ? "error" : ""} ${
      success ? "success" : ""
    } ${disabled ? "disabled" : ""}`;
  };

  const getId = () => {
    if (name) return name;
    if (label && typeof label === "string") {
      return label.replace(/\s/g, "");
    }
    return null;
  };

  return (
    <div className={getClassNameContainer()}>
      {label && <label htmlFor={getId()}>{label}</label>}
      <div className="select w-full">
        <select
          className={`${inputClassName}`}
          id={getId()}
          disabled={disabled}
          onChange={(e) => onChange(e.target.value)}
          {...rest}
        >
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
        </select>
      </div>
      {helperText && (
        <p className={`helper-text ${error ? "error" : ""}`}>{helperText}</p>
      )}
    </div>
  );
};
