import { useState, Fragment } from "react";
import {
  HiOutlineExternalLink,
  HiOutlineClock,
  HiOutlineX,
  HiOutlineLogout,
  HiOutlineFlag,
  HiOutlineTemplate,
  HiOutlineDotsVertical,
  HiOutlineSearch,
  HiOutlineCheck,
  HiOutlineGlobe,
  HiOutlineRefresh,
  HiOutlineLightningBolt,
  HiOutlinePencilAlt,
  HiOutlinePlusCircle,
  HiOutlineTrash,
  HiOutlineExclamation,
  HiOutlineLockClosed,
  HiOutlineSelector,
} from "react-icons/hi";
import { FiGitMerge } from "react-icons/fi";
import { Tooltip } from "components/Tooltip";
import Link from "next/link";
import { Dropdown } from "components/Dropdown";
import { Menu, Popover, Transition, Listbox } from "@headlessui/react";
import { IconPhp } from "components/Icons";
import { alertParams, showAlert } from "components/Alert";
import { useRouter } from "next/router";
import { ModalCreateTemplate } from "./modalCreateTemplate";
import { ModalPhpConfiguration } from "./modalPhpConfiguration";
import { toast } from "react-toastify";

const filterOptions = [
  { name: "Select Frequency" },
  { name: "4 hours" },
  { name: "8 hours" },
  { name: "12 hours" },
  { name: "Once in a day" },
];

