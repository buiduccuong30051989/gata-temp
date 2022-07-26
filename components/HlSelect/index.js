import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { HiOutlineSelector } from "react-icons/hi";

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
          <Listbox.Button className="flex  w-52 items-center justify-between px-3 py-2  text-gray-900 text-sm bg-white border border-gray-200 rounded-lg">
            <span className="flex items-center truncate">
              <span className="truncate">
                {options.find((option) => option.value === value)?.label}
              </span>
            </span>
            <span className="flex flex-shrink-0 items-center">
              <HiOutlineSelector className="w-4 h-4 text-gray-500" />
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
              {options.map((option) => (
                <Listbox.Option key={option.value} value={option.value}>
                  {({ selected }) => (
                    <span
                      className={`wphub-dropdown-item text-gray-700 ${
                        selected ? "bg-gray-100" : ""
                      }`}
                    >
                      {option.label}
                    </span>
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
