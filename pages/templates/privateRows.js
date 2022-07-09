import { useState, Fragment } from "react";
import {
  HiOutlineExternalLink,
  HiOutlineClock,
  HiOutlinePlusCircle,
  HiOutlineX,
  HiOutlineLogout,
  HiOutlineFlag,
  HiOutlineTemplate,
  HiOutlineDotsVertical,
  HiOutlineSearch,
  HiOutlineCheck,
} from "react-icons/hi";
import { Tooltip } from "components/Tooltip";
import Link from "next/link";
import { Dropdown } from "components/Dropdown";
import { Menu, Popover, Transition, Combobox } from "@headlessui/react";

const MORE_ACTIONS = [
  { title: "View Creds", path: "/" },
  { title: "Migrate", path: "/" },
  { title: "Export As", path: "/" },
  { title: "Delete", path: "/" },
  { title: "Clone", path: "/" },
  { title: "Access FTP/SSH", path: "/" },
  { title: "Map Domain", path: "/" },
  { title: "Unreserve Site", path: "/" },
];

const MoreActions = () => (
  <div>
    {MORE_ACTIONS.map((item) => (
      <Menu.Item key={item.title}>
        <Link href={item.path}>
          <a className="forge-dropdown-item">{item.title}</a>
        </Link>
      </Menu.Item>
    ))}
  </div>
);

export const PrivateRow = () => {
  return (
    <tr className="h-12 border-t border-gray-100">
      <td className="w-5/12 pr-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="">
            <div className="flex text-sm font-medium text-gray-900">
              <span>cuong</span>
            </div>
            <div className="flex items-center mt-2">
              <span className="site_url flex items-center" title="Parent Site">
                <HiOutlineClock className="h-4 w-4 text-gray-500 mr-1" />
                <span className="text-gray-500 text-xs">
                  widoyi.us10.instawp.xyz
                </span>
              </span>
              <div className="relative inline-block text-left">
                <div>
                  <button
                    className="ml-2 sync_template cursor-pointer flex items-center data-v-tooltip"
                    data-v-tooltip="Sync Changes from Parent Site"
                  >
                    <HiOutlineClock className="h-4 w-4 text-gray-500 mr-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </td>
      <td className="w-1/12 pr-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500 capitalize text-inline flex">
          <span title="Instant Template: Off">
            <HiOutlineClock className="h-5 w-5" />
          </span>
          <span>ready</span>
        </div>
      </td>
      <td className="w-2/12 px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500 capitalize">7 hours ago</div>
      </td>
      <td className="w-3/12 py-4 whitespace-nowrap border-1 text-sm font-medium">
        <div className="flex justify-end">
          <Tooltip content="Auto Login">
            <button className="forge-btn-secondary rounded-none rounded-l-lg">
              <span className="icon is-small">
                <HiOutlineLogout className="w-5 h-5 text-gray-500" />
              </span>
            </button>
          </Tooltip>
          <Tooltip content="Reserve">
            <button className="forge-btn-secondary rounded-none -ml-px">
              <span className="icon is-small">
                <HiOutlineFlag className="w-5 h-5 text-gray-500" />
              </span>
            </button>
          </Tooltip>
          <Tooltip content="Save Template">
            <button className="forge-btn-secondary rounded-none -ml-px">
              <span className="icon is-small">
                <HiOutlineTemplate className="w-5 h-5 text-gray-500" />
              </span>
            </button>
          </Tooltip>
          <Dropdown
            btnClass="icon is-small"
            menuClass="relative forge-btn-secondary rounded-none rounded-r-lg -ml-px"
            arrow={false}
            dropdownClass="right-0 origin-top-right w-40 top-full z-[1]"
            btnChildren={
              <Tooltip content="More Action">
                <span>
                  <HiOutlineDotsVertical className="w-5 h-5 text-gray-500" />
                </span>
              </Tooltip>
            }
            dropdownChildren={<MoreActions />}
          />
        </div>
      </td>
    </tr>
  );
};
