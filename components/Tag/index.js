import { HiOutlineX } from "react-icons/hi";

export const Tag = ({ className, type, content, close = false }) => {
  return (
    <div className={`tag is-${type} ${className}`}>
      <span>{content}</span>
      {close && (
        <button>
          <HiOutlineX />
        </button>
      )}
    </div>
  );
};
