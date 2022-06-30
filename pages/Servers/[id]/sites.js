import { useRouter } from "next/router";
import Link from "next/link";
import ServerDetail from "./index";
import { AuthLayout } from "components/Layout";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <h1>Sites: {id}</h1>
      <ul>
        <li>
          <Link href="/servers/[id]/sites" as={`/servers/${id}/sites`}>
            <a>First comment</a>
          </Link>
        </li>
        <li>
          <Link href="/post/[id]/[comment]" as={`/post/${id}/second-comment`}>
            <a>Second comment</a>
          </Link>
        </li>
      </ul>
    </>
  );
};

Post.getLayout = function getLayout(page) {
  return <ServerDetail>{page}</ServerDetail>;
};

export default Post;
