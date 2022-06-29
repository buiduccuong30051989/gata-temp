import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";

const people = [
  { name: "All Servers" },
  { name: "Owned Servers" },
  { name: "Untagged Servers" },
];

export const Filter = () => {
  const [selected, setSelected] = useState(people[0]);
  return (
    <div className="flex justify-between mt-3 w-full">
      <div className="flex">
        <span className="z-20 mr-4">
          <Listbox value={selected} onChange={setSelected}>
            <div className="relative">
              <Listbox.Button className="flex items-center justify-between px-3 py-2 w-52 text-gray-900 text-sm bg-white border border-gray-200 rounded-lg">
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
                <Listbox.Options className="forge-dropdown w-52">
                  {people.map((person, personIdx) => (
                    <Listbox.Option
                      key={personIdx}
                      className={({ active }) =>
                        `forge-dropdown-item text-gray-900 ${
                          active && "bg-gray-100"
                        }`
                      }
                      value={person}
                    >
                      {({ selected }) => (
                        <>
                          <span className={`${selected ? "bg-gray-100" : ""}`}>
                            {person.name}
                          </span>
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                  <div className="mb-3 pb-2 border-b"></div>
                  <span className="forge-dropdown-item text-gray-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinejoin="round"
                      className="flex-shrink-0 mr-2 w-3.5 h-3.5"
                    >
                      <path d="M16 21a5 5 0 0 0 5-5 5 5 0 0 0-5-5 5 5 0 0 0-5 5 5 5 0 0 0 5 5h0zm0 3c-4.922 0-7.887 2.492-9.477 4.502C5.648 29.608 6.525 31 7.935 31h16.13c1.41 0 2.287-1.392 1.412-2.498C23.887 26.492 20.922 24 16 24z" />
                      <path
                        d="M28.02 24.975c1.939-2.59 2.985-5.74 2.98-8.975 0-8.284-6.716-15-15-15S1 7.716 1 16c0 3.419 1.074 6.477 3 9"
                        strokeLinecap="round"
                      />
                    </svg>
                    <span>Test</span>
                  </span>
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </span>
        <label className="relative flex items-center text-gray-400 focus-within:text-gray-500">
          <span className="absolute inset-0 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="ml-4 h-3"
            >
              <path
                fillRule="evenodd"
                d="M6 2a4 4 0 0 0-4 4 4 4 0 0 0 4 4 4 4 0 0 0 4-4 4 4 0 0 0-4-4zM0 6a6 6 0 0 1 2.46-4.845A6 6 0 0 1 7.824.283a6 6 0 0 1 3.867 3.818 6 6 0 0 1-.802 5.375l4.817 4.817a1 1 0 0 1-.012 1.402 1 1 0 0 1-1.402.012l-4.816-4.816a6 6 0 0 1-6.229.442A6 6 0 0 1 0 6z"
              />
            </svg>
          </span>
          <input
            type="text"
            placeholder="Search"
            className="h-full pl-10 pr-3 w-full text-gray-900 text-sm bg-white border border-gray-200 focus:border-teal-400 rounded-lg focus:outline-none appearance-none focus:ring-0"
            autoComplete="off"
            autoCorrect="off"
          />
        </label>
      </div>
      <div className="flex items-center">
        <div className="flex items-center mr-8">
          {/* <button className="inline-flex items-center justify-center px-3 py-2 text-gray-900 text-sm font-semibold rounded-lg bg-gray-200"> */}
          <button className="button bg-gray-200 border-0 px-6">
            <span className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5 text-gray-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>
            </span>
          </button>
          {/* <button className="inline-flex items-center justify-center ml-0.5 px-3 py-2 text-gray-900 text-sm font-semibold rounded-lg"> */}
          <button className="button border-0 bg-transparent px-6">
            <span className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5 text-gray-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 10h16M4 14h16M4 18h16"
                />
              </svg>
            </span>
          </button>
        </div>
        <div>
          <button
            type="button"
            className="button is-white border border-gray-200 rounded-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="mr-2 w-5 h-5 text-gray-600"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 10a2 2 0 00-2-2H5a2 2 0 00-2 2m16 4H5m14 0a2 2 0 002-2V9.702a2 2 0 00-.438-1.25L17.6 4.751A2 2 0 0016.04 4H7.96a2 2 0 00-1.561.75L3.438 8.453A2 2 0 003 9.702V12a2 2 0 002 2m14 0a2 2 0 012 2v2a2 2 0 01-2 2h-8m-6-6a2 2 0 00-2 2v1m14-6h.01M17 17h.01M14 11h.01M14 17h.01M4 20h4m-2-2v4"
              />
            </svg>
            Create Server
          </button>
        </div>
      </div>
    </div>
  );
};

{
  /* <div className="forge-dropdown w-52" style={{ display: "none" }}>
            <span className="forge-dropdown-item text-gray-900">
              All Servers
            </span>
            <span className="forge-dropdown-item text-gray-900">
              Owned Servers
            </span>
            <span className="forge-dropdown-item text-gray-900">
              Untagged Servers
            </span>
            <div className="mb-3 pb-2 border-b" />
            <span className="forge-dropdown-item text-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinejoin="round"
                className="flex-shrink-0 mr-2 w-3.5 h-3.5"
              >
                <path d="M16 21a5 5 0 0 0 5-5 5 5 0 0 0-5-5 5 5 0 0 0-5 5 5 5 0 0 0 5 5h0zm0 3c-4.922 0-7.887 2.492-9.477 4.502C5.648 29.608 6.525 31 7.935 31h16.13c1.41 0 2.287-1.392 1.412-2.498C23.887 26.492 20.922 24 16 24z" />
                <path
                  d="M28.02 24.975c1.939-2.59 2.985-5.74 2.98-8.975 0-8.284-6.716-15-15-15S1 7.716 1 16c0 3.419 1.074 6.477 3 9"
                  strokeLinecap="round"
                />
              </svg>
              <span>Test</span>
            </span>
          </div> */
}
