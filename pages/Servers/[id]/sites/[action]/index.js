import { useRouter } from 'next/router'
import Link from 'next/link'

const Post = () => {
  const router = useRouter()
  console.log(router.query)
  const { id, action } = router.query

  return (
    <>
      <h1>Sites ID: {action}</h1>
      <ul>
        <li>
          <Link href="/servers/[id]/sites" as={`/servers/${id}/sites/${action}`}>
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
  )
}

export default Post