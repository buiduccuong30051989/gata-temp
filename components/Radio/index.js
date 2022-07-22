export const Radio = (props) => {
  const {
    label = "",
    className = "",
    error = false,
    success = false,
    inputClassName = "",
    disabled = false,
    name = "",
    checked = false,
    ...rest
  } = props;

  const getClassNameContainer = () => {
    return `form-control radio ${className} ${error ? "error" : ""} ${
      success ? "success" : ""
    } ${disabled ? "disabled" : ""}`;
  };

  console.log({checked})

  return (
    <div className={getClassNameContainer()}>
      <label className="flex items-center">
        <input
          type="radio"
          className={`wphub-radio ${inputClassName}`}
          disabled={disabled}
          checked={checked}
          {...rest}
        />
        {label && <span className="radio-label">{label}</span>}
      </label>
    </div>
  );
};
