import { useState, Fragment } from "react";
import { AuthLayout } from "components/Layout";
import { Tab, Transition, Popover, Listbox, Combobox } from "@headlessui/react";
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
  HiOutlineCog,
  HiOutlineTrash,
  HiOutlineSelector,
  HiOutlineSearch,
  HiOutlineCheck,
  HiOutlineCheckCircle,
  HiOutlinePlusCircle,
  HiOutlineFingerPrint,
} from "react-icons/hi";
import { FiCopy } from "react-icons/fi";
import { Tooltip } from "components/Tooltip";
import { Badge } from "components/Badge";
import { alertParams, showAlert } from "components/Alert";
import { toatsSuccess } from "components/Toats";
import { DeploymentTable } from "./deploymentTable";
import { ModalAddEditDeployment } from "./modalAddEditDeployment";

export default function Deployments() {
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState("add");

  const closeModal = () => {
    setIsOpen(false);
  };

  function openModalAdd() {
    setIsOpen(true);
    setType("add");
  }

  function openModalEdit() {
    setIsOpen(true);
    setType("edit");
  }

  return (
    <AuthLayout>
      <div>
        <div className="flex justify-between w-full">
          <h2 className="wphub-h2">Deployments</h2>
        </div>

        <div className="mt-3 w-full text-right">
          <button
            type="button"
            className="wphub-btn-secondary"
            onClick={openModalAdd}
          >
            <HiOutlineCog className="mr-2 w-5 h-5 text-gray-600" />
            Add New Deployment
          </button>
        </div>

        <section className="py-8">
          <DeploymentTable openModalEdit={openModalEdit} />
        </section>
      </div>

      <ModalAddEditDeployment
        type={type}
        isOpen={isOpen}
        closeModal={closeModal}
      />
    </AuthLayout>
  );
}
