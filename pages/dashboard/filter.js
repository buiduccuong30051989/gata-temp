import { Fragment, useState } from "react";
import { Listbox, Transition, Tab, RadioGroup } from "@headlessui/react";
import { IconAddServer } from "components/Icons";
import { Modal } from "components/Modal";
import {
  HiOutlineCollection,
  HiOutlineTemplate,
  HiOutlineFlag,
  HiOutlineClock,
  HiOutlineCheck,
} from "react-icons/hi";
import randomWords from "random-words";

const filterOptions = [
  { name: "All" },
  { name: "Actived" },
  { name: "Expried" },
  { name: "Reserved" },
];

const mockDataScratchField = [
  "Choose WP version",
  "Choose PHP version",
  "Choose Configuration",
];

const mockDataScratchOptions = [
  "General PHP / Laravel",
  "Laravel Octane",
  "Static HTML",
  "Symfony &lt; 4.0",
  "Symfony (Dev) &lt; 4.0",
  "Symfony &gt;= 4.0",
];

const planOptions = [
  {
    title: "Temporary Site",
    value: "temporary",
    desc: "Expires in 7 days",
  },
  {
    title: "Reserved Site",
    value: "reserved",
    desc: "Does not expire",
  },
];

export const Filter = ({ setType, type }) => {
  const [selected, setSelected] = useState(filterOptions[0]);
  const [isOpen, setIsOpen] = useState(true);
  const [generateWord, setGenerateWord] = useState("");
  const [plan, setPlan] = useState("temporary");
  const [template, setTemplate] = useState(null);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const handleGenerateWord = (e) => {
    e.preventDefault();
    const word = randomWords();
    setGenerateWord(word);
  };

  return (
    <div className="flex justify-between mt-3 w-full">
      <div className="flex">
        <span className="z-20 mr-4">
          <Listbox value={selected} onChange={setSelected}>
            <div className="relative">
              <Listbox.Button className="flex items-center justify-between px-3 py-2 w-40 text-gray-900 text-sm bg-white border border-gray-200 rounded-lg">
                <span className="flex items-center truncate">
                  <span className="truncate">{selected.name}</span>
                </span>
                <span className="flex flex-shrink-0 items-center">
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 text-gray-500"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.5733 7.74584C13.5733 7.63474 13.5289 7.52824 13.45 7.45L10.2917 4.29167C10.2161 4.21111 10.1105 4.16541 10 4.16541C9.88952 4.16541 9.78395 4.21111 9.70834 4.29167L6.55001 7.45C6.47113 7.52824 6.42676 7.63474 6.42676 7.74584C6.42676 7.85694 6.47113 7.96344 6.55001 8.04167L6.71667 8.20834C6.79507 8.28972 6.90369 8.33498 7.01667 8.33334H12.9833C13.0963 8.33498 13.2049 8.28972 13.2833 8.20834L13.45 8.04167C13.5289 7.96344 13.5733 7.85694 13.5733 7.74584ZM6.42676 12.2542C6.42676 12.3653 6.47113 12.4718 6.55001 12.55L9.70834 15.7083C9.78395 15.7889 9.88952 15.8346 10 15.8346C10.1105 15.8346 10.2161 15.7889 10.2917 15.7083L13.45 12.55C13.5289 12.4718 13.5733 12.3653 13.5733 12.2542C13.5733 12.1431 13.5289 12.0366 13.45 11.9583L13.2833 11.7917C13.2049 11.7103 13.0963 11.665 12.9833 11.6667H7.01667C6.90369 11.665 6.79507 11.7103 6.71667 11.7917L6.55001 11.9583C6.47113 12.0366 6.42676 12.1431 6.42676 12.2542Z"
                      fill="currentColor"
                    />
                  </svg>
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
                <Listbox.Options className="forge-dropdown w-40">
                  {filterOptions.map((option, optionIdx) => (
                    <Listbox.Option
                      key={optionIdx}
                      className={({ active }) =>
                        `forge-dropdown-item text-gray-900 ${
                          active && "bg-gray-100"
                        }`
                      }
                      value={option}
                    >
                      {({ selected }) => (
                        <>
                          <span className={`${selected ? "bg-gray-100" : ""}`}>
                            {option.name}
                          </span>
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </span>
      </div>
      <div className="flex items-center">
        <div>
          <button
            type="button"
            className="forge-btn-secondary"
            onClick={openModal}
          >
            <IconAddServer className="mr-2 w-5 h-5 text-gray-600" />
            Add News
          </button>
        </div>
      </div>

      <Modal
        isOpen={isOpen}
        closeModal={closeModal}
        panelClassName="w-full max-w-md transform overflow-hidden bg-white rounded-2xl  text-left align-middle shadow-xl transition-all"
      >
        <Tab.Group>
          <Tab.List className="flex space-x-1 rounded-xl bg-gray-100 p-1">
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm leading-5 font-normal text-gray-700 flex items-center justify-center",
                  selected
                    ? "bg-active-link shadow text-teal-400"
                    : "hover:bg-white/[0.35]"
                )
              }
            >
              <HiOutlineCollection className="w-4 h-4 mr-2" />
              From Scratch
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm leading-5 font-normal text-gray-700 flex items-center justify-center",
                  selected
                    ? "bg-active-link shadow text-teal-400"
                    : "hover:bg-white/[0.35]"
                )
              }
            >
              <HiOutlineTemplate className="w-4 h-4 mr-2" />
              From Template
            </Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <div className="px-4 py-3">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Setup your new site
                </h3>
                <h6 className="pt-2 launch_text">
                  ⚡ Use default settings for blazing fast launch
                </h6>
                <form>
                  <div className="mt-8">
                    {mockDataScratchField.map((item) => (
                      <div className="mt-4" key={item}>
                        <label
                          htmlFor={item}
                          className="block text-sm font-light text-gray-900"
                        >
                          {item}
                        </label>
                        <select
                          className="forge-input mt-1 block w-full"
                          name={item}
                        >
                          {mockDataScratchOptions.map((item) => (
                            <option key={item} value={item}>
                              {item}
                            </option>
                          ))}
                        </select>
                      </div>
                    ))}
                    <div className="mb-4 mt-4">
                      <label
                        htmlFor="site_name"
                        className="block text-sm font-light text-gray-900"
                      >
                        Site Name
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="site_name"
                          placeholder="Keep blank for instant random site."
                          autoComplete="site-name"
                          className="forge-input mt-1 block w-full pr-20"
                          value={generateWord}
                        />
                        <button
                          onClick={handleGenerateWord}
                          className="absolute right-0 top-0 h-full px-4"
                        >
                          Generate
                        </button>
                      </div>
                    </div>

                    <RadioGroup value={plan} onChange={setPlan}>
                      <RadioGroup.Label>Plan</RadioGroup.Label>
                      <div className="flex w-full items-center justify-between mb-3 space-x-4 mt-2">
                        {planOptions.map((item) => (
                          <RadioGroup.Option
                            value={item.value}
                            key={item.value}
                            className="w-full"
                          >
                            {({ checked }) => (
                              <div
                                className={`text-sm rounded-lg w-full items-center relative shadow-sm px-5 py-2 flex cursor-pointer ${
                                  checked ? "bg-teal-50" : "bg-gray-100"
                                }`}
                              >
                                <div>
                                  {Boolean(
                                    item.value === planOptions[0].value
                                  ) && (
                                    <HiOutlineClock
                                      className={`w-5 h-5 ${
                                        checked ? "text-teal-400" : ""
                                      }`}
                                    />
                                  )}

                                  {Boolean(
                                    item.value === planOptions[1].value
                                  ) && (
                                    <HiOutlineFlag
                                      className={`w-5 h-5 ${
                                        checked ? "text-teal-400" : ""
                                      }`}
                                    />
                                  )}
                                </div>
                                <div className="text-left pl-3">
                                  <span
                                    className={`block my-0.5 text-sm font-normal ${
                                      checked ? "text-teal-400" : ""
                                    }`}
                                  >
                                    {item.title}
                                  </span>
                                  <div>
                                    <span className="block text-gray-500 text-xs font-normal">
                                      {item.desc}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            )}
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>
                  <div className="py-4 flex space-x-4">
                    <button
                      type="button"
                      className="forge-btn-secondary bg-gray-100 w-full"
                    >
                      Cancel
                    </button>
                    <button type="submit" className="forge-btn-primary w-full">
                      Create Site
                    </button>
                  </div>
                </form>
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className=" py-3">
                <div className="customized-scrollbar h-[255px] overflow-y-auto">
                  <RadioGroup value={template} onChange={setTemplate}>
                    {"cuongbeodepzaihocgioi".split("").map((item, index) => (
                      <RadioGroup.Option
                        value={`${item}-${index}`}
                        key={`${item}-${index}`}
                      >
                        {({ checked }) => (
                          <div
                            className={`flex items-center py-2 px-4 cursor-pointer  ${
                              checked ? "bg-teal-50" : "hover:bg-gray-100"
                            }`}
                          >
                            <div className="flex items-center justify-center rounded-full">
                              <label
                                className={`inline-flex flex-shirk-0 w-12 h-12 justify-center text-lg font-normal rounded-full items-center text-white uppercase ${
                                  checked ? "bg-teal-400" : "bg-gray-500/50"
                                }`}
                              >
                                {Boolean(checked) ? (
                                  <HiOutlineCheck
                                    className={`w-6 h-6 text-white`}
                                  />
                                ) : (
                                  <span>{item}</span>
                                )}
                              </label>
                            </div>
                            <div className="inline-block pl-3 pr-20">
                              <h4
                                className={`font-normal ${
                                  checked ? "text-teal-400" : "text-gray-700"
                                }`}
                              >
                                duc
                              </h4>
                              <p className="text-sm text-gray-500 mb-0">
                                abc xyz 123445
                              </p>
                            </div>
                          </div>
                        )}
                      </RadioGroup.Option>
                    ))}
                  </RadioGroup>
                </div>

                <div className="mb-3 mt-4 px-4">
                  <label
                    htmlFor="site_name"
                    className="block text-sm font-light text-gray-900"
                  >
                    Site Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="site_name"
                      placeholder="Keep blank for instant random site."
                      autoComplete="site-name"
                      className="forge-input mt-1 block w-full pr-20"
                      value={generateWord}
                    />
                    <button
                      onClick={handleGenerateWord}
                      className="absolute right-0 top-0 h-full px-4"
                    >
                      Generate
                    </button>
                  </div>
                </div>
                <div className="py-4 px-4 flex space-x-4">
                  <button
                    type="button"
                    className="forge-btn-secondary bg-gray-100 w-full"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                  <button type="submit" className="forge-btn-primary w-full">
                    Create Site
                  </button>
                </div>
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </Modal>
    </div>
  );
};
