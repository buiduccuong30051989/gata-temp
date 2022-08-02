import Avatar from "react-avatar";
import { BASE_COLORS, BASE_LIGHT_COLORS } from "constant/common";

export const StackAvatars = (props) => {
  const { names, type = "solid", ...rest } = props;
  const colors = type === "solid" ? BASE_COLORS : BASE_LIGHT_COLORS;
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
        <Avatar
          colors={colors}
          className={`avatar ${type}`}
          {...rest}
          name={item}
          key={item}
        />
      ))}
      {Boolean(hideList.length) && (
        <Avatar
          className={`avatar avatar-hide ${type}`}
          {...rest}
          name={`+ ${hideList.length.toString()}`}
          color={`${type === 'solid' ? '#425A70' : '#F5F6F7'}`}
        />
      )}
    </div>
  );
};
