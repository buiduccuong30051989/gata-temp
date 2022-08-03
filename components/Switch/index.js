import { Switch as HeadlessUiSwitch } from "@headlessui/react";

export const Switch = ({
  enabled,
  setEnabled,
  title = "",
  disabled = false,
  label = "",
  reverse = false,
}) => {
  return (
    <div className={`flex items-center ${reverse ? "flex-row-reverse" : ""}`}>
      <HeadlessUiSwitch.Group>
        {Boolean(label) && (
          <HeadlessUiSwitch.Label className={`${reverse ? "ml-4" : "mr-4"}`}>
            {label}
          </HeadlessUiSwitch.Label>
        )}

        <HeadlessUiSwitch
          checked={enabled}
          onChange={() => setEnabled((prev) => !prev)}
          disabled={disabled}
          className={`${enabled ? "bg-info-400" : "bg-gray-200"}
          relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
        >
          <span className="sr-only">{title}</span>
          <span
            className={`${enabled ? "translate-x-4" : "translate-x-0"}
pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
          />
        </HeadlessUiSwitch>
      </HeadlessUiSwitch.Group>
    </div>
  );
};
