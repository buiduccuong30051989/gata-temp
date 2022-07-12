import {
  HiOutlineExclamation,
  HiOutlineCheck,
  HiOutlineInformationCircle,
  HiOutlineExclamationCircle,
} from "react-icons/hi";

export const getErrorMessage = (error) => {
  if (typeof error === "string") {
    try {
      const parsedErr = JSON.parse(error);
      if (typeof parsedErr === "string") return error;
      if (parsedErr.message) return parsedErr.message;
    } catch {
      return error;
    }
  }

  if (error?.response?.data?.message) return error?.response?.data?.message;
  return "Something went wrong!";
};

export const alertParams = {
  danger: (e) => ({
    icon: <HiOutlineExclamation className="h-6 w-6 " />,
    title: "Somethings went wrong",
    okText: "Ok",
    closeOnClick: true,
    description: getErrorMessage(e),
    type: "danger",
  }),
  success: {
    icon: <HiOutlineCheck className="h-6 w-6 " />,
    title: "Changes Saved",
    okText: "Ok",
    closeOnClick: true,
    type: "success",
  },
  warning: {
    icon: <HiOutlineExclamationCircle className="h-6 w-6 " />,
    title: "You miss somethings",
    okText: "Ok",
    closeOnClick: true,
    type: "warning",
  },
  info: {
    icon: <HiOutlineInformationCircle className="h-6 w-6 " />,
    title: "Please read our docs for more info",
    okText: "Ok",
    closeOnClick: true,
    type: "info",
  },
  passingParams: (ender, client) => ({
    icon: "speakWarn",
    title: "Your chat has been ended",
    description: `${ender} has ended your chat with ${client}.`,
    okText: "Okay",
    closeOnClick: true,
  }),
};
