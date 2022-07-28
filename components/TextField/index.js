import { HiOutlineInformationCircle } from "react-icons/hi";

export const TextField = (props) => {
  const {
    label = "",
    className = "",
    type = "text",
    error = false,
    success = false,
    inputClassName = "",
    disabled = false,
    name = "",
    helperText = "",
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
      <input
        className={`input ${inputClassName}`}
        id={getId()}
        type={type}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
        {...rest}
      />
      {helperText && (
        <p className={`helper-text flex items-center ${error ? "error" : ""}`}>
          {
            error && <HiOutlineInformationCircle className="w-4 h-4 mr-2" />
          }
          {helperText}
        </p>
      )}
    </div>
  );
};
