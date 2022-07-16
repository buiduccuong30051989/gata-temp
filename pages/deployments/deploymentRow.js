import {
  HiOutlineClock,
  HiOutlineTrash,
  HiOutlinePencilAlt,
} from "react-icons/hi";
import { FiGitMerge } from "react-icons/fi";
import { Tooltip } from "components/Tooltip";
import { alertParams, showAlert } from "components/Alert";

export const DeploymentRow = ({ openModalEdit }) => {
  const handleDelete = () => {
    showAlert({
      ...alertParams.danger(),
      title: "Delete Deployment Config",
      description: "Are you sure you want to delete this Repository?",
      cancelText: "Cancel",
      okText: "Delete",
      okBtnClass: "wphub-btn-primary bg-danger-600",
    });
  };

  return (
    <tr className="h-12 border-t border-gray-100">
      <td className="pr-4">
        <div>
          <div className=" mb-1 text-gray-700 w-96 max-w-full text-ellipsis overflow-hidden whitespace-nowrap">
            <span>
              https://github.com/alexandrtovmach/react-microsoft-login
            </span>
          </div>
          <div className="flex items-center space-x-4 text-xs">
            <span className="inline-flex items-center text-gray-400">
              <FiGitMerge className="w-3 h-3 mr-2" />
              Repository ID: 38
            </span>
            <span className="inline-flex items-center  text-gray-400">
              <HiOutlineClock className="w-3 h-3 mr-2" />
              Created 20 hours ago
            </span>
          </div>
        </div>
      </td>
      <td className="pr-4">main</td>
      <td className="pr-4">public</td>
      <td className="pr-4">wp-content/</td>
      <td className="pl-4">
        <div className="flex justify-end">
          <Tooltip content="Edit Deployment Config">
            <button
              onClick={openModalEdit}
              className="wphub-btn-secondary rounded-none rounded-l-lg"
            >
              <span className="icon is-small">
                <HiOutlinePencilAlt className="w-5 h-5 text-gray-500" />
              </span>
            </button>
          </Tooltip>
          <Tooltip content="Delete">
            <button
              onClick={handleDelete}
              className="wphub-btn-secondary rounded-none rounded-r-lg -ml-px"
            >
              <span className="icon is-small">
                <HiOutlineTrash className="w-5 h-5 text-gray-500" />
              </span>
            </button>
          </Tooltip>
        </div>
      </td>
    </tr>
  );
};