export const PrivateRow = ({ openEdit }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenConfig, setIsOpenConfig] = useState(false);
  const [selected, setSelected] = useState(filterOptions[0]);

  const notify = () => toast.success("Wow so easy !");

  const closeModal = () => {
    setIsOpen(false);
  };

  function openModal() {
    setIsOpen(true);
  }

  const closeModalConfig = () => {
    setIsOpenConfig(false);
  };

  function openModalConfig() {
    setIsOpenConfig(true);
  }

  const handleDeployment = () => {
    notify();
    // showAlert({
    //   ...alertParams.info,
    //   title: "Select Deployments",
    //   description: "Please add a new repository in the ‘Deployments’ tab",
    //   cancelText: "cancel",
    //   okText: "Open Deployment",
    //   onOk: () => router.push("/deployment"),
    // });
  };

  const handleDeleteTemplate = () => {
    showAlert({
      ...alertParams.danger(),
      title: "Remove Template",
      description: "Are you sure you want to remove this backup template?",
      cancelText: "cancel",
      okText: "Delete",
      okBtnClass: "forge-btn-primary bg-red-600",
    });
  };

  const MoreActions = () => (
    <div>
      <Menu.Item>
        <button
          onClick={openModalConfig}
          className="forge-dropdown-item font-light w-full"
        >
          <IconPhp className="icon w-4 h-4 mr-2" />
          PHP Configuration
        </button>
      </Menu.Item>
      <Menu.Item>
        <button
          onClick={handleDeleteTemplate}
          className="forge-dropdown-item font-light w-full"
        >
          <HiOutlineTrash className="icon w-4 h-4 mr-2" />
          Delete
        </button>
      </Menu.Item>
    </div>
  );

  return (
    <tr className="h-12 border-t border-gray-100">
      <td className="w-5/12 pr-4">
        <div className="flex items-center">
          <div className="">
            <div className="flex text-sm font-normal text-gray-700">
              <span>cuong</span>
            </div>
            <div className="flex items-center mt-1">
              <span className=" flex items-center" title="Parent Site">
                <HiOutlineGlobe className="h-4 w-4 text-gray-500 mr-1" />
                <span className="text-gray-500 text-xs">
                  widoyi.us10.instawp.xyz
                </span>
              </span>

              <Popover className="relative">
                <Tooltip content="Sync Changes from Parent Site">
                  <Popover.Button>
                    <HiOutlineRefresh className="h-4 w-4 ml-2 cursor-pointer text-gray-500" />
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
                  <Popover.Panel className="forge-dropdown left-0 origin-top-left w-72 top-full z-[1] py-3 px-4">
                    <div className="mb-3">
                      <a
                        className="font-light text-xs text-gray-700 text-left pb-1 flex "
                        href="subscription/plans"
                      >
                        <span>Upgrade to unlock</span>
                        <HiOutlineLockClosed className="h-4 w-4 ml-1 text-gray-500" />
                      </a>
                    </div>

                    <div className="flex items-center mb-3">
                      <input
                        id="sync_changes"
                        type="checkbox"
                        className="forge-checkbox mr-2"
                      />
                      <label
                        for="sync_changes"
                        className="text-gray-500 cursor-pointer select-none"
                      >
                        Automatically Sync Changes
                      </label>
                    </div>

                    <div className="flex items-center justify-between mb-6">
                      <label className="mr-4 text-gray-700">Frequency: </label>
                      <Listbox value={selected} onChange={setSelected}>
                        <div className="relative">
                          <Listbox.Button className="flex items-center justify-between px-3 py-2 w-40 text-gray-900 text-sm bg-white border border-gray-200 rounded-lg">
                            <span className="flex items-center truncate">
                              <span className="truncate">{selected.name}</span>
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
                                      <span
                                        className={`${
                                          selected ? "bg-gray-100" : ""
                                        }`}
                                      >
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
                    </div>

                    <div className="flex space-x-4">
                      <button
                        type="button"
                        className="forge-btn-secondary bg-gray-100 w-full"
                      >
                        Save & Sync
                      </button>
                      <button
                        type="submit"
                        className="forge-btn-primary w-full"
                      >
                        Sync Now
                      </button>
                    </div>
                  </Popover.Panel>
                </Transition>
              </Popover>
            </div>
          </div>
        </div>
      </td>
      <td className="w-1/12 pr-4">
        <div className="text-sm text-gray-500 capitalize text-inline flex">
          <span title="Instant Template: Off">
            <HiOutlineLightningBolt className="h-4 w-4 mr-2" />
          </span>
          <span>ready</span>
        </div>
      </td>
      <td className="w-2/12 pr-4">
        <div className="text-sm text-gray-500 capitalize">7 hours ago</div>
      </td>
      <td className="w-3/12 pr-4">
        <div className="flex justify-end">
          <Tooltip content="Edit">
            <button className="forge-btn-secondary rounded-none rounded-l-lg">
              <span className="icon is-small">
                <HiOutlinePencilAlt
                  onClick={() => openEdit(true)}
                  className="w-5 h-5 text-gray-500"
                />
              </span>
            </button>
          </Tooltip>
          <Tooltip content="Create New Site">
            <button
              onClick={openModal}
              className="forge-btn-secondary rounded-none -ml-px"
            >
              <span className="icon is-small">
                <HiOutlinePlusCircle className="w-5 h-5 text-gray-500" />
              </span>
            </button>
          </Tooltip>
          <Tooltip content="Enable Deployment">
            <button className="forge-btn-secondary rounded-none -ml-px">
              <span className="icon is-small">
                <FiGitMerge
                  onClick={handleDeployment}
                  className="w-5 h-5 text-gray-500"
                />
              </span>
            </button>
          </Tooltip>
          <Dropdown
            btnClass="icon is-small"
            menuClass="relative forge-btn-secondary rounded-none rounded-r-lg -ml-px"
            arrow={false}
            dropdownClass="right-0 origin-top-right w-48 top-full z-[1]"
            btnChildren={
              <Tooltip content="More Action">
                <span>
                  <HiOutlineDotsVertical className="w-5 h-5 text-gray-500" />
                </span>
              </Tooltip>
            }
            dropdownChildren={<MoreActions />}
          />
        </div>
      </td>
      <ModalCreateTemplate isOpen={isOpen} closeModal={closeModal} />
      <ModalPhpConfiguration
        isOpen={isOpenConfig}
        closeModal={closeModalConfig}
      />
    </tr>
  );
};
