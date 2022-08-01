import { Fragment } from "react";
import { HiOutlineChevronDown } from "react-icons/hi";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";

export const HlMenu = (props) => {
  const {
    btnClass = "wphub-btn-secondary",
    label = "",
    menuClass = "relative inline-block",
    dropdownClass = "right-0 origin-top-right top-full z-[1]",
    width = "w-56",
    options = [],
    arrow = false,
  } = props;

  return (
    <Menu as="div" className={menuClass}>
      <Menu.Button className={btnClass}>
        {label}
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
          {options.map((option) => (
            <Menu.Item key={option.label}>
              <Link href={option.path}>
                <a className="wphub-dropdown-item">{option.label}</a>
              </Link>
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
