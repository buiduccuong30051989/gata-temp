import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useCallback } from "react";
import { HiOutlineExclamation, HiOutlineX } from "react-icons/hi";

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
    okBtnClass = "button is-info",
    cancelBtnClass = "button is-regular text-slate-800",
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
              <Dialog.Panel className="bg-white w-full max-w-md transform overflow-hidden rounded text-left shadow-200 transition-all">
                <div className="">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-normal leading-6 text-slate-800 px-4 py-3 border-b border-b-slate-100"
                  >
                    {title}
                    <button
                      onClick={handleClose}
                      className="button is-minimal absolute top-2 right-1"
                    >
                      <span className="icon">
                        <HiOutlineX className="w-4 h-4 text-slate-500" />
                      </span>
                    </button>
                  </Dialog.Title>
                  <div className="p-4">
                    <p className="text-sm text-gray-500">{description}</p>
                  </div>
                </div>

                <div className="flex flex-row-reverse px-4 py-3 border-t border-t-slate-100 gap-4">
                  {cancelText && (
                    <button
                      className={cancelBtnClass}
                      onClick={handleClose}
                      style={{ minWidth: "100px" }}
                    >
                      {cancelText}
                    </button>
                  )}
                  {okText && (
                    <button
                      className={` button is-${type} ${
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
