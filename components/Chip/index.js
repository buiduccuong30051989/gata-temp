export const Chip = ({ type = '', content, classNames }) => {
  return (
    <span className={`chip is-${type} ${classNames}`}>
      <span className="chip-dot" />
      {content}
    </span>
  );
};
