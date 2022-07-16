import styles from "./styles.module.scss";
export const Chip = ({ type, content }) => {
  return (
    <span className={`${styles.chip} bg-${type}-400 bg-opacity-10`}>
      <span className={styles.chipIconWrap}>
        <span className={`${styles.chipIcon} bg-${type}-400`} />
      </span>
      {content}
    </span>
  );
};
