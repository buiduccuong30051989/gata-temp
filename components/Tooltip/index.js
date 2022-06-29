import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

export const Tooltip = ({ children, content }) => {
  return (
    <Tippy className="custom-tooltip" content={content}>
      {children}
    </Tippy>
  );
};
