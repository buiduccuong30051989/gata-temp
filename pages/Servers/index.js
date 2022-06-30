import { useState } from "react";
import { AuthLayout } from "../../components/Layout";
import { Filter } from "./filter";
import { ServerList } from "./serverList";
import { VIEW_TYPE } from "../../constant/common";
import { RecentEvents } from "./recentEvents";

export default function Servers() {
  const [type, setType] = useState(VIEW_TYPE.GRID);

  return (
    <AuthLayout>
      <div>
        <div>
          <div className="flex justify-between w-full">
            <h2 className="forge-h2">Servers</h2>
          </div>

          <Filter type={type} setType={setType} />

          <ServerList type={type} />

          <RecentEvents />
        </div>
      </div>
    </AuthLayout>
  );
}
