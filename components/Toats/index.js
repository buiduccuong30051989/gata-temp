import { toast } from "react-toastify";
import {
  HiOutlineExclamation,
  HiOutlineCheck,
  HiOutlineInformationCircle,
  HiOutlineExclamationCircle,
} from "react-icons/hi";

export const toatsSuccess = ({ content, ...props }) => {
  toast.success(content, {
    ...props,
    icon: <HiOutlineCheck />,
  });
};

export const toatsInfo = ({ content, ...props }) => {
  toast.info(content, {
    ...props,
    icon: <HiOutlineInformationCircle />,
  });
};

export const toatsWarning = ({ content, ...props }) => {
  toast.warning(content, {
    ...props,
    icon: <HiOutlineExclamationCircle />,
  });
};

export const toatsDanger = ({ content, ...props }) => {
  toast.error(content, {
    ...props,
    icon: <HiOutlineExclamation />,
  });
};