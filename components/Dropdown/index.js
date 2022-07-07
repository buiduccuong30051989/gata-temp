import { Transition, Menu } from "@headlessui/react";
import { HiOutlineChevronDown } from "react-icons/hi";
import { Fragment } from "react";

export const Dropdown = ({
  btnClass = "flex items-center -mr-3 px-3 h-12 text-white rounded-lg cursor-pointer select-none",
  menuClass = "relative inline-block text-left",
  btnChildren,
  dropdownClass = "right-0 origin-top-right w-56 top-full z-[1]",
  dropdownChildren,
  arrow = true,
}) => {
  return (
    <Menu as="div" className={menuClass}>
      <Menu.Button className={btnClass}>
        {btnChildren}
        {Boolean(arrow) && (
          <span>
            <HiOutlineChevronDown className="ml-2  w-4  h-4 text-gray-400" />
          </span>
        )}
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Menu.Items className={`forge-dropdown  ${dropdownClass}`}>
          <div>{dropdownChildren}</div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
