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
  HiOutlineCheckCircle,
  HiOutlinePlusCircle,
} from "react-icons/hi";
import { Tooltip } from "components/Tooltip";
import { classNames } from "utils/helper";
import {
  listWpVersion,
  listPhpVersion,
  phpConfig,
  fakerConfig,
} from "constant/data";
import { Badge } from "components/Badge";
import { alertParams, showAlert } from "components/Alert";
import { toatsSuccess } from "components/Toats";

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

  const handleDeleteConfiguration = () => {
    showAlert({
      ...alertParams.danger(),
      title: "Are you sure you want to delete this Configuration?",
      okText: "Delete",
      okBtnClass: "wphub-btn-primary bg-danger-400",
      cancelText: 'Cancel'
    });
  };

  const handleSaveAsNewConfiguration = () => {
    toatsSuccess({
      content: "Data Saved!"
    })
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
      <div className="grid grid-cols-2 gap-4">
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

      <div className="grid grid-cols-2 gap-4 mt-8">
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

      {["Plugins", "Themes"].map((item) => (
        <div key={item} className="mt-8">
          <label className="text-gray-700">Pre-Install {item}</label>
          <Popover className="relative flex mt-1">
            <Popover.Button className="w-full">
              <div className="wphub-input flex flex-wrap gap-2 min-h-[38px] w-full relative">
                {selectedPerson.map((item) => (
                  <Badge title={item.name} color="primary" />
                ))}
                <HiOutlineSelector className="w-5 h-5 text-gray-400 absolute right-2 top-2" />
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
              <Popover.Panel className="wphub-dropdown right-0 origin-top-right w-full top-full z-[1]">
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
                    {query.length > 0 && (
                      <Combobox.Option value={{ id: null, name: query }}>
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
                  <div className="px-4  text-gray-500 pt-2 border-t border-gray-200">
                    Add {item} slug from wp.org
                  </div>
                </Combobox>
              </Popover.Panel>
            </Transition>
          </Popover>
          <span className="text-gray-500 text-xs mt-1">
            {item} slugs from wp.org repo
          </span>
        </div>
      ))}

      <div className="mt-8">
        <label className="text-gray-700">URL for themes or plugin</label>
        <div className="grid grid-cols-2 gap-4 mt-1">
          <input type="text" className="wphub-input" />
          <div className="flex items-center gap-4">
            {["Themes", "Plugins"].map((item) => (
              <div className="flex items-center">
                <input
                  id={item}
                  name="type_link"
                  type="radio"
                  className="wphub-checkbox mr-2"
                />
                <label for={item} className="text-gray-500">
                  {item}
                </label>
              </div>
            ))}
            <button>
              <HiOutlinePlusCircle className="w-6 h-6 text-primary-400" />
            </button>
          </div>
        </div>
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

  const TabFaker = () => (
    <div className="px-4 py-2 space-y-4">
      <div className="flex items-center">
        <label htmlFor="core_faker" className="text-gray-700  mr-5 w-[220px]">
          <p>Core Faker</p>
        </label>
        <div className="flex-grow">
          <Switch enabled={enabled} setEnabled={setEnabled} />
        </div>
      </div>
      {fakerConfig.map((item, index) => (
        <div key={item} className="flex items-center">
          <label htmlFor={item} className="text-gray-700  mr-5 w-[220px]">
            <p>{item}</p>
          </label>
          <div className="flex-grow">
            <input
              autoComplete="off"
              type="number"
              id={item}
              className="wphub-input pr-2 w-[100px]"
              tabIndex={index}
            />
          </div>
        </div>
      ))}
      <div className="flex items-center">
        <label
          htmlFor="attachment_keyword"
          className="text-gray-700  mr-5 w-[220px]"
        >
          <p>Attachment Keyword</p>
        </label>
        <div className="flex-grow">
          <input
            type="text"
            id="attachment_keyword"
            className="wphub-input pr-2 w-[200px]"
            placeholder="Please Enter a Keyword"
          />
        </div>
      </div>
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
                      <HiOutlineTrash
                        onClick={handleDeleteConfiguration}
                        className="h-4 w-4"
                      />
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
                  <button onClick={handleSaveAsNewConfiguration} className="wphub-btn-secondary">
                    <HiOutlineCog className="w-4 h-4 mr-2" />
                    Save As New
                  </button>
                  <button onClick={handleSaveAsNewConfiguration} className="wphub-btn-primary">
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
                  <div className="grid grid-cols-2 gap-4">
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

                  <div className="grid grid-cols-2 gap-4 mt-8">
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

                  {["Plugins", "Themes"].map((item) => (
                    <div key={item} className="mt-8">
                      <label className="text-gray-700">
                        Pre-Install {item}
                      </label>
                      <Popover className="relative flex mt-1">
                        <Popover.Button className="w-full">
                          <div className="wphub-input flex flex-wrap gap-2 min-h-[38px] w-full relative">
                            {selectedPerson.map((item) => (
                              <Badge title={item.name} color="primary" />
                            ))}
                            <HiOutlineSelector className="w-5 h-5 text-gray-400 absolute right-2 top-2" />
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
                          <Popover.Panel className="wphub-dropdown right-0 origin-top-right w-full top-full z-[1]">
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
                              <div className="px-4  text-gray-500 pt-2 border-t border-gray-200">
                                Add {item} slug from wp.org
                              </div>
                            </Combobox>
                          </Popover.Panel>
                        </Transition>
                      </Popover>
                      <span className="text-gray-500 text-xs mt-1">
                        {item} slugs from wp.org repo
                      </span>
                    </div>
                  ))}

                  <div className="mt-8">
                    <label className="text-gray-700">
                      URL for themes or plugin
                    </label>
                    <div className="grid grid-cols-2 gap-4 mt-1">
                      <input type="text" className="wphub-input" />
                      <div className="flex items-center gap-4">
                        {["Themes", "Plugins"].map((item) => (
                          <div className="flex items-center">
                            <input
                              id={item}
                              name="type_link"
                              type="radio"
                              className="wphub-checkbox mr-2"
                            />
                            <label for={item} className="text-gray-500">
                              {item}
                            </label>
                          </div>
                        ))}
                        <button>
                          <HiOutlinePlusCircle className="w-6 h-6 text-primary-400" />
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* <TabWordpress /> */}
                  {/* <TabFaker /> */}
                </Tab.Panel>
                <Tab.Panel>
                  <TabFaker />
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </section>
      </div>
      <Modal
        isOpen={isOpen}
        closeModal={closeModal}
        modalTitle="Add New Configuration"
      >
        <div className="my-3">
          <label className="block" for="configuration">
            Configuration Name
          </label>
          <input
            id="configuration"
            type="text"
            className="wphub-input mt-1 w-full"
          />
        </div>
        <div className="py-4 flex space-x-4">
          <button
            type="button"
            className="wphub-btn-secondary bg-gray-100 w-full"
            onClick={() => closeModal()}
          >
            Cancel
          </button>
          <button type="submit" className="wphub-btn-primary w-full">
            Add Configuration
          </button>
        </div>
      </Modal>
    </AuthLayout>
  );
}
