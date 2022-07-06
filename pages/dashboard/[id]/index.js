import { LeftSidebarLayout } from "components/Layout";
import { navServer } from "router";
import { SubHeader } from "./subHeader";

export default function ServerDetail({ children }) {
  return (
    <LeftSidebarLayout SubHeader={SubHeader} nav={navServer}>
      {children}
    </LeftSidebarLayout>
  );
}
