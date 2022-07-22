import { AuthLayout } from "components/Layout";
import Link from "next/link";
import { navUser } from "router";
// import { SubHeader } from "pages/dashboard/[id]/subHeader";

export const LeftSidebarLayout = ({ children, pageClassName }) => {
  return (
    <AuthLayout>
      <div className={pageClassName}>
        {/* <SubHeader /> */}
        <div className="flex mt-12">
          <nav className="pr-2 w-1/6 space-y-2">
            {navUser.map((item) => (
              <Link key={item.title} href={`${item.path}`}>
                <a className="wphub-tab-item">
                  {item.icon}
                  {item.title}
                </a>
              </Link>
            ))}
          </nav>
          <div className="w-5/6">{children}</div>
        </div>
      </div>
    </AuthLayout>
  );
};
