import { useState, Fragment } from "react";
import { AuthLayout } from "components/Layout";
import { Tab, Transition } from "@headlessui/react";
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
} from "react-icons/hi";
import { classNames } from "utils/helper";
import { PrivateTab } from "./privateTab";
import { ModalAddTempate } from "./modalAddTemplate";
import { OffCanvas } from "./offcanvas";

export default function Templates() {
  const [isOpen, setIsOpen] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [enabled, setEnabled] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  function openModal() {
    setIsOpen(true);
  }

  return (
    <AuthLayout>
      <div>
        <div>
          <div className="flex justify-between w-full">
            <h2 className="forge-h2">Templates</h2>
          </div>

          <Tab.Group>
            <Tab.List className="relative">
              <div className=" flex space-x-1 rounded-xl bg-gray-300/50 p-1 w-[280px] mt-3 mx-auto">
                <Tab
                  className={({ selected }) =>
                    classNames(
                      "w-full rounded-lg py-2.5 text-sm leading-5 font-light text-gray-700 flex items-center justify-center",
                      selected
                        ? "bg-active-link shadow text-teal-400"
                        : "hover:bg-white/[0.35]"
                    )
                  }
                >
                  <HiOutlineLockClosed className="w-4 h-4 mr-2" />
                  Private (2)
                </Tab>
                <Tab
                  className={({ selected }) =>
                    classNames(
                      "w-full rounded-lg py-2.5 text-sm leading-5 font-light text-gray-700 flex items-center justify-center",
                      selected
                        ? "bg-active-link shadow text-teal-400"
                        : "hover:bg-white/[0.35]"
                    )
                  }
                >
                  <HiOutlineShare className="w-4 h-4 mr-2" />
                  Share (1)
                </Tab>
              </div>
              <button
                type="button"
                className="forge-btn-secondary absolute top-0 right-0"
                onClick={openModal}
              >
                <HiOutlineTemplate className="mr-2 w-5 h-5 text-gray-600" />
                Add Template
              </button>
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel>
                <PrivateTab openEdit={setIsShow} />
              </Tab.Panel>
              <Tab.Panel></Tab.Panel>
            </Tab.Panels>
          </Tab.Group>

          <ModalAddTempate isOpen={isOpen} closeModal={closeModal} />
        </div>
      </div>
      <Transition
        show={isShow}
        className="fixed pl-16 max-w-full top-0 right-0 flex h-screen z-30"
      >
        <Transition.Child
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className="fixed inset-0 bg-black/30"
            aria-hidden="true"
            onClick={() => setIsShow(false)}
          />
        </Transition.Child>

        <Transition.Child
          enter="transition ease-in-out duration-300 transform"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-full"
        >
          <div className=" bg-white shadow-xl">
            <form className="w-screen h-screen max-w-md divide-y divide-gray-200 flex flex-col">
              <div className="py-6 px-4 bg-teal-400 flex-shrink-0">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-light text-white">
                    Edit Template
                  </h2>
                  <div className="ml-3 h-7 flex items-center">
                    <button type="button" onClick={() => setIsShow(false)}>
                      <HiOutlineX className="w-5 h-5 text-white" />
                    </button>
                  </div>
                </div>
                <div className="mt-1"></div>
              </div>
              <div className="flex-1 overflow-y-auto  customized-scrollbar">
                <div className="flex-1 flex flex-col justify-between">
                  <div className="px-4 divide-y divide-gray-200">
                    <div className="space-y-4 pt-6 pb-5">
                      <div>
                        <label
                          htmlFor="template-name"
                          className="block text-sm font-light text-gray-700"
                        >
                          Template Name
                        </label>
                        <div className="mt-1">
                          <div className="flex">
                            <input
                              type="text"
                              autoComplete="off"
                              id="template-name"
                              className="forge-input w-full"
                            />
                          </div>
                        </div>
                        <div className="my-1 cfull-w mt-3">
                          <div className="flex justify-between">
                            <label
                              htmlFor="description"
                              className="block text-sm font-light text-gray-700"
                            >
                              Description
                            </label>
                          </div>
                          <div className="mt-1">
                            <textarea
                              className="forge-input w-full"
                              rows={3}
                              cols={100}
                              id="description"
                              placeholder
                              defaultValue={""}
                            />
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between">
                          <span id="headlessui-label-268" className>
                            <span className="text-sm font-light text-gray-700">
                              Enable Sharing
                            </span>
                          </span>
                          <Switch
                            enabled={enabled}
                            setEnabled={setEnabled}
                            title="Enable Sharing"
                          />
                        </div>
                      </div>
                      <div>
                        <input
                          type="text"
                          readOnly
                          className="forge-input w-full"
                        />
                        <div className="flex justify-center  text-sm pt-2">
                          <button
                            type="button"
                            className="pr-7 group inline-flex items-center font-light text-indigo-600 hover:text-indigo-900"
                          >
                            <span className="flex w-full justify-center items-center">
                              <HiOutlineLink className="h-4 w-4 mr-2" />
                              Copy Link
                            </span>
                          </button>
                          <button
                            type="button"
                            className="pr-3 group inline-flex items-center font-light text-indigo-600 hover:text-indigo-900"
                          >
                            <span className="flex w-full justify-center items-center">
                              <HiOutlineCode className="w-4 h-4 mr-2" />
                              Copy Embed
                            </span>
                          </button>
                        </div>
                        <div className="mt-3 text-center">
                          <span className="inline-block px-2.5 py-0.5 rounded-md text-xs font-light bg-gray-100 text-gray-800">
                            15 template sites can be created under your plan
                          </span>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between items-center  text-sm pt-2">
                          <label className="block text-sm font-light text-gray-700">
                            Advance Options
                          </label>
                          <a
                            className="font-light text-xs text-gray-700 text-left pb-1 flex float-right"
                            href="subscription/plans"
                          >
                            <span>Upgrade to unlock</span>
                            <HiOutlineLockClosed className="h-4 w-4 ml-1 text-gray-500" />
                          </a>
                        </div>
                        <div className="px-2 mt-3">
                          <div className="flex justify-between items-center text-sm mt-2">
                            <label
                              className="text-xs font-light text-gray-700"
                              htmlFor="site_life_time"
                            >
                              Site Lifetime
                            </label>
                            <select
                              disabled
                              id="site_life_time"
                              name="site_life_time"
                              className="mt-1 pl-3 pr-10 py-2 forge-input"
                            >
                              <option value={4}>4 Hours</option>
                            </select>
                          </div>
                          <div className="flex justify-between items-center text-sm mt-2">
                            <span id="headlessui-label-284" className>
                              <span className="text-xs font-light text-gray-700">
                                Disallow File Modifications
                              </span>
                            </span>
                            <Switch
                              enabled={enabled}
                              setEnabled={setEnabled}
                              title="Disallow File Modifications"
                            />
                          </div>
                        </div>

                        <div className=" mt-4">
                          <label className="block text-sm font-light text-gray-700 ">
                            Landing Page Flow
                          </label>
                          <div className="px-2 mt-3">
                            <div className=" p-4 bg-gray-100 rounded-xl mt-3">
                              <label className="block text-sm font-light text-gray-700 mb-2">
                                Step 1
                              </label>
                              <div className="flex justify-between items-center text-sm">
                                <span id="headlessui-label-272" className>
                                  <span className="text-xs font-light text-gray-700">
                                    Collect Email
                                  </span>
                                </span>
                                <Switch
                                  enabled={enabled}
                                  setEnabled={setEnabled}
                                  title="Collect Email"
                                />
                              </div>
                              <div className="flex justify-between items-center text-sm mt-2">
                                <span id="headlessui-label-274" className>
                                  <span className="text-xs font-light text-gray-700">
                                    Email Required
                                  </span>
                                </span>
                                <Switch
                                  enabled={enabled}
                                  setEnabled={setEnabled}
                                  title="Email Required"
                                />
                              </div>
                              <div className="flex justify-between items-center text-sm mt-2">
                                <span id="headlessui-label-276" className>
                                  <span className="text-xs font-light text-gray-700">
                                    Send Credentials to Email
                                  </span>
                                </span>
                                <Switch
                                  enabled={enabled}
                                  setEnabled={setEnabled}
                                  title="Send Credentials to Email"
                                />
                              </div>
                              <div className="flex justify-between items-center text-sm mt-2">
                                <span id="headlessui-label-278" className>
                                  <span className="text-xs font-light text-gray-700">
                                    Hide Privacy Checkbox
                                  </span>
                                </span>
                                <Switch
                                  enabled={enabled}
                                  setEnabled={setEnabled}
                                  title="Hide Privacy Checkbox"
                                />
                              </div>
                            </div>

                            <div className="p-4 bg-gray-100 rounded-xl mt-3">
                              <label className="block text-sm font-light text-gray-700 my-2">
                                Step 2
                              </label>
                              <div className="flex justify-between items-center text-sm">
                                <span id="headlessui-label-280" className>
                                  <span className="text-xs font-light text-gray-700">
                                    Auto Login to wp-admin
                                  </span>
                                </span>
                                <Switch
                                  enabled={enabled}
                                  setEnabled={setEnabled}
                                  title="Auto Login to wp-admin"
                                />
                              </div>
                              <div className="flex justify-between items-center text-sm mt-2">
                                <span id="headlessui-label-282" className>
                                  <span className="text-xs font-light text-gray-700">
                                    Enable Site Cloning
                                  </span>
                                </span>
                                <Switch
                                  enabled={enabled}
                                  setEnabled={setEnabled}
                                  title="Enable Site Cloning"
                                />
                              </div>
                            </div>

                            <div className="p-4 bg-gray-100 rounded-xl mt-3">
                              <label className="block text-sm font-light text-gray-700 my-2">
                                Step 3
                              </label>
                              <div className="text-sm">
                                <label
                                  className="text-xs font-light text-gray-700"
                                  htmlFor="redirect_url"
                                >
                                  Redirect URL
                                </label>
                                <div className="flex items-center">
                                  <span className="text-xs mr-1">
                                    https://sitename.instawp.xyz
                                  </span>
                                  <input
                                    disabled
                                    placeholder="/wp-admin/"
                                    type="text"
                                    id="redirect_url"
                                    name="redirect_url"
                                    className="w-full mt-1 forge-input ml-2"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="text-sm mt-4">
                          <label className="block text-sm font-light text-gray-700 ">
                            Webhook
                          </label>
                          <div className="flow-steps px-2 mt-3">
                            <div className="text-sm">
                              <label
                                className="text-xs font-light text-gray-700"
                                htmlFor="zapier_webhook_url"
                              >
                                URL
                              </label>
                              <a
                                className="items-center text-teal-400 flex float-right"
                                target="_blank"
                                href="/webhook-integration/"
                              >
                                <HiOutlineDocumentText className="h-4 w-4 mr-1" />
                                Doc
                              </a>
                              <div className="flex items-center  mt-1">
                                <input
                                  disabled
                                  placeholder="Enter your webhook URL"
                                  type="text"
                                  className="w-full forge-input"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between items-center  text-sm pt-2">
                          <label className="block text-sm font-light text-gray-700">
                            Branding
                          </label>
                        </div>
                        <div className="px-2 mt-3">
                          <div>
                            <label
                              htmlFor="logo"
                              className="block text-xs mt-4 pb-2 font-light text-gray-700"
                            >
                              Logo (128 x 128, png, svg, jpg)
                            </label>
                            <input
                              id="logo"
                              className="forge-input w-full py-[5px]"
                              type="file"
                              accept="image/*"
                            />
                          </div>
                          <div className="flex justify-between items-center text-sm mt-3">
                            <label className="block text-xs pb-2 font-light text-gray-700">
                              Customize Email
                            </label>
                            <button
                              type="button"
                              className="text-teal-400 flex cursor-pointer"
                            >
                              <HiOutlinePencilAlt className="h-4 w-4 mr-1" />
                              <span>Edit Content</span>
                            </button>
                          </div>

                          <div className="flex justify-between items-center text-sm">
                            <label className="block text-xs mt-4 pb-2 font-light text-gray-700">
                              Customize Privacy Policy
                            </label>
                            <button
                              type="button"
                              className="text-teal-400 flex cursor-pointer"
                            >
                              <HiOutlinePencilAlt className="h-4 w-4 mr-1" />
                              <span>Edit Text</span>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-end">
                          <a
                            className="font-light text-xs text-gray-700 text-left pb-1 flex float-right"
                            href="https://app.instawp.io/subscription/plans"
                          >
                            <span>Upgrade to unlock</span>
                            <HiOutlineLockClosed className="h-4 w-4 ml-1 text-gray-500" />
                          </a>
                        </div>
                        <div className="flex justify-between items-center text-sm mt-2">
                          <span id="headlessui-label-270" className>
                            <span className="text-sm font-light text-gray-700">
                              Instant Template
                            </span>
                          </span>
                          <Switch
                            enabled={enabled}
                            setEnabled={setEnabled}
                            title="Enable Sharing"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0 px-4 py-4 flex justify-end">
                <button
                  type="button"
                  className="forge-btn-secondary"
                >
                  Cancel
                </button>

                <button
                  type="button"
                  className="ml-4 forge-btn-primary disabled:opacity-60"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </Transition.Child>
      </Transition>
    </AuthLayout>
  );
}
