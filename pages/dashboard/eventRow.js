import { useState } from "react";
import {
  HiOutlineExternalLink,
  HiOutlineClock,
  HiOutlinePlusCircle,
  HiOutlineX,
  HiOutlineLogout,
  HiOutlineFlag,
  HiOutlineTemplate,
  HiOutlineDotsVertical,
} from "react-icons/hi";
import { IconLoading } from "components/Icons";
import { Tooltip } from "components/Tooltip";
import Link from "next/link";
import { Dropdown } from "components/Dropdown";
import { Menu } from "@headlessui/react";

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

export const EventRow = () => {
  const [loading, setLoading] = useState(false);
  const [showMore, setShowMore] = useState(false);

  return (
    <tr className="h-12 border-t border-gray-100">
      <td className="pr-4">
        <input type="checkbox" className="forge-checkbox" />
      </td>
      <td className="pr-4">
        <span className="flex items-center text-gray-500">
          www.google.com.vn
          <a href="#">
            <HiOutlineExternalLink className="w-4 h-4 ml-2 text-brands-info" />
          </a>
        </span>
      </td>
      <td className="pr-4">
        <span className="flex items-center">
          <HiOutlineClock className="icon w-4 h-4 mr-2 text-gray-500" />6 day,
          23 hours, 59 mins
        </span>
      </td>
      <td className="pr-4 text-gray-500 text-xs">108.93 MB</td>
      <td className="pr-4">
        <div className="flex items-center gap-2">
          <div className="grid grid-cols-1 py-2 gap-2">
            <div className="grid grid-cols-2 gap-2">
              <div className="ct-tag pl-4 pr-2 is-warning">
                Tag 02
                <button>
                  <HiOutlineX className="w-3 h-3 ml-1 icon" />
                </button>
              </div>
              <div className="ct-tag pl-4 pr-2 is-dark">
                Tag 03
                <button>
                  <HiOutlineX className="w-3 h-3 ml-1 icon" />
                </button>
              </div>
            </div>
            {Boolean(showMore) && (
              <div className="grid grid-cols-2 gap-2">
                <div className="ct-tag pl-4 pr-2 is-warning">
                  Tag 02
                  <button>
                    <HiOutlineX className="w-3 h-3 ml-1 icon" />
                  </button>
                </div>
                <div className="ct-tag pl-4 pr-2 is-dark">
                  Tag 03
                  <button>
                    <HiOutlineX className="w-3 h-3 ml-1 icon" />
                  </button>
                </div>
              </div>
            )}
          </div>
          <button
            onClick={() => setShowMore((prev) => !prev)}
            className="ct-tag is-light w-[84px]"
          >
            {showMore ? "Show less" : "+4 more"}
          </button>
          <button>
            <HiOutlinePlusCircle className="icon w-4 h-4 text-gray-500" />
          </button>
        </div>
      </td>
      <td className="pl-4">
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
