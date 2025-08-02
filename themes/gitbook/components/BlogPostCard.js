import Badge from '@/components/Badge'
import NotionIcon from '@/components/NotionIcon'
import { siteConfig } from '@/lib/config'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const BlogPostCard = ({ post, className }) => {
  const router = useRouter()
  const [isSelected, setIsSelected] = useState(false)

  useEffect(() => {
    if (router.isReady) {
      const currentSelected =
        decodeURIComponent(router.asPath.split('?')[0]) === post?.href
      setIsSelected(currentSelected)
    }
  }, [router.asPath, router.isReady, post])

  const showPostIcon = siteConfig('POST_TITLE_ICON')
  const showBadge = post?.isLatest && siteConfig('GITBOOK_LATEST_POST_RED_BADGE')

  return (
    <Link href={post?.href} passHref>
      <div
        key={post.id}
        className={`${className} relative py-1.5 cursor-pointer px-1.5 rounded-md hover:bg-gray-50
                    ${isSelected ? 'text-green-500 dark:bg-yellow-100 dark:text-yellow-600 font-semibold' : ' dark:hover:bg-yellow-100 dark:hover:text-yellow-600'}`}>
        <div className='w-full select-none'>
          {showPostIcon && (
            <NotionIcon icon={post?.pageIcon} />
          )}{' '}
          {post.title}
        </div>
        {/* 最新文章加个红点 */}
        {showBadge && (
          <Badge />
        )}
      </div>
    </Link>
  )
}

export default BlogPostCard
