import {
  HiExclamation,
  HiCheckCircle,
  HiInformationCircle,
  HiExclamationCircle,
  HiOutlineX,
} from "react-icons/hi";

export const ToastInline = ({
  className,
  type,
  content,
  description = "",
  close = false,
}) => {
  const getIcon = {
    success: <HiCheckCircle />,
    info: <HiInformationCircle />,
    warning: <HiExclamation />,
    danger: <HiExclamationCircle />,
  };

  let toastContent = null;
  if (description) {
    toastContent = (
      <>
        <h3>{content}</h3>
        <p>{description}</p>
      </>
    );
  } else {
    toastContent = <h3>{content}</h3>;
  }
  return (
    <div
      className={`Toastify__toast Toastify__toast--${
        type === "danger" ? "error" : type
      } ${className} toast-inline max-w-none w-full mb-0`}
    >
      <div role="alert" className="Toastify__toast-body">
        <div className="Toastify__toast-icon">{getIcon[type]}</div>
        <div>{toastContent}</div>
      </div>
      {Boolean(close) && (
        <button
          className="Toastify__close-button"
          type="button"
          aria-label="close"
        >
          <HiOutlineX />
        </button>
      )}
    </div>
  );
};
