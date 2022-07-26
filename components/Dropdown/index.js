import { Transition, Menu } from "@headlessui/react";
import { HiOutlineChevronDown } from "react-icons/hi";
import { Fragment } from "react";

export const Dropdown = ({
  btnClass = "wphub-btn-secondary",
  menuClass = "relative inline-block",
  btnChildren,
  dropdownClass = "right-0 origin-top-right  top-full z-[1]",
  width = "w-56",
  dropdownChildren,
  arrow = true,
}) => {
  return (
    <Menu as="div" className={menuClass}>
      <Menu.Button className={btnClass}>
        {btnChildren}
        {Boolean(arrow) && (
          <span>
            <HiOutlineChevronDown className="ml-2  w-4  h-4 text-inherit" />
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
        <Menu.Items className={`wphub-dropdown  ${dropdownClass} ${width}`}>
          {dropdownChildren}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
