import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useCallback } from "react";
import { HiOutlineExclamation } from "react-icons/hi";

export const Alert = (props) => {
  const {
    icon = <HiOutlineExclamation className="w-6 h-6" />,
    title = "",
    isOpen = false,
    renderContent = "",
    renderDescription = null,
    closeOnClick = true,
    cancelText = null,
    description = "",
    type = "info",
    okText = "",
    onClose,
    onCancel = () => {},
    onOk = () => {},
    loading,
    btnOkProps = {},
    okBtnClass = "forge-btn-primary",
    ...rest
  } = props;

  const handleClose = useCallback(() => {
    if (closeOnClick) {
      onCancel();
      onClose();
    } else {
      onCancel();
    }
  }, [closeOnClick, onCancel, onClose]);

  const handleOk = useCallback(() => {
    if (closeOnClick) {
      onOk();
      onClose();
    } else {
      onOk();
    }
  }, [closeOnClick, onOk, onClose]);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-20" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl text-left align-middle shadow-xl transition-all">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div
                      className={`
                    bg-${type}-100
                    mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full  sm:mx-0 sm:h-10 sm:w-10`}
                    >
                      <span className={`text-${type}-600`}>{icon}</span>
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-normal leading-6 text-gray-700"
                      >
                        {title}
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">{description}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse gap-4">
                  {cancelText && (
                    <button
                      className="forge-btn-secondary"
                      onClick={handleClose}
                      style={{ minWidth: "100px" }}
                    >
                      {cancelText}
                    </button>
                  )}
                  {okText && (
                    <button
                      className={` ${okBtnClass} ${
                        loading
                          ? "cursor-not-allowed opacity-75"
                          : "cursor-pointer"
                      }`}
                      onClick={handleOk}
                      style={{ minWidth: "100px" }}
                      {...btnOkProps}
                    >
                      {loading && (
                        <span>
                          <svg
                            className="animate-spin mr-2 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 28 28"
                            fill="none"
                            strokeWidth={3}
                          >
                            <circle
                              cx={14}
                              cy={14}
                              r={12}
                              stroke="currentColor"
                              className="opacity-25"
                            />
                            <path
                              d="M26 14c0-6.627-5.373-12-12-12"
                              strokeLinecap="round"
                              stroke="currentColor"
                              className="opacity-75"
                            />
                          </svg>
                        </span>
                      )}
                      {okText}
                    </button>
                  )}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
