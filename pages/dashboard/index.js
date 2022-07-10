import { useState } from "react";
import { AuthLayout } from "../../components/Layout";
import { Filter } from "./filter";
import { VIEW_TYPE } from "../../constant/common";
import { RecentEvents } from "./recentEvents";

export default function Dashboard() {
  return (
    <AuthLayout>
      <div>
        <div>
          <div className="flex justify-between w-full">
            <h2 className="forge-h2">Sites</h2>
          </div>

          <Filter />

          <RecentEvents />
        </div>
      </div>
    </AuthLayout>
  );
}
