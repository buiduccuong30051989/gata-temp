import { Switch as HeadlessUiSwitch } from "@headlessui/react";

export const Switch = ({
  enabled,
  setEnabled,
  title = "",
  disabled = false,
}) => {
  return (
    <HeadlessUiSwitch
      checked={enabled}
      onChange={() => setEnabled((prev) => !prev)}
      disabled={disabled}
      className={`${enabled ? "bg-teal-400" : "bg-gray-200"}
          relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
    >
      <span className="sr-only">{title}</span>
      <span
        className={`${enabled ? "translate-x-5" : "translate-x-0"}
pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
      />
    </HeadlessUiSwitch>
  );
};
