import { useState, Fragment, useMemo } from "react";
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
import { alertParams, showAlert } from "components/Alert";
import { Tag } from "components/Tag";
import { BASE_SCHEMA } from "constant/common";

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
  const [listTag, setListTag] = useState(BASE_SCHEMA);

  const listTagRender = useMemo(() => {
    return [listTag[0], listTag[1]];
  }, [listTag]);

  const listTagShowMore = useMemo(() => {
    return listTag.slice(2);
  }, [listTag]);

  const handleReserve = () => {
    showAlert({
      ...alertParams.info,
      title: "Reserve Site",
      description:
        'Your website chair.us11.instawp.xyz has been marked as "reserved" and it will NOT be deleted automatically".',
      okText: "Confirm",
      cancelText: "Cancel",
    });
  };

  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) => {
          return person.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <tr className="h-12 border-t border-gray-100">
      <td className="pr-4">
        <div className="flex items-center">
          <input type="checkbox" className="wphub-checkbox mr-4" />
          <span className="flex items-center ">
            www.google.com.vn
            <a href="#">
              <HiOutlineExternalLink className="w-4 h-4 ml-2 text-info-400" />
            </a>
          </span>
        </div>
      </td>
      <td className="pr-4">
        <span className="flex items-center">
          <HiOutlineClock className="icon mr-2" />6 day, 23 hours, 59 mins
        </span>
      </td>
      <td className="pr-4 ">108.93 MB</td>
      <td className="pr-4">
        <div className="flex items-center gap-2">
          <div className="grid grid-cols-1 py-2 gap-2">
            <div className="flex flex-wrap gap-2 w-[170px]">
              {listTagRender.map((item) => (
                <Tag key={item} content={item} type={item} />
              ))}
              {showMore && (
                <>
                  {listTagShowMore.map((item) => (
                    <Tag key={item} content={item} type={item} />
                  ))}
                </>
              )}
            </div>
          </div>

          {!showMore && (
            <button
              onClick={() => setShowMore((prev) => !prev)}
              className="text-xs"
            >
              +{listTagShowMore.length} more
            </button>
          )}

          <Popover className="relative leading-none">
            <Popover.Button className="h-[16px]">
              <HiOutlinePlusCircle className="icon" />
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
                        maxLength={10}
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
            <button
              onClick={handleReserve}
              className="wphub-btn-secondary rounded-none -ml-px"
            >
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
