import { ServerCard } from "./serverCard";

export const ServerList = ({ type }) => {
  return (
    <div className="mt-6">
      <div className="flex flex-wrap -m-2">
        <ServerCard type={type} />
      </div>
    </div>
  );
};
