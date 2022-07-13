// Type
// title === string -> title
// content === string -> content
import {
  HiOutlineExclamation,
  HiOutlineCheck,
  HiOutlineInformationCircle,
  HiOutlineExclamationCircle,
} from "react-icons/hi";

export const Feedback = ({ type = "success", title, description }) => {
  const generateIconType = () => {
    switch (type) {
      case "success":
        return (
          <HiOutlineCheck
            className={`h-5 w-5 text-${type}-400`}
            aria-hidden="true"
          />
        );
        break;
      case "info":
        return (
          <HiOutlineInformationCircle
            className={`h-5 w-5 text-${type}-400`}
            aria-hidden="true"
          />
        );
        break;
      case "warning":
        return (
          <HiOutlineExclamationCircle
            className={`h-5 w-5 text-${type}-400`}
            aria-hidden="true"
          />
        );
        break;
      case "danger":
        return (
          <HiOutlineExclamation
            className={`h-5 w-5 text-${type}-400`}
            aria-hidden="true"
          />
        );
        break;
      default:
        break;
    }
  };

  return (
    <div className={`rounded-md bg-${type}-50 p-4 w-full`}>
      <div className="flex">
        <div className="flex-shrink-0">{generateIconType()}</div>
        <div className="ml-3">
          <h3 className={`text-sm font-medium text-${type}-800`}>{title}</h3>
          <div className={`mt-2 text-sm text-${type}-700`}>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
