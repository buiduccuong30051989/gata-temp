import { AuthLayout } from "components/Layout";
import Link from "next/link";
import { useRouter } from "next/router";

export const LeftSidebarLayout = ({
  children,
  pageClassName,
  nav,
  SubHeader,
}) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <AuthLayout>
      <div className={pageClassName}>
        <SubHeader />

        <div className="flex mt-12">
          <nav className="pr-2 w-1/6 space-y-2">
            {nav.map((item) => (
              <Link key={item.title} href={`/servers/${id}/${item.path}`}>
                <a className="forge-tab-item">
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
