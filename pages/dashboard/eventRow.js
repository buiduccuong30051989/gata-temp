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

const people = [
  { id: 1, name: "Durward Reynolds" },
  { id: 2, name: "Kenton Towne" },
  { id: 3, name: "Therese Wunsch" },
  { id: 4, name: "Benedict Kessler" },
  { id: 5, name: "fKatelyn Rohan" },
  { id: 6, name: "sDurward Reynolds" },
  { id: 7, name: "gKenton Towne" },
  { id: 8, name: "gTherese Wunsch" },
  { id: 9, name: "zBenedict Kessler" },
  { id: 10, name: "wKatelyn Rohan" },
];

const MoreActions = () => (
  <div>
    {MORE_ACTIONS.map((item) => (
      <Menu.Item key={item.title}>
        <Link href={item.path}>
          <a className="wphub-dropdown-item">{item.title}</a>
        </Link>
      </Menu.Item>
    ))}
  </div>
);

export const EventRow = () => {
  const [showMore, setShowMore] = useState(false);

  const [selectedPerson, setSelectedPerson] = useState([]);
  const [query, setQuery] = useState("");

  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) => {
          return person.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <tr className="h-12 border-t border-gray-100">
      <td className="pr-4">
        <input type="checkbox" className="wphub-checkbox" />
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
          <Popover className="relative">
            <Popover.Button>
              <HiOutlinePlusCircle className="icon w-4 h-4 text-gray-500" />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="wphub-dropdown right-0 origin-top-right w-56 top-full z-[1]">
                <Combobox
                  multiple
                  value={selectedPerson}
                  onChange={setSelectedPerson}
                >
                  <div className="relative">
                    <div className="relative flex items-center text-gray-400 focus-within:text-gray-500">
                      <span className="absolute inset-0 flex items-center pointer-events-none select-none">
                        <HiOutlineSearch className="ml-4 h-4" />
                      </span>
                      <Combobox.Input
                        onChange={(event) => setQuery(event.target.value)}
                        type="text"
                        placeholder="Search"
                        className="pl-10 pr-12 w-full h-10 focus:text-black text-sm bg-gray-100 focus:bg-gray-50 border border-gray-100 focus:border-teal-400 rounded-lg focus:outline-none appearance-none focus:ring-0"
                      />
                      <div className="absolute right-0 flex items-center pointer-events-none select-none">
                        <span className="mr-4">/</span>
                      </div>
                    </div>
                  </div>

                  <div className="customized-scrollbar h-[200px] overflow-y-auto py-2 ">
                    <Combobox.Options static>
                      {filteredPeople.map((person) => (
                        <Combobox.Option
                          className="wphub-dropdown-item filter-option"
                          key={person.id}
                          value={person.name}
                        >
                          {person.name}
                          <HiOutlineCheck className="icon w-4 h-4 absolute right-2" />
                        </Combobox.Option>
                      ))}
                    </Combobox.Options>
                  </div>
                </Combobox>
                <div className="overlay-showmore pt-20"></div>
              </Popover.Panel>
            </Transition>
          </Popover>
        </div>
      </td>
      <td className="pl-4">
        <div className="flex justify-end">
          <Tooltip content="Auto Login">
            <button className="wphub-btn-secondary rounded-none rounded-l-lg">
              <span className="icon is-small">
                <HiOutlineLogout className="w-5 h-5 text-gray-500" />
              </span>
            </button>
          </Tooltip>
          <Tooltip content="Reserve">
            <button className="wphub-btn-secondary rounded-none -ml-px">
              <span className="icon is-small">
                <HiOutlineFlag className="w-5 h-5 text-gray-500" />
              </span>
            </button>
          </Tooltip>
          <Tooltip content="Save Template">
            <button className="wphub-btn-secondary rounded-none -ml-px">
              <span className="icon is-small">
                <HiOutlineTemplate className="w-5 h-5 text-gray-500" />
              </span>
            </button>
          </Tooltip>
          <Dropdown
            btnClass="icon is-small"
            menuClass="relative wphub-btn-secondary rounded-none rounded-r-lg -ml-px"
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
