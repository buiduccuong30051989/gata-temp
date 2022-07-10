import { useState, Fragment } from "react";
import {
  HiOutlineExternalLink,
  HiOutlineClock,
  HiOutlineX,
  HiOutlineLogout,
  HiOutlineFlag,
  HiOutlineTemplate,
  HiOutlineDotsVertical,
  HiOutlineSearch,
  HiOutlineCheck,
  HiOutlineGlobe,
  HiOutlineRefresh,
  HiOutlineLightningBolt,
  HiOutlinePencilAlt,
  HiOutlinePlusCircle,
  HiOutlineTrash,
} from "react-icons/hi";
import { FiGitMerge } from "react-icons/fi";
import { Tooltip } from "components/Tooltip";
import Link from "next/link";
import { Dropdown } from "components/Dropdown";
import { Menu, Popover, Transition, Combobox } from "@headlessui/react";
import { IconPhp } from "components/Icons";

const MORE_ACTIONS = [
  {
    title: "PHP Configuration",
    icon: <IconPhp className="icon w-4 h-4 mr-2" />,
  },
  { title: "Delete", icon: <HiOutlineTrash className="icon w-4 h-4 mr-2" /> },
];

const MoreActions = () => (
  <div>
    {MORE_ACTIONS.map((item) => (
      <Menu.Item key={item.title}>
        <button className="forge-dropdown-item font-light w-full">
          {item.icon}
          {item.title}
        </button>
      </Menu.Item>
    ))}
  </div>
);

export const PrivateRow = () => {
  return (
    <tr className="h-12 border-t border-gray-100">
      <td className="w-5/12 pr-4">
        <div className="flex items-center">
          <div className="">
            <div className="flex text-sm font-normal text-gray-900">
              <span>cuong</span>
            </div>
            <div className="flex items-center mt-1">
              <span className="site_url flex items-center" title="Parent Site">
                <HiOutlineGlobe className="h-4 w-4 text-gray-500 mr-1" />
                <span className="text-gray-500 text-xs">
                  widoyi.us10.instawp.xyz
                </span>
              </span>
              <Tooltip content="Sync Changes from Parent Site">
                <button className="ml-2 cursor-pointer">
                  <HiOutlineRefresh className="h-4 w-4 text-gray-500 mr-1" />
                </button>
              </Tooltip>
            </div>
          </div>
        </div>
      </td>
      <td className="w-1/12 pr-4">
        <div className="text-sm text-gray-500 capitalize text-inline flex">
          <span title="Instant Template: Off">
            <HiOutlineLightningBolt className="h-4 w-4 mr-2" />
          </span>
          <span>ready</span>
        </div>
      </td>
      <td className="w-2/12 pr-4">
        <div className="text-sm text-gray-500 capitalize">7 hours ago</div>
      </td>
      <td className="w-3/12 pr-4">
        <div className="flex justify-end">
          <Tooltip content="Edit">
            <button className="forge-btn-secondary rounded-none rounded-l-lg">
              <span className="icon is-small">
                <HiOutlinePencilAlt className="w-5 h-5 text-gray-500" />
              </span>
            </button>
          </Tooltip>
          <Tooltip content="Enable Deployment">
            <button className="forge-btn-secondary rounded-none -ml-px">
              <span className="icon is-small">
                <HiOutlinePlusCircle className="w-5 h-5 text-gray-500" />
              </span>
            </button>
          </Tooltip>
          <Tooltip content="Create New Site">
            <button className="forge-btn-secondary rounded-none -ml-px">
              <span className="icon is-small">
                <FiGitMerge className="w-5 h-5 text-gray-500" />
              </span>
            </button>
          </Tooltip>
          <Dropdown
            btnClass="icon is-small"
            menuClass="relative forge-btn-secondary rounded-none rounded-r-lg -ml-px"
            arrow={false}
            dropdownClass="right-0 origin-top-right w-48 top-full z-[1]"
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
