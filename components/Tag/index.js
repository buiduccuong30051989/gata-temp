import { HiOutlineX } from "react-icons/hi";
import styles from "./styles.module.scss";

export const Tag = ({ type, content, close = true, textColor = "white" }) => {
  return (
    <div className={`${styles.tag} bg-${type}-400 text-${textColor}`}>
      <span>{content}</span>
      {close && (
        <button>
          <HiOutlineX className={styles.tagIcon} />
        </button>
      )}
    </div>
  );
};
