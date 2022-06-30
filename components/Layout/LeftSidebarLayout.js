import { AuthLayout } from "components/Layout";

export const LeftSidebarLayout = ({
  children,
  pageClassName,
  Nav,
  SubHeader,
}) => {
  return (
    <AuthLayout>
      <div className={pageClassName}>
        <SubHeader />

        <div className="flex mt-12">
          <nav className="pr-2 w-1/6 space-y-2">
            <Nav />
          </nav>
          <div className="w-5/6">{children}</div>
        </div>
      </div>
    </AuthLayout>
  );
};
