import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { verifyTokenForPage } from '@/utils/verifyToken'
import { Comment } from '@prisma/client'
import { getAllComments } from '@/apiCalls/adminApiCall'
import DeleteCommentButton from './DeleteCommentButton'

const AdminCommentsTable = async () => {
  const token = cookies().get('jwtToken')?.value
  if (!token) redirect('/')

  const payload = verifyTokenForPage(token)
  if (payload?.isAdmin === false) redirect('/')

  const comments: Comment[] = await getAllComments(token)

  return (
    <section className="p-5">
      <h1 className="mb-7 text-2xl font-semibold border-gray-300 text-gray-100">
        Comments
      </h1>
      <table className="table w-full text-left">
        <thead className="border-t-2 border-b-2 border-gray-300 text-xl text-textColor">
          <tr>
            <th className="p-2 text-textColor">Comment</th>
            <th className="hidden lg:inline-block p-3 text-textColor">
              Created At
            </th>
            <th className="v">Actions</th>
          </tr>
        </thead>
        <tbody>
          {comments.map((comment) => (
            <tr key={comment.id} className="border-b border-t border-gray-100">
              <td className="p-3 text-gray-100">{comment.text}</td>
              <td className="text-gray-100 p-3 font-normal hidden lg:inline-block">
                {new Date(comment.createdAt).toDateString()}
              </td>
              <td>
                <DeleteCommentButton commentId={comment.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default AdminCommentsTable
