import { Transition, Menu } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Tooltip } from "../../components/Tooltip";
import { VIEW_TYPE } from "../../constant/common";

export const ServerCard = ({ type = VIEW_TYPE.GRID }) => {
  const [loading, setLoading] = useState(false);

  if (type === VIEW_TYPE.GRID)
    return (
      <div className="flex flex-col w-1/4">
        <div className="flex flex-auto flex-col m-2 p-6 bg-white rounded-lg">
          <div className="flex items-center">
            <div className="w-100 mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                className="text-teal-400 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                />
              </svg>
            </div>
            <div className="truncate">
              <a
                className="text-teal-400 text-sm font-normal tracking-normal truncate"
                title="TESTSERVER"
                href="/servers/570738"
              >
                TESTSERVER
              </a>
            </div>
          </div>
          <div className="flex flex-col flex-grow ml-10 text-gray-500 text-xs">
            <div className="mt-2">
              PHP 8.1<span>, MySQL 8</span>
            </div>
            <div className="mt-2">
              <div className="inline-block">
                <Tooltip content="Click to copy">
                  <div
                    className="-mx-1 px-1 rounded-sm cursor-pointer"
                    tabIndex={0}
                  >
                    <div className="flex items-center">
                      <div className>38.54.1.72</div>
                      <svg
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-1 w-3 h-3"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10.5001 9.33332V2.33332C10.5001 1.68899 9.97775 1.16666 9.33341 1.16666H2.33341C1.68908 1.16666 1.16675 1.68899 1.16675 2.33332V9.33332C1.16675 9.97766 1.68908 10.5 2.33341 10.5H9.33341C9.97775 10.5 10.5001 9.97766 10.5001 9.33332ZM2.33341 2.33332H9.33342V9.33332H2.33341V2.33332ZM11.6667 10.5V3.49999C12.3111 3.49999 12.8334 4.02232 12.8334 4.66666V10.5C12.8334 11.7887 11.7887 12.8333 10.5001 12.8333H4.66675C4.02242 12.8333 3.50008 12.311 3.50008 11.6667H10.5001C11.1444 11.6667 11.6667 11.1443 11.6667 10.5Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </div>
                </Tooltip>
              </div>
            </div>
            <div className="flex items-center mt-2 truncate" title="Test">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinejoin="round"
                className="flex-shrink-0 mr-1 w-3 h-3"
              >
                <path d="M16 21a5 5 0 0 0 5-5 5 5 0 0 0-5-5 5 5 0 0 0-5 5 5 5 0 0 0 5 5h0zm0 3c-4.922 0-7.887 2.492-9.477 4.502C5.648 29.608 6.525 31 7.935 31h16.13c1.41 0 2.287-1.392 1.412-2.498C23.887 26.492 20.922 24 16 24z" />
                <path
                  d="M28.02 24.975c1.939-2.59 2.985-5.74 2.98-8.975 0-8.284-6.716-15-15-15S1 7.716 1 16c0 3.419 1.074 6.477 3 9"
                  strokeLinecap="round"
                />
              </svg>
              <span className="truncate">Test</span>
            </div>
          </div>
          <div className="flex items-center justify-between mt-7">
            <div>
              {loading ? (
                <span className="text-uppercase inline-flex items-center px-2.5 py-1.5 text-xs rounded-full bg-blue-50 text-gray-900">
                  <span className="relative flex mr-1.5 w-2.5 h-2.5">
                    <span className="absolute inline-flex w-full h-full rounded-full animate-ping bg-blue-400" />
                    <span className="relative inline-flex w-2.5 h-2.5 rounded-full bg-blue-400" />
                  </span>
                  Connecting
                </span>
              ) : (
                <span className="text-uppercase inline-flex items-center px-2.5 py-1.5 text-xs rounded-full bg-teal-400 bg-opacity-10 text-gray-900">
                  <span className="relative flex mr-1.5 w-2.5 h-2.5">
                    <span className="relative inline-flex w-2.5 h-2.5 rounded-full bg-teal-400" />
                  </span>
                  Connected
                </span>
              )}
            </div>
            <div>
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="rounded-full text-gray-400 hover:bg-blue-50 cursor-pointer">
                    <svg
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="p-1 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.83325 3.49999C5.83325 2.85566 6.35559 2.33333 6.99992 2.33333C7.64425 2.33333 8.16658 2.85566 8.16658 3.49999C8.16658 4.14433 7.64425 4.66666 6.99992 4.66666C6.35559 4.66666 5.83325 4.14433 5.83325 3.49999ZM6.99992 5.83333C6.35559 5.83333 5.83325 6.35566 5.83325 6.99999C5.83325 7.64433 6.35559 8.16666 6.99992 8.16666C7.64425 8.16666 8.16658 7.64433 8.16658 6.99999C8.16658 6.35566 7.64425 5.83333 6.99992 5.83333ZM5.83325 10.5C5.83325 9.85566 6.35559 9.33333 6.99992 9.33333C7.64425 9.33333 8.16658 9.85566 8.16658 10.5C8.16658 11.1443 7.64425 11.6667 6.99992 11.6667C6.35559 11.6667 5.83325 11.1443 5.83325 10.5Z"
                        fill="currentColor"
                      />
                    </svg>
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Menu.Items className="forge-dropdown right-0 w-40 origin-top-right p-0">
                    <div className="px-1 py-1 ">
                      <Menu.Item>
                        <button
                          onClick={() => setLoading((prev) => !prev)}
                          className="forge-dropdown-item text-gray-900 w-full"
                        >
                          Refresh Status
                        </button>
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>
      </div>
    );

  return (
    <div className="m-2 w-full bg-white rounded-lg divide-gray-100 divide-y">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-100 mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                className="text-teal-400 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                />
              </svg>
            </div>
            <div className="w-72 truncate">
              <a
                className="text-teal-400 text-sm font-bold tracking-normal"
                title="TESTSERVER"
                href="/servers/570738"
              >
                TESTSERVER
              </a>
              <div className="text-gray-500 text-xs">
                PHP 8.1<span>, MySQL 8</span>
              </div>
            </div>
            <div className="ml-10 mr-4">
              <div className="text-gray-500">
                <div className="inline-block">
                  <Tooltip content="Click to copy">
                    <div
                      className="-mx-1 px-1 rounded-sm cursor-pointer"
                      tabIndex={0}
                    >
                      <div className="flex items-center">
                        <div className>38.54.1.72</div>
                        <svg
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="ml-1 w-3 h-3"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M10.5001 9.33332V2.33332C10.5001 1.68899 9.97775 1.16666 9.33341 1.16666H2.33341C1.68908 1.16666 1.16675 1.68899 1.16675 2.33332V9.33332C1.16675 9.97766 1.68908 10.5 2.33341 10.5H9.33341C9.97775 10.5 10.5001 9.97766 10.5001 9.33332ZM2.33341 2.33332H9.33342V9.33332H2.33341V2.33332ZM11.6667 10.5V3.49999C12.3111 3.49999 12.8334 4.02232 12.8334 4.66666V10.5C12.8334 11.7887 11.7887 12.8333 10.5001 12.8333H4.66675C4.02242 12.8333 3.50008 12.311 3.50008 11.6667H10.5001C11.1444 11.6667 11.6667 11.1443 11.6667 10.5Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    </div>
                  </Tooltip>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <div
              className="flex items-center max-w-xs text-gray-500 text-xs truncate"
              title="Test"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinejoin="round"
                className="flex-shrink-0 mr-1 w-3 h-3"
              >
                <path d="M16 21a5 5 0 0 0 5-5 5 5 0 0 0-5-5 5 5 0 0 0-5 5 5 5 0 0 0 5 5h0zm0 3c-4.922 0-7.887 2.492-9.477 4.502C5.648 29.608 6.525 31 7.935 31h16.13c1.41 0 2.287-1.392 1.412-2.498C23.887 26.492 20.922 24 16 24z" />
                <path
                  d="M28.02 24.975c1.939-2.59 2.985-5.74 2.98-8.975 0-8.284-6.716-15-15-15S1 7.716 1 16c0 3.419 1.074 6.477 3 9"
                  strokeLinecap="round"
                />
              </svg>
              <span className="truncate">Test</span>
            </div>
            <div className="ml-6">
              {loading ? (
                <span className="text-uppercase inline-flex items-center px-2.5 py-1.5 text-xs rounded-full bg-blue-50 text-gray-900">
                  <span className="relative flex mr-1.5 w-2.5 h-2.5">
                    <span className="absolute inline-flex w-full h-full rounded-full animate-ping bg-blue-400" />
                    <span className="relative inline-flex w-2.5 h-2.5 rounded-full bg-blue-400" />
                  </span>
                  Connecting
                </span>
              ) : (
                <span className="text-uppercase inline-flex items-center px-2.5 py-1.5 text-xs rounded-full bg-teal-400 bg-opacity-10 text-gray-900">
                  <span className="relative flex mr-1.5 w-2.5 h-2.5">
                    <span className="relative inline-flex w-2.5 h-2.5 rounded-full bg-teal-400" />
                  </span>
                  Connected
                </span>
              )}
            </div>
            <div className="ml-6 pt-1">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="rounded-full text-gray-400 hover:bg-blue-50 cursor-pointer">
                    <svg
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="p-1 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.83325 3.49999C5.83325 2.85566 6.35559 2.33333 6.99992 2.33333C7.64425 2.33333 8.16658 2.85566 8.16658 3.49999C8.16658 4.14433 7.64425 4.66666 6.99992 4.66666C6.35559 4.66666 5.83325 4.14433 5.83325 3.49999ZM6.99992 5.83333C6.35559 5.83333 5.83325 6.35566 5.83325 6.99999C5.83325 7.64433 6.35559 8.16666 6.99992 8.16666C7.64425 8.16666 8.16658 7.64433 8.16658 6.99999C8.16658 6.35566 7.64425 5.83333 6.99992 5.83333ZM5.83325 10.5C5.83325 9.85566 6.35559 9.33333 6.99992 9.33333C7.64425 9.33333 8.16658 9.85566 8.16658 10.5C8.16658 11.1443 7.64425 11.6667 6.99992 11.6667C6.35559 11.6667 5.83325 11.1443 5.83325 10.5Z"
                        fill="currentColor"
                      />
                    </svg>
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Menu.Items className="forge-dropdown right-0 w-40 origin-top-right p-0">
                    <div className="px-1 py-1 ">
                      <Menu.Item>
                        <button
                          onClick={() => setLoading((prev) => !prev)}
                          className="forge-dropdown-item text-gray-900 w-full"
                        >
                          Refresh Status
                        </button>
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
