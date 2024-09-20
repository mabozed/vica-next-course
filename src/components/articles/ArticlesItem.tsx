import Link from 'next/link'
import { Article } from '@prisma/client'

interface ArticleItemProps {
  article: Article
}

const ArticleItem = ({ article }: ArticleItemProps) => {
  return (
    <div className="p-5 rounded-lg my-1 shadow-lg border-2  bg-slate-400 w-full md:w-2/5 lg:w-1/4">
      <h3 className="text-xl font-bold  line-clamp-1">{article.title}</h3>
      <p className="my-2 text-l text-gray-700 p-1 line-clamp-3">
        {article.description}
      </p>
      <Link
        className="text-xl bg-primary hover:bg-[#2d323b] w-full block text-center p-1 text-white rounded-lg"
        href={`/articles/${article.id}`}
      >
        Read More
      </Link>
    </div>
  )
}

export default ArticleItem
