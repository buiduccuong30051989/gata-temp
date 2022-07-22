import { RadioGroup } from "@headlessui/react";
import { Radio } from "components/Radio";

export const HlRadio = (props) => {
  const {
    label = "",
    value = "",
    options = [],
    disabled = false,
    onChange,
    className = "",
    radioProps,
  } = props;

  const getClassNameContainer = () => {
    return `form-control group-radio ${className} ${
      disabled ? "disabled" : ""
    }`;
  };

  return (
    <RadioGroup
      className={getClassNameContainer()}
      disabled={disabled}
      value={value}
      onChange={onChange}
    >
      {Boolean(label) && (
        <RadioGroup.Label className="group-radio-label">{label}</RadioGroup.Label>
      )}
      <div className="group-options">
        {options.map((option) => (
          <RadioGroup.Option className='hl-option' value={option.value}>
            {({ checked }) => (
              <Radio
                value={option.value}
                label={option.label}
                checked={checked}
                {...radioProps}
              />
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
};
