import { useState, Fragment } from "react";
import { AuthLayout } from "components/Layout";
import { Tab, Transition, Popover, Listbox, Combobox } from "@headlessui/react";
import { Switch } from "components/Switch";
import { Modal } from "components/Modal";
import {
  HiOutlineTemplate,
  HiOutlineLockClosed,
  HiOutlineShare,
  HiOutlineX,
  HiOutlineCode,
  HiOutlineLink,
  HiOutlineDocumentText,
  HiOutlinePencilAlt,
  HiOutlineCog,
  HiOutlineTrash,
  HiOutlineSelector,
  HiOutlineSearch,
  HiOutlineCheck,
} from "react-icons/hi";
import { Tooltip } from "components/Tooltip";
import { classNames } from "utils/helper";
import { listWpVersion, listPhpVersion, phpConfig } from "constant/data";

const tabConfig = [
  {
    title: "General",
    icon: <HiOutlineCog className="w-4 h-4 mr-2" />,
  },
  {
    title: "PHP",
    icon: <HiOutlineCog className="w-4 h-4 mr-2" />,
  },
  {
    title: "WordPress",
    icon: <HiOutlineCog className="w-4 h-4 mr-2" />,
  },
  {
    title: "Faker",
    icon: <HiOutlineCog className="w-4 h-4 mr-2" />,
  },
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

export default function Configurations() {
  const [isOpen, setIsOpen] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [configItem, setConfigItem] = useState(1);
  const [selected, setSelected] = useState(listWpVersion[0]);
  const [enabled, setEnabled] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState([]);

  const [query, setQuery] = useState("");

  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) => {
          return person.name.toLowerCase().includes(query.toLowerCase());
        });

  const closeModal = () => {
    setIsOpen(false);
  };

  function openModal() {
    setIsOpen(true);
  }

  const TabGeneral = () => (
    <>
      <div className="flex items-center">
        <label className="text-gray-500 w-52">Wordress Version</label>
        <Listbox value={selected} onChange={setSelected}>
          <div className="relative">
            <Listbox.Button className="flex  w-52 items-center justify-between px-3 py-2  text-gray-900 text-sm bg-white border border-gray-200 rounded-lg">
              <span className="flex items-center truncate">
                <span className="truncate">{selected.title}</span>
              </span>
              <span className="flex flex-shrink-0 items-center">
                <HiOutlineSelector className="w-4 h-4 text-gray-500" />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Listbox.Options className="wphub-dropdown w-52 z-20">
                {listWpVersion.map((option, optionIdx) => (
                  <Listbox.Option
                    key={optionIdx}
                    className={({ active }) =>
                      `wphub-dropdown-item text-gray-900 ${
                        active && "bg-gray-100"
                      }`
                    }
                    value={option}
                  >
                    {({ selected }) => (
                      <>
                        <span className={`${selected ? "bg-gray-100" : ""}`}>
                          {option.title}
                        </span>
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>
      <div className="flex items-center mt-3">
        <label className="text-gray-500 w-52">PHP Version</label>
        <Listbox value={selected} onChange={setSelected}>
          <div className="relative">
            <Listbox.Button className="flex items-center justify-between px-3 py-2 w-52 text-gray-700 text-sm bg-white border border-gray-200 rounded-lg">
              <span className="flex items-center truncate">
                <span className="truncate">{selected.title}</span>
              </span>
              <span className="flex flex-shrink-0 items-center">
                <HiOutlineSelector className="w-4 h-4 text-gray-500" />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Listbox.Options className="wphub-dropdown w-52 z-20">
                {listPhpVersion.map((option, optionIdx) => (
                  <Listbox.Option
                    key={optionIdx}
                    className={({ active }) =>
                      `wphub-dropdown-item text-gray-900 ${
                        active && "bg-gray-100"
                      }`
                    }
                    value={option.value}
                  >
                    {({ selected }) => (
                      <>
                        <span className={`${selected ? "bg-gray-100" : ""}`}>
                          {option.title}
                        </span>
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>
    </>
  );

  const TabWordpress = () => (
    <>
      <div className="grid grid-cols-2 gap-8">
        {["WP_DEBUG", "WP_AUTO_UPDATE_CORE", "AUTOMATIC_UPDATER_DISABLED"].map(
          (item) => (
            <div className="flex items-center">
              <input id={item} type="checkbox" className="wphub-checkbox" />
              <label for={item} className="text-gray-700 ml-2">
                {item}
              </label>
            </div>
          )
        )}
      </div>

      <div className="grid grid-cols-2 gap-8 mt-3">
        <div>
          <h3 className="text-gray-700">Multi Site Installation</h3>
          <p className="text-gray-500">
            InstaWP will automatically install and configure multi site
            wordpress.
          </p>
        </div>
        <div>
          <Switch enabled={enabled} setEnabled={setEnabled} />
        </div>
      </div>

      <div className="mt-3">
        <label className="text-gray-700">Pre-Install Plugins</label>
        <Popover className="relative">
          <Popover.Button className="w-full">
            <div className="wphub-input flex gap-4 h-[38px] w-full">
              {selectedPerson.map((item) => (
                <div className="border border-gray-100 inline-flex">
                  {item.name}
                </div>
              ))}
            </div>
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
                  {/* {query.length > 0 && (
                    <Combobox.Option value={{ id: null, name: query }}>
                      Create "{query}"
                    </Combobox.Option>
                  )} */}
                  <Combobox.Options static>
                    {filteredPeople.map((person) => (
                      <Combobox.Option
                        className="wphub-dropdown-item filter-option"
                        key={person.id}
                        value={person}
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
        <span className="text-gray-300 text-xs mt-1">
          Plugin slugs from wp.org repo
        </span>
      </div>
    </>
  );

  const TabPhp = () => (
    <div className="px-4 py-2 space-y-4">
      {phpConfig.map((item, index) => (
        <div key={item.title} className="flex items-center">
          <label htmlFor={item.label} className="text-gray-700  mr-5 w-[220px]">
            <p>{item.label}</p>
            {Boolean(item.unit) && <small>({item.unit})</small>}
          </label>
          <div className="flex-grow">
            <input
              autoComplete="off"
              type="number"
              id={item.title}
              className="wphub-input pr-2 w-[100px]"
              tabIndex={index}
              defaultValue={item.defaultValue}
            />
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <AuthLayout>
      <div>
        <div className="flex justify-between w-full">
          <h2 className="wphub-h2">Configurations</h2>
        </div>

        <div className="mt-3 w-full text-right">
          <button
            type="button"
            className="wphub-btn-secondary"
            onClick={openModal}
          >
            <HiOutlineCog className="mr-2 w-5 h-5 text-gray-600" />
            Add New Configurations
          </button>
        </div>

        <section className="py-8 flex gap-8">
          <div className="w-[300px] flex-shirk bg-white rounded  shadow">
            <ul>
              {[1, 2, 3, 4, 5].map((item) => (
                <li
                  key={item}
                  className={`pt-4 pb-3 cursor-pointer px-4 border-b border-gray-100 ${
                    item === configItem ? "bg-gray-50" : ""
                  }`}
                  onClick={() => setConfigItem(item)}
                >
                  <span className>
                    <span className="text-gray-700 text-sm font-normal">
                      default
                    </span>
                    <span className="text-xs text-gray-300 pl-4">
                      4 months ago
                    </span>
                  </span>
                  <div className="flex items-center float-right">
                    {Boolean(item === configItem) && (
                      <Popover className="relative w-4 h-4 ml-3 text-gray-500">
                        <Tooltip content="Edit configuration name">
                          <Popover.Button>
                            <HiOutlinePencilAlt className="h-4 w-4" />
                          </Popover.Button>
                        </Tooltip>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <Popover.Panel className="wphub-dropdown right-[-40px] origin-top-right w-72 top-full z-[1] py-3 px-4">
                            <div className="mb-3">
                              <label
                                for="configuration_name"
                                className="text-gray-500 cursor-pointer select-none block mb-2"
                              >
                                Configuration Name
                              </label>
                              <input
                                id="configuration_name"
                                type="text"
                                className="wphub-input w-full mr-2"
                                placeholder="Current configuration name"
                              />
                            </div>
                            <div className="flex space-x-4">
                              <button
                                type="button"
                                className="wphub-btn-secondary bg-gray-100 w-full"
                              >
                                Cancel
                              </button>
                              <button
                                type="submit"
                                className="wphub-btn-primary w-full"
                              >
                                Update Name
                              </button>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </Popover>
                    )}
                    <button className=" ml-3 text-gray-500">
                      <HiOutlineTrash className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="w-full pt-2 flex">
                    <span className="text-gray-500 text-sm font-light">
                      WP 6.0
                    </span>
                    <span className="text-gray-500 text-sm font-light pl-4">
                      PHP 8.1
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-grow">
            <Tab.Group>
              <Tab.List className="relative flex justify-between items-center">
                <div className=" inline-flex space-x-1 rounded-xl bg-gray-300/50 p-1 w-auto ">
                  {tabConfig.map((item) => (
                    <Tab
                      className={({ selected }) =>
                        classNames(
                          "w-full rounded-lg py-2.5 text-sm leading-5 px-8 font-light  flex items-center justify-center",
                          selected
                            ? "bg-active-link shadow text-primary-400"
                            : "hover:bg-white/[0.35] text-gray-700"
                        )
                      }
                    >
                      {item.icon}
                      {item.title}
                    </Tab>
                  ))}
                </div>
                <div className=" inline-flex space-x-4 ">
                  <button className="wphub-btn-secondary">
                    <HiOutlineCog className="w-4 h-4 mr-2" />
                    Save As New
                  </button>
                  <button className="wphub-btn-primary">
                    <HiOutlineCog className="w-4 h-4 mr-2" />
                    Save
                  </button>
                </div>
              </Tab.List>
              <Tab.Panels className="mt-3 p-4 rounded bg-white shadow">
                <Tab.Panel>
                  <TabGeneral />
                </Tab.Panel>
                <Tab.Panel>
                  <TabPhp />
                </Tab.Panel>
                <Tab.Panel>
                  <div className="grid grid-cols-2 gap-8">
                    {[
                      "WP_DEBUG",
                      "WP_AUTO_UPDATE_CORE",
                      "AUTOMATIC_UPDATER_DISABLED",
                    ].map((item) => (
                      <div className="flex items-center">
                        <input
                          id={item}
                          type="checkbox"
                          className="wphub-checkbox"
                        />
                        <label for={item} className="text-gray-700 ml-2">
                          {item}
                        </label>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-8 mt-3">
                    <div>
                      <h3 className="text-gray-700">Multi Site Installation</h3>
                      <p className="text-gray-500">
                        InstaWP will automatically install and configure multi
                        site wordpress.
                      </p>
                    </div>
                    <div>
                      <Switch enabled={enabled} setEnabled={setEnabled} />
                    </div>
                  </div>

                  <div className="mt-3">
                    <label className="text-gray-700">Pre-Install Plugins</label>
                    <Popover className="relative">
                      <Popover.Button className="w-full">
                        <div className="wphub-input flex gap-4 h-[38px] w-full">
                          {selectedPerson.map((item) => (
                            <div className="border border-gray-100 inline-flex">
                              {item.name}
                            </div>
                          ))}
                        </div>
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
                                  onChange={(event) =>
                                    setQuery(event.target.value)
                                  }
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
                              {query.length > 0 && (
                                <Combobox.Option
                                  value={{ id: null, name: query }}
                                >
                                  Create "{query}"
                                </Combobox.Option>
                              )}
                              <Combobox.Options static>
                                {filteredPeople.map((person) => (
                                  <Combobox.Option
                                    className="wphub-dropdown-item filter-option"
                                    key={person.id}
                                    value={person}
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
                    <span className="text-gray-300 text-xs mt-1">
                      Plugin slugs from wp.org repo
                    </span>
                  </div>
                  {/* <TabWordpress /> */}
                  {/* <TabFaker /> */}
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
            {/* <div className="bg-white ml-3 pb-14 rounded">
              <div className="w-full px-8 pt-6 pb-4 border-b">

                  <div className="relative inline-block xl:max-w-5xl">
                    <div>
                      <button
                        type="button"
                        className="flex float-left mr-3 items-center justify-center px-3 py-2 mt-3 space-x-3 text-gray-600 transition-colors duration-200 transform border rounded-md md:mt-0 focus:border-teal-500 focus:ring focus:ring-primary focus:ring-opacity-40 dark:text-gray-200 dark:border-gray-200 dark:focus:border-teal-500 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="h-6 w-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 16v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-7a2 2 0 012-2h2m3-4H9a2 2 0 00-2 2v7a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-1m-1 4l-3 3m0 0l-3-3m3 3V3"
                          />
                        </svg>
                        <span>Save As New</span>
                      </button>
                      <button
                        type="button"
                        className="flex bg-insta-primary text-white items-center border border-transparent justify-center px-4 py-2 mt-4 space-x-3 transition-colors duration-200 transform rounded-md md:mt-0 focus:border-teal-500 focus:ring focus:ring-primary focus:ring-opacity-40 focus:outline-none"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="h-6 w-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
                          />
                        </svg>
                        <span>Save</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div id="general_config">
                <div className="w-full px-8 flex">
                  <div className="lg:w-5/6 md:w-1/2">
                    <div className="relative flex items-start">
                      <div className="w-full pt-4 pr-4 flex">
                        <label
                          htmlFor="wp_version"
                          className="c-min-width float-left text-base text-gray-700 text-left pb-1 pt-3 pr-5"
                        >
                          Wordress Version
                        </label>
                        <div className="w-48">
                          <div className="mt-1 relative">
                            <button
                              id="headlessui-listbox-button-147"
                              type="button"
                              aria-haspopup="true"
                              aria-expanded="false"
                              className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-primary-900 focus:border-primary-900 sm:text-sm h-11"
                            >
                              <span className="w-full inline-flex truncate">
                                <span className="truncate">6.0</span>
                                <span className=" inline-flex items-center px-2.5 ml-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700 ">
                                  {" "}
                                  Recommended{" "}
                                </span>
                              </span>
                              <span className=" absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none ">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  className="h-5 w-5 text-gray-400"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full px-8 flex">
                  <div className="lg:w-5/6 md:w-1/2">
                    <div className="relative flex items-start">
                      <div className="w-full pt-4 pr-4 flex">
                        <label
                          htmlFor="wp_version"
                          className="c-min-width float-left text-base text-gray-700 text-left pb-1 pt-3 pr-5"
                        >
                          PHP Version
                        </label>
                        <div className="w-48">
                          <div className="relative">
                            <button
                              id="headlessui-listbox-button-149"
                              type="button"
                              aria-haspopup="true"
                              aria-expanded="false"
                              className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-primary-900 focus:border-primary-900 sm:text-sm h-11"
                            >
                              <span className="w-full inline-flex truncate">
                                <span className="truncate">8.1</span>
                              </span>
                              <span className=" absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none ">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  className="h-5 w-5 text-gray-400"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </span>
                            </button>
                          </div>
                        </div>
                        <div className="ml-2 text-xs flex items-center">
                          <span className=" inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700 ">
                            {" "}
                            Recommended Version: 7.4
                          </span>
                        </div>
                        <button className="text-xs ml-1">
                          [<span className="underline">Set</span>]
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </section>
      </div>
    </AuthLayout>
  );
}
