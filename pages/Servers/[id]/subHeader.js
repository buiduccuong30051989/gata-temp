import {
  HiOutlineGlobeAlt,
  HiOutlineChevronLeft,
  HiOutlineIdentification,
  HiOutlineCog,
  HiOutlineUserCircle,
  HiOutlineChevronDown,
  HiOutlineRefresh,
  HiOutlineServer,
  HiOutlineStop,
} from "react-icons/hi";
import { VscDebugRestart } from "react-icons/vsc";
import { Transition, Menu } from "@headlessui/react";
import { Fragment } from "react";

export const SubHeader = () => (
  <section className="flex flex-col">
    <div className="flex justify-between">
      <div>
        <a className="flex text-gray-600" href="/servers">
          <HiOutlineChevronLeft className="mr-2 w-5 h-5" />
          Back to Servers
        </a>
      </div>
      <div className="flex items-center space-x-6">
        <span className="flex items-center">
          <div className="inline-block">
            <div className="-mx-1 px-1 rounded-sm cursor-pointer" tabIndex={0}>
              <div className="flex items-center">
                <div className>
                  <span className="flex items-center">
                    <HiOutlineIdentification className="mr-2 w-4 h-4 text-gray-400" />
                    <span className="mr-1 text-gray-600">Server ID</span>
                    <span className="text-gray-400">570738</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </span>
        <span className="flex items-center">
          <HiOutlineCog className="mr-2 w-4 h-4 text-gray-400" />
          <span className="mr-1 text-gray-600">Server Type</span>
          <span className="text-gray-400">App</span>
        </span>
        <span className="flex items-center">
          <span className="text-uppercase inline-flex items-center px-2.5 py-1 text-sm rounded-full bg-teal-400 bg-opacity-10 text-gray-900">
            <span className="relative flex mr-1.5 w-2.5 h-2.5">
              {/**/}
              <span className="relative inline-flex w-2.5 h-2.5 rounded-full bg-teal-400" />
            </span>
            Connected
          </span>
          <button className="ml-1">
            <HiOutlineRefresh className="w-5 h-5 text-gray-500" />
          </button>
        </span>
      </div>
    </div>
    <div className="flex justify-between mt-10">
      <div className="flex items-center">
        <HiOutlineServer className="text-teal-400 mr-5 w-7 h-7" />
        <h1 className="forge-h2 inline-block mr-5 max-w-2xl truncate">
          TESTSERVER
        </h1>
      </div>
      <div className="flex items-center ml-2">
        <div className="flex">
          <span className="z-20 mr-3">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="forge-btn-secondary shadow-sm">
                  <span className="flex items-center font-normal truncate">
                    <VscDebugRestart className="mr-2 w-5 h-5 text-blue-400" />
                    Restart
                  </span>
                  <span className="flex flex-shrink-0 items-center ml-3">
                    <HiOutlineChevronDown className="w-4 h-4 " />
                  </span>
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
                <Menu.Items className="forge-dropdown w-52 origin-top-left">
                  <div className="px-1 py-1 ">
                    <Menu.Item>
                      <span className="forge-dropdown-item text-gray-900">
                        Restart Server
                      </span>
                    </Menu.Item>
                    <Menu.Item>
                      <span className="forge-dropdown-item text-gray-900">
                        Restart Nginx
                      </span>
                    </Menu.Item>
                    <Menu.Item>
                      <span className="forge-dropdown-item text-gray-900">
                        {" "}
                        Restart MySQL
                      </span>
                    </Menu.Item>
                    {/**/}
                    <Menu.Item>
                      <span className="forge-dropdown-item text-gray-900">
                        Restart Redis
                      </span>
                    </Menu.Item>
                    <Menu.Item>
                      <span className="forge-dropdown-item text-gray-900">
                        Restart Supervisor
                      </span>
                    </Menu.Item>
                    <div className="mb-3 pb-2 border-b" />
                    <Menu.Item>
                      <span className="forge-dropdown-item text-gray-900">
                        Restart PHP 8.1
                      </span>
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </span>
          <span className="relative z-20">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="forge-btn-secondary shadow-sm">
                  <span className="flex items-center font-normal truncate">
                    <HiOutlineStop className="mr-2 w-5 h-5 text-red-400" />
                    Stop
                  </span>
                  <span className="flex flex-shrink-0 items-center ml-5">
                    <HiOutlineChevronDown className="w-4 h-4 " />
                  </span>
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
                <Menu.Items className="forge-dropdown right-0 w-52 origin-top-right">
                  <div className="px-1 py-1 ">
                    <Menu.Item>
                      <span className="forge-dropdown-item text-gray-900">
                        Stop Nginx
                      </span>
                    </Menu.Item>
                    <Menu.Item>
                      <span className="forge-dropdown-item text-gray-900">
                        Stop MySQL
                      </span>
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </span>
        </div>
      </div>
    </div>
    <div className="flex items-center mt-4 text-gray-500">
      <div className="flex items-center mr-6">
        <HiOutlineGlobeAlt className="mr-2 w-4 h-4 text-gray-400" />
        <span className="mr-1 text-gray-600">Public IP</span>
        <div className="text-gray-400">
          <div className="-mx-1 px-1 rounded-sm cursor-pointer" tabIndex={0}>
            38.54.1.72
          </div>
        </div>
      </div>
      <div className="flex items-center mr-6">
        <HiOutlineUserCircle className="mr-2 w-4 h-4 text-gray-400" />
        <span className="mr-1 text-gray-600">Circle</span>
        <span className="w-48 text-gray-400 truncate">Test</span>
      </div>
    </div>
  </section>
);
