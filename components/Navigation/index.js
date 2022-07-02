import { Popover, Transition, Menu } from "@headlessui/react";
import { Fragment } from "react";
import Image from "next/image";
import {
  HiOutlineServer,
  HiOutlineGlobeAlt,
  HiOutlineUserCircle,
  HiOutlineClipboardList,
  HiOutlineClipboard,
} from "react-icons/hi";

export const Navigation = () => {
  return (
    <nav className="flex justify-center w-full min-w-screen-xl h-20 bg-white">
      <div className="grid gap-x-4 grid-cols-8 items-center px-5 w-full max-w-nav">
        <div className="flex gap-x-6 col-span-2 items-center justify-between w-auto h-10">
          <a href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 109 21"
              className="w-auto h-5 text-gray-800"
            >
              <path
                d="M38.971.659c2.062 0 3.013.37 3.595 1.11.846 1.11 1.322 3.33-.053 8.775s-2.907 7.613-4.335 8.776c-.952.74-2.115 1.11-4.176 1.11h-6.608c-2.062 0-3.066-.37-3.595-1.11-.846-1.11-1.322-3.33.106-8.776 1.374-5.445 2.96-7.612 4.388-8.775.952-.74 2.115-1.11 4.176-1.11h6.502zM29.35 15.619c.106.159.37.212 1.216.212h2.537c.846 0 1.163-.053 1.375-.212.264-.211.74-.74 1.797-5.075 1.11-4.335.899-4.863.74-5.075-.106-.159-.37-.211-1.216-.211h-2.485c-.846 0-1.163.053-1.374.211-.264.211-.74.74-1.797 5.075-1.163 4.388-.952 4.864-.793 5.075zm25.639-1.586c-.211-.264-.423-.37-1.692-.37h-2.485a.62.62 0 0 0-.581.476l-1.427 5.815a.62.62 0 0 1-.582.476h-5.128c-.264 0-.423-.212-.37-.476l4.705-18.82a.62.62 0 0 1 .582-.476h12.053c1.956 0 3.013.264 3.595 1.004.634.899.846 1.85.159 4.599-.899 3.701-2.273 4.758-4.652 5.234v.053c1.85.476 2.855 1.11 2.22 3.965l-.793 4.388c-.053.264-.317.529-.581.529h-5.234c-.212 0-.423-.159-.37-.423l.687-3.965c.211-1.427.106-1.692-.106-2.009zm-.37-4.652c1.11 0 1.427-.053 1.639-.211.37-.264.634-.74.899-1.903s.212-1.586 0-1.85c-.159-.159-.423-.211-1.533-.211h-2.749a.62.62 0 0 0-.581.476L51.5 8.958c-.053.264.106.476.37.476h2.749v-.053zM80.47.5c2.115 0 3.225.264 3.859 1.004.74.899 1.004 2.273.423 5.339a.62.62 0 0 1-.582.476h-4.916c-.264 0-.423-.211-.37-.423.212-1.216-.053-1.374-.212-1.586-.106-.159-.317-.211-1.216-.211h-2.537c-.899 0-1.163.053-1.374.211-.317.264-.899 1.163-1.85 5.181s-.793 4.969-.634 5.234c.106.159.37.211 1.269.211h2.696c.793 0 1.11-.053 1.322-.211.264-.211.793-.74 1.11-2.168l.053-.159h-3.806c-.264 0-.423-.211-.37-.476l.74-3.172a.62.62 0 0 1 .582-.476H83.8c.264 0 .423.211.37.476l-.476 1.956c-1.11 4.811-2.432 6.502-3.806 7.612-1.004.846-2.432 1.163-4.282 1.163h-6.608c-2.062 0-3.066-.37-3.648-1.163-.899-1.163-1.374-3.33-.053-8.828s2.855-7.718 4.282-8.828C70.531.87 71.694.5 73.756.5h6.714zm20.617 19.983H85.281c-.264 0-.423-.212-.37-.476L89.351.976A.62.62 0 0 1 89.933.5h18.396c.318 0 .476.317.265.634-.793 1.269-3.859 3.965-7.296 3.965h-6.396a.62.62 0 0 0-.581.476l-.476 2.115c-.053.264.106.476.37.476h8.616c.265 0 .423.211.371.476l-.741 3.33a.62.62 0 0 1-.581.476h-8.617a.62.62 0 0 0-.582.476l-.582 2.432c-.053.264.106.476.37.476h9.674c.265 0 .423.211.37.476l-.846 3.648c-.052.317-.317.529-.581.529zM25.121.659H3.446a.62.62 0 0 0-.582.476l-.529 1.903c-.053.211.053.37.211.476.846.264 5.392.37 4.705 2.908l-.159.687-1.85 6.925-.159.687c-.687 2.537-3.119 2.643-4.123 2.908-.211.053-.37.264-.423.476L.01 20.007c-.053.264.106.476.37.476h8.828a.62.62 0 0 0 .582-.476l1.586-6.132a.62.62 0 0 1 .582-.476h5.657a.62.62 0 0 0 .581-.476l.846-3.278c.053-.264-.106-.476-.37-.476h-5.656c-.264 0-.423-.211-.37-.476l.793-2.96a.62.62 0 0 1 .582-.476h8.511a.62.62 0 0 0 .581-.476l2.273-3.595c.106-.317 0-.529-.264-.529z"
                fill="currentColor"
              />
            </svg>
          </a>
          <div>
            <div className="relative">
              <div className="relative flex items-center text-gray-400 focus-within:text-gray-500">
                <span className="absolute inset-0 flex items-center pointer-events-none select-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="ml-4 h-4"
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
                  className="pl-10 pr-12 w-full h-10 focus:text-black text-sm bg-gray-100 focus:bg-gray-50 border border-gray-100 focus:border-teal-400 rounded-lg focus:outline-none appearance-none focus:ring-0"
                  autoComplete="off"
                  autoCorrect="off"
                />
                <div className="absolute right-0 flex items-center pointer-events-none select-none">
                  <span className="mr-4">/</span>
                </div>
              </div>
              {/**/}
            </div>
          </div>
        </div>
        <div className="flex col-span-4 col-end-7 col-start-3 items-center justify-center w-full">
          <a
            className="flex items-center justify-center px-3 h-10 text-gray-800 hover:text-teal-400 text-sm font-normal rounded-lg bg-teal-50"
            href="/servers"
          >
            <HiOutlineServer className="pr-2 h-5 w-auto text-teal-400" />
            <span>Servers</span>
          </a>
          <span className="relative z-30 ml-5">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={`rounded-lg ${open && "bg-teal-50"}`}
                  >
                    <span className="flex items-center justify-center px-3 h-10 text-gray-800 hover:text-teal-400 text-sm font-normal rounded-lg cursor-pointer select-none">
                      <HiOutlineGlobeAlt
                        className={`pr-2 w-auto text-gray-500 h-5 ${open && "text-teal-400"}`}
                      />
                      <span>Sites</span>
                    </span>
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
                    <Popover.Panel className="forge-dropdown right-0 min-w-64 origin-top-right">
                      <div>
                        <input
                          type="text"
                          className="h-8  px-3 w-full text-gray-900 text-sm bg-white border border-gray-200 focus:border-teal-400 rounded-lg focus:outline-none appearance-none focus:ring-0"
                          autoComplete="off"
                          autoCorrect="off"
                          placeholder="Filter.."
                        />
                        <div className="pt-3">
                          <div>
                            <span className="mb-2 block px-3 text-gray-700 whitespace-nowrap text-xs font-medium uppercase">
                              TESTSERVER (2)
                            </span>
                            <a
                              className="forge-dropdown-item whitespace-nowrap"
                              href="/servers/570738/sites/1682253"
                            >
                              default
                            </a>
                            <a
                              className="forge-dropdown-item whitespace-nowrap"
                              href="/servers/570738/sites/1682256"
                            >
                              test.com
                            </a>
                          </div>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </span>
          <a
            className="flex items-center justify-center ml-5 px-3 h-10 text-gray-800 hover:text-teal-400 text-sm font-normal rounded-lg"
            href="/circles"
          >
            <HiOutlineUserCircle className="pr-2 h-5 w-auto text-gray-500" />
            <span>Circles</span>
          </a>
          <a
            className="flex items-center justify-center ml-5 px-3 h-10 text-gray-800 hover:text-teal-400 text-sm font-normal rounded-lg"
            href="/recipes"
          >
            <HiOutlineClipboardList className="pr-2 h-5 w-auto text-gray-500" />
            <span>Recipes</span>
          </a>
          <a
            href="/docs"
            className="flex items-center justify-center ml-5 px-3 h-10 text-gray-800 hover:text-teal-400 text-sm font-normal rounded-lg"
          >
            <HiOutlineClipboard className="pr-2 h-5 w-auto text-gray-500" />
            <span>Docs</span>
          </a>
        </div>
        <div className="relative z-30 flex flex-grow col-span-2 items-center justify-end justify-self-end w-full h-10">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="flex items-center -mr-3 px-3 h-12 text-white rounded-lg cursor-pointer select-none">
                <Image
                  src="https://unavatar.io/xmannv@thcsphuongthien.edu.vn?fallback=https%3A%2F%2Feu.ui-avatars.com%2Fapi%2F%3Fname%3DT+F%26color%3D7F9CF4%26background%3DEBF4FF"
                  height={30}
                  width={30}
                  className="mr-2 rounded-full"
                  alt="Test Forge's profile picture"
                />
                <span className="text-left text-gray-800 text-sm font-normal">
                  Test Forge
                </span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="ml-2 w-4 w-5 h-4 h-5 text-gray-400 group-hover:text-gray-500 transform duration-300 rotate-90"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 0 1 0-1.414L10.586 10 7.293 6.707a1 1 0 0 1 .012-1.402 1 1 0 0 1 1.402-.012l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0z"
                      fill="currentColor"
                    />
                  </svg>
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
              <Menu.Items className="forge-dropdown right-0 w-40 origin-top-right p-0">
                <div className="px-1 py-1 ">
                  <Menu.Item>
                    <a
                      className="forge-dropdown-item"
                      href="/user-profile/authentication"
                    >
                      Account
                    </a>
                  </Menu.Item>
                  <Menu.Item>
                    <a className="forge-dropdown-item" href="/billing">
                      Billing
                    </a>
                  </Menu.Item>
                  <Menu.Item>
                    <a className="forge-dropdown-item" href="/billing">
                      Circles
                    </a>
                  </Menu.Item>
                  <hr className="mx-3 my-1" />
                  <Menu.Item>
                    <a className="forge-dropdown-item" href="/billing">
                      Documentation
                    </a>
                  </Menu.Item>
                  <Menu.Item>
                    <a className="forge-dropdown-item" href="/billing">
                      Video Tutorials
                    </a>
                  </Menu.Item>
                  <Menu.Item>
                    <a className="forge-dropdown-item" href="/billing">
                      Blog
                    </a>
                  </Menu.Item>
                  <hr className="mx-3 my-1" />
                  <Menu.Item>
                    <a className="forge-dropdown-item" href="/billing">
                      Logout
                    </a>
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </nav>
  );
};
