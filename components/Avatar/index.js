import Avatar from "react-avatar";
import { BASE_COLORS, BASE_LIGHT_COLORS } from "constant/common";

export const ReactAvatar = (props) => {
  const { name, type = "solid", ...rest } = props;
  const colors = type === "solid" ? BASE_COLORS : BASE_LIGHT_COLORS;
  return (
    <Avatar
      className={`avatar ${type}`}
      colors={colors}
      {...rest}
      name={name}
    />
  );
};
