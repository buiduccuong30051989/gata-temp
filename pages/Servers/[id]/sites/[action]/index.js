import { LeftSidebarLayout } from "components/Layout";
import { sitesServer } from "router";
import { SubHeader } from "./subHeader";

export default function SitesDetail({ children }) {
  return (
    <LeftSidebarLayout SubHeader={SubHeader} nav={sitesServer}>
      {children}
    </LeftSidebarLayout>
  );
}
