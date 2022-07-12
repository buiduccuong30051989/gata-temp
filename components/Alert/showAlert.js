import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { Alert } from "./alert";

export default function AlertWrapper(props) {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    setOpen(true);
  }, [props]);

  const close = () => {
    setOpen(false);
  };

  return <Alert isOpen={open} onClose={close} {...props} />;
}

export const showAlert = (props) => {
  const container = document.getElementById("alert");
  const root = createRoot(container);
  root.render(<AlertWrapper {...props} />);
};
