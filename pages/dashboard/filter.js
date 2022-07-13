import { Fragment, useState } from "react";
import { Listbox, Transition, Tab, RadioGroup } from "@headlessui/react";
import { IconAddServer } from "components/Icons";
import { ModalAddNews } from "./modalAddNews";

const filterOptions = [
  { name: "All" },
  { name: "Actived" },
  { name: "Expried" },
  { name: "Reserved" },
];

export const Filter = () => {
  const [selected, setSelected] = useState(filterOptions[0]);
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  function openModal() {
    setIsOpen(true);
  }

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
                <Listbox.Options className="wphub-dropdown w-40">
                  {filterOptions.map((option, optionIdx) => (
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
            className="wphub-btn-secondary"
            onClick={openModal}
          >
            <IconAddServer className="mr-2 w-5 h-5 text-gray-600" />
            Add News
          </button>
        </div>
      </div>
      <ModalAddNews isOpen={isOpen} closeModal={closeModal} />
    </div>
  );
};
