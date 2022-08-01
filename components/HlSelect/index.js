import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { HiChevronDown, HiCheck } from "react-icons/hi";

export const HlSelect = (props) => {
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
    value = "",
    onChange,
    placeholder = "",
    ...rest
  } = props;

  const getClassNameContainer = () => {
    return `form-control hl-select ${className} ${disabled ? "disabled" : ""}`;
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
      {label && <label for={getId()}>{label}</label>}
      <Listbox value={value} onChange={onChange} {...rest}>
        <div className="relative">
          <Listbox.Button className="button is-regular">
            <span className="flex items-center truncate">
              <span className="truncate">
                {options.find((option) => option.value === value)?.label ||
                  placeholder}
              </span>
            </span>
            <span className="flex flex-shrink-0 items-center pl-2">
              <HiChevronDown className="w-4 h-4 text-gray-500" />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Listbox.Options className="wphub-dropdown w-52 z-20">
              {options.map((option, idx) => (
                <Listbox.Option key={option.value} value={option.value}>
                  {({ selected }) => (
                    <div className="relative">
                      <div
                        className={`wphub-dropdown-item  ${
                          selected ? "active" : ""
                        }`}
                      >
                        {option.label}
                      </div>
                      {idx !== options.length - 1 && (
                        <div className="dropdown-divider">
                          <hr />
                        </div>
                      )}
                      {selected && (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-info-900">
                          <HiCheck className="h-3 w-3" aria-hidden="true" />
                        </span>
                      )}
                    </div>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};
