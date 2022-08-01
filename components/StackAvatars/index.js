import Avatar from "react-avatar";

export const StackAvatars = (props) => {
  const { names, ...rest } = props;
  let listRenderAvatars = [];
  let hideList = [];
  if (names.length <= 5) {
    listRenderAvatars = names;
  } else {
    const showList = names.slice(0, 4);
    hideList = names.slice(4, names.length);
    listRenderAvatars = [...showList];
  }
  return (
    <div className="stack-avatar rtl">
      {listRenderAvatars.map((item) => (
        <Avatar className="avatar" {...rest} name={item} key={item} />
      ))}
      {Boolean(hideList.length) && (
        <Avatar className="avatar" {...rest} name={`+ ${hideList.length.toString()}`} color="#425A70" />
      )}
    </div>
  );
};
