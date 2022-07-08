import { Fragment, useState } from "react";
import { Listbox, Transition, Tab } from "@headlessui/react";
import { IconAddServer } from "components/Icons";
import { Modal } from "components/Modal";
import { HiOutlineCollection, HiOutlineTemplate } from "react-icons/hi";
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

export const Filter = ({ setType, type }) => {
  const [selected, setSelected] = useState(filterOptions[0]);
  const [isOpen, setIsOpen] = useState(true);
  const [generateWord, setGenerateWord] = useState("");

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const handleGenerateWord = () => {
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
                  {" "}
                  Setup your new site{" "}
                </h3>
                <h6 className="pt-2 launch_text">
                  {" "}
                  ⚡ Use default settings for blazing fast launch{" "}
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
                    <div id="headlessui-radiogroup-62" role="radiogroup">
                      <div
                        className="flex w-full items-center justify-between mt-7 mb-3"
                        role="none"
                      >
                        <div
                          className="border-transparent bg-white text-insta-primary text-sm border rounded-lg w-full items-center relative text-sm shadow-sm px-5 py-2 mr-0.5 flex cursor-pointer focus:outline-none"
                          id="headlessui-radiogroup-option-63"
                          role="radio"
                          aria-checked="true"
                          tabIndex={0}
                          style={{ border: "transparent" }}
                        >
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              style={{
                                fill: "rgba(21, 184, 129, 1)",
                                transform: "",
                                msfilter: "",
                              }}
                            >
                              {" "}
                              <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />{" "}
                              <path d="M13 7h-2v5.414l3.293 3.293 1.414-1.414L13 11.586z" />{" "}
                            </svg>
                          </div>
                          <div className="text-left pl-3">
                            <span className="block my-0.5 text-sm font-medium">
                              Temporary Site
                            </span>
                            <div>
                              <span className="block text-gray-500 text-xs font-regular">
                                {" "}
                                Expires in 7 days{" "}
                              </span>
                            </div>
                          </div>
                          <span
                            className="border bg-v2-border-insta-primary absolute -inset-px rounded-lg pointer-events-none"
                            aria-hidden="true"
                          />
                        </div>
                        <div
                          className="border-gray-300 cust-bg-gray text-gray-700 text-sm w-full items-center relative text-sm shadow-sm px-5 py-2 mr-0.5 flex cursor-pointer focus:outline-none"
                          id="headlessui-radiogroup-option-64"
                          role="radio"
                          aria-checked="false"
                          tabIndex={-1}
                          style={{ border: "transparent" }}
                        >
                          <div>
                            <svg
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10 1.5V7M1 19V15V19ZM1 15V3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H9.5L10.5 2H19L16 8L19 14H10.5L9.5 13H3C2.46957 13 1.96086 13.2107 1.58579 13.5858C1.21071 13.9609 1 14.4696 1 15V15Z"
                                stroke="#4B5563"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>{" "}
                          </div>
                          <div className="text-left pl-3">
                            <span className="block my-0.5 text-sm font-medium">
                              Reserved Site
                            </span>
                            <div>
                              <button type="button">
                                <span className="block text-gray-500 text-xs font-regular">
                                  {" "}
                                  Does not expire{" "}
                                </span>
                              </button>
                            </div>
                          </div>
                          <span
                            className="border border-transparent absolute -inset-px rounded-lg pointer-events-none"
                            aria-hidden="true"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="px-5 py-4 flex">
                    <button
                      type="button"
                      className=" mr-2 mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm "
                    >
                      {" "}
                      Cancel{" "}
                    </button>
                    <button
                      type="submit"
                      className=" ml-2 disabled:opacity-50 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-insta-primary text-base font-medium text-white hover:bg-insta-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm "
                    >
                      {" "}
                      Create Site{" "}
                    </button>
                  </div>
                </form>
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </Modal>
    </div>
  );
};
