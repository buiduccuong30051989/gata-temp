import { useEffect, useState } from "react";
// import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import { Alert } from "./alert";

export default function Home(props) {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    setOpen(true);
  }, [props]);

  const close = () => {
    setOpen(false);
  };

  return <Alert isOpen={open} onClose={close} {...props} />;
  // return <h1>cuongbeo</h1>;
}

// export default function Home() {
//   return <h1>Cuong beo</h1>;
// }

export const showAlert = (props) => {
  const container = document.getElementById("alert");
  const root = createRoot(container);
  root.render(<Home {...props} />);
  // ReactDOM.render(<Home {...props} />, document.getElementById("alert"));
};

// const container = document.getElementById('app');
// const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(<App tab="home" />);
