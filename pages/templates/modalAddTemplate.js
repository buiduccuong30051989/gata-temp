import { useState } from "react";
import { Switch } from "@headlessui/react";
import { Modal } from "components/Modal";
import {
  HiOutlineUsers,
  HiOutlineDatabase,
  HiOutlineLockClosed,
  HiOutlineShare,
} from "react-icons/hi";

export const ModalAddTempate = ({ isOpen, closeModal }) => {
  const [step, setStep] = useState(1);
  const [privateTemplate, setPrivateTemplate] = useState(true);

  const AddNewTemplateTab = () => (
    <>
      <div className="px-4 pb-3 h-[300px] customized-scrollbar overflow-y-auto">
        <table className="w-full text-left ">
          <thead className="text-gray-500">
            <tr className="h-10 sticky top-0 bg-white">
              <th></th>
              <th className="pr-4 font-light">SITE </th>
              <th className="pr-4 font-light">CREATE AT </th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
              <tr key={item} className="h-12 border-t border-gray-100">
                <td className="pr-4">
                  <input
                    id={`site_${item}`}
                    type="checkbox"
                    className="forge-checkbox"
                  />
                </td>
                <td className="pr-4 py-2">
                  <div className="text-sm font-normal text-gray-700 inline-block">
                    <label
                      htmlFor={`site_${item}`}
                      className="cursor-pointer select-none"
                    >
                      <span className="flex mb-1">widoyi.us10.instawp.xyz</span>
                      <div className="flex ">
                        <span className="text-xs text-gray-500 flex mr-2 justify-center ">
                          <HiOutlineUsers className="h-3 w-3 mr-1" />
                          <span>CODE TAY</span>
                        </span>
                        <span className="text-xs text-gray-500 flex mr-2 justify-center ">
                          <HiOutlineDatabase className="h-3 w-3 mr-1" />
                          <span>108.95 MB</span>
                        </span>
                      </div>
                    </label>
                  </div>
                </td>
                <td className="pr-4">
                  <div className="text-sm text-gray-500 capitalize">
                    7 hours ago
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="py-4 px-4 flex space-x-4">
        <button
          type="button"
          className="forge-btn-secondary bg-gray-100 w-full"
          onClick={() => closeModal()}
        >
          Cancel
        </button>
        <button
          onClick={() => setStep(2)}
          type="submit"
          className="forge-btn-primary w-full"
        >
          Next
        </button>
      </div>
    </>
  );

  const SaveNewTemplate = () => (
    <>
      <div className="px-4 pb-3">
        <div className="mb-4">
          <label
            htmlFor="template_name"
            className="block text-sm font-light text-gray-700"
          >
            Template Name
          </label>
          <div>
            <input
              type="text"
              id="template_name"
              placeholder="Template Name"
              autoComplete="template-name"
              className="forge-input mt-1 block w-full "
              onChange={() => {}}
            />
          </div>
        </div>

        <div className="mb-4 mt-4">
          <label
            htmlFor="template_desc"
            className="block text-sm font-light text-gray-700"
          >
            Description
          </label>
          <div>
            <textarea
              id="template_desc"
              placeholder="Template Description"
              className="forge-input mt-1 block w-full "
              onChange={() => {}}
              rows={4}
            />
          </div>
        </div>

        <div className="mt-4 mb-4 flex justify-between text-gray-500 items-center">
          <div>
            <h6 className="text-sm font-light text-gray-700">Template Type</h6>
            <span className="mt-2 text-xs font-light">
              Create public sandbox with Shared templates
            </span>
          </div>
          <div>
            <div className=" flex space-x-1 rounded-xl bg-gray-300/50 p-1 w-[280px] mx-auto">
              <button
                onClick={() => setPrivateTemplate(true)}
                className={`w-full rounded-lg py-2.5 text-sm leading-5 font-normal text-gray-700 flex items-center justify-center ${
                  privateTemplate
                    ? "bg-active-link shadow text-teal-400"
                    : "hover:bg-white/[0.35]"
                }`}
              >
                <HiOutlineLockClosed className="w-4 h-4 mr-2" />
                Private
              </button>
              <button
                onClick={() => setPrivateTemplate(false)}
                className={`w-full rounded-lg py-2.5 text-sm leading-5 font-normal text-gray-700 flex items-center justify-center ${
                  !privateTemplate
                    ? "bg-active-link shadow text-teal-400"
                    : "hover:bg-white/[0.35]"
                }`}
              >
                <HiOutlineShare className="w-4 h-4 mr-2" />
                Share
              </button>
            </div>
          </div>
        </div>

        <div className="mt-4 flex justify-between items-center">
          <div>
            <h6 className="text-sm font-light text-gray-700 flex items-center">
              <span>Instant Template</span>
              <a
                className="font-normal text-xs text-gray-700 text-left flex float-right ml-3"
                href="/subscription/plans"
              >
                <span>Upgrade to unlock</span>
                <HiOutlineLockClosed className="h-4 w-4 ml-1 text-gray-500" />
              </a>
            </h6>
            <span className="mt-2 text-xs font-light text-gray-500">
              Supercharge your templates for instant creation
            </span>
          </div>

          <Switch
            checked={privateTemplate}
            onChange={setPrivateTemplate}
            disabled
            className={`${privateTemplate ? "bg-gray-400" : "bg-gray-300"}
          relative inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
          >
            <span className="sr-only">Use setting</span>
            <span
              aria-hidden="true"
              className={`${privateTemplate ? "translate-x-5" : "translate-x-0"}
            pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
          </Switch>
        </div>
      </div>

      <div className="py-4 px-4 flex space-x-4">
        <button
          type="button"
          className="forge-btn-secondary bg-gray-100 w-full"
          onClick={() => setStep(1)}
        >
          Back
        </button>
        <button type="submit" className="forge-btn-primary w-full">
          Save
        </button>
      </div>
    </>
  );

  const getStepAddNewTemplate = () => {
    if (step === 2) return <SaveNewTemplate />;
    return <AddNewTemplateTab />;
  };

  const getStepAddNewTemplateTitle = () => {
    if (step === 2) return "Save as Template";
    return "Create Template";
  };

  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
      panelClassName="w-full max-w-lg transform overflow-hidden bg-white rounded-2xl  text-left align-middle shadow-xl transition-all"
      modalTitle={getStepAddNewTemplateTitle}
    >
      {getStepAddNewTemplate()}
    </Modal>
  );
};
