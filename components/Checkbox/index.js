export const Checkbox = (props) => {
  const {
    label = "",
    className = "",
    error = false,
    success = false,
    inputClassName = "",
    disabled = false,
    name = "",
    onChange,
    checked,
    ...rest
  } = props;

  const getClassNameContainer = () => {
    return `form-control checkbox ${className} ${error ? "error" : ""} ${
      success ? "success" : ""
    } ${disabled ? "disabled" : ""}`;
  };

  return (
    <div className={getClassNameContainer()}>
      <label className="flex items-center">
        <input
          type="checkbox"
          className={`wphub-checkbox ${inputClassName}`}
          disabled={disabled}
          checked={checked}
          onChange={onChange}
          {...rest}
        />
        {label && <span className="checkbox-label">{label}</span>}
      </label>
    </div>
  );
};
