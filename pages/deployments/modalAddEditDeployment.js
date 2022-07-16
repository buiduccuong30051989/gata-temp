import { useState } from "react";
import { Modal } from "components/Modal";
import { HiOutlineLockClosed, HiOutlineFingerPrint } from "react-icons/hi";
import { FiCopy } from "react-icons/fi";
import { Tooltip } from "components/Tooltip";

const formAddNewFields = [
  {
    title: "Repo Url",
    id: "repo_url",
    placeholder: "https://github.com/your-username/repo-name",
    value: "",
  },
  {
    title: "Branch",
    id: "branch",
    placeholder: "Branch name",
    value: "main",
  },
  {
    title: "Destination Folder",
    id: "destination_folder",
    placeholder: "wp-content/...",
    value: "",
  },
];

export const ModalAddEditDeployment = ({
  isOpen,
  closeModal,
  type = "add",
}) => {
  const [publicKey, setPuplicKey] = useState(false);
  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
      modalTitle={`${type === "add" ? "Add" : "Edit"} Git Repository`}
    >
      <div className="my-3">
        <div>
          <label className="block text-gray-700">Repo Type</label>
          <div className="flex items-center  space-x-8 mt-1">
            {["Public", "Private"].map((item) => (
              <div className="inline-flex items-center">
                <input
                  id={item}
                  type="radio"
                  name="repo_type"
                  className="wphub-checkbox"
                />
                <label for={item} className="pl-2 cursor-pointer">
                  {item}
                </label>
              </div>
            ))}
          </div>
        </div>

        {formAddNewFields.map((item) => (
          <div className="mt-3">
            <label for={item.id} className="block text-gray-700">
              {item.title}
            </label>
            <input
              id={item.id}
              className="wphub-input mt-1 w-full"
              type="text"
              placeholder={item.placeholder}
              value={item.value}
            />
          </div>
        ))}

        <div className="mt-3">
          <div className="flex items-center justify-between">
            <label className="block text-gray-700" for="deployment_commands">
              Post-Deployment Commands
            </label>
            <a
              className="font-light text-xs text-gray-700 text-left pb-1 flex float-right"
              href="subscription/plans"
            >
              <span>Upgrade to unlock</span>
              <HiOutlineLockClosed className="h-4 w-4 ml-1 text-gray-500" />
            </a>
          </div>
          <textarea
            disabled
            rows="5"
            placeholder="Enter Commands"
            id="deployment_commands"
            className="wphub-input w-full mt-1 bg-black text-white"
          ></textarea>
        </div>

        <div className="mt-3">
          <label className="block text-gray-700">SSH Key Pair</label>
          <select className="wphub-input mt-1 w-full">
            <option>Select</option>
            <option>Option 01</option>
            <option>Option 02</option>
          </select>
        </div>

        <div className="relative mt-3">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t border-gray-100" />
          </div>
          <div className="relative flex justify-center">
            <span className="px-2 bg-white text-sm text-gray-500">Or</span>
          </div>
        </div>

        <div className="mt-3 p-2 rounded-lg bg-gray-100 min-h-[52px] relative overflow-hidden">
          <div className="absolute bg-gray-100 p-2 top-0 left-0 flex w-full items-center justify-between">
            <label className="block text-gray-700">Public Key Generate</label>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setPuplicKey(true)}
                className="wphub-btn-primary"
              >
                Generate New
                <HiOutlineFingerPrint className="icon w-4 h-4 ml-2" />
              </button>
              <Tooltip content="Copy">
                <button className="wphub-btn-secondary">
                  <FiCopy className="w-4 h-4 text-gray-500" />
                </button>
              </Tooltip>
            </div>
          </div>
          {publicKey && (
            <textarea
              className="pt-10 text-xs text-gray-400 border-0 bg-transparent w-full customized-scrollbar h-[140px]"
              value="ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCUhjCeH0EAaIfDPZdVAYU0mmYqoA8hI1B8QSwnysN5cPGvEcgjJQLrkryGedVBcV+SAeWs9oQ0f/Vl5T4N9HXNMsV8ERKBPzAu6F6BOpQJ942pNj7kx0pLr+2UC+nweV5m9fkKonMEcpf0B8d5QmfHZRVXMHVdJ6uaLGi0/B33jagyTtarndsZPPS9CE5Yga+rSnKgwaTAjnwpaqrEbNLzbveMHcU9M6aY+wm4LYZmzLgb5gVEE6DC+sXUY5bzhQuqb5J0jK45aKeKeiB/Rg90jSr1tXm9Ko/9wM7b3SOxFvRdRUWTonPFSzd0izJyLTCPGDg5HX6RMwQndTBAS7sp Instawp SSH Key 4 for CODE TAY's team"
            ></textarea>
          )}
        </div>
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
          {type === "add" ? "Add" : "Edit"} Deployment
        </button>
      </div>
    </Modal>
  );
};
