import { toast } from "react-toastify";
import {
  HiExclamation,
  HiCheckCircle,
  HiInformationCircle,
  HiExclamationCircle,
} from "react-icons/hi";

export const toatsSuccess = ({ content, description = "", ...props }) => {
  let toastConent = null;
  if (description) {
    toastConent = (
      <>
        <h3>{content}</h3>
        <p>{description}</p>
      </>
    );
  } else {
    toastConent = <h3>{content}</h3>;
  }
  toast.success(toastConent, {
    ...props,
    icon: <HiCheckCircle />,
  });
};

export const toatsInfo = ({ content, description = "", ...props }) => {
  let toastConent = null;
  if (description) {
    toastConent = (
      <>
        <h3>{content}</h3>
        <p>{description}</p>
      </>
    );
  } else {
    toastConent = <h3>{content}</h3>;
  }
  toast.info(toastConent, {
    ...props,
    icon: <HiInformationCircle />,
  });
};

export const toatsWarning = ({ content, description = "", ...props }) => {
  let toastConent = null;
  if (description) {
    toastConent = (
      <>
        <h3>{content}</h3>
        <p>{description}</p>
      </>
    );
  } else {
    toastConent = <h3>{content}</h3>;
  }
  toast.warning(toastConent, {
    ...props,
    icon: <HiExclamation />,
  });
};

export const toatsDanger = ({ content, description = "", ...props }) => {
  let toastConent = null;
  if (description) {
    toastConent = (
      <>
        <h3>{content}</h3>
        <p>{description}</p>
      </>
    );
  } else {
    toastConent = <h3>{content}</h3>;
  }
  toast.error(toastConent, {
    ...props,
    icon: <HiExclamationCircle />,
  });
};
