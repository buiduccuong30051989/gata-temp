export const TextArea = (props) => {
  const {
    label = "",
    className = "",
    error = false,
    success = false,
    inputClassName = "",
    disabled = false,
    name = "",
    helperText = "",
    rows = 3,
    onChange,
    ...rest
  } = props;

  const getClassNameContainer = () => {
    return `form-control text-field ${className} ${error ? "error" : ""} ${
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
      <textarea
        className={`textarea ${inputClassName}`}
        id={getId()}
        disabled={disabled}
        rows={rows}
        onChange={(e) => onChange(e.target.value)}
        {...rest}
      />
      {helperText && (
        <p className={`helper-text ${error ? "error" : ""}`}>{helperText}</p>
      )}
    </div>
  );
};
