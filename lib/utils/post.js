/**
 * 文章相关工具
 */
import { checkStartWithHttp } from '.'
import { getPostBlocks } from '@/lib/db/getSiteData'
import { getPageTableOfContents } from '@/lib/notion/getPageTableOfContents'
import { siteConfig } from '@/lib/config'
import { getDataFromCache, setDataToCache } from '@/lib/cache/cache_manager'
import { getPageContentText } from '@/pages/search/[keyword]'
import BLOG from '@/blog.config'


/**
 * 获取文章的关联推荐文章列表，目前根据标签关联性筛选
 * @param post
 * @param {*} allPosts
 * @param {*} count
 * @returns
 */
export function getRecommendPost(post, allPosts, count = 6) {
  let recommendPosts = []
  const postIds = []
  const currentTags = post?.tags || []
  for (let i = 0; i < allPosts.length; i++) {
    const p = allPosts[i]
    if (p.id === post.id || p.type.indexOf('Post') < 0) {
      continue
    }

    for (let j = 0; j < currentTags.length; j++) {
      const t = currentTags[j]
      if (postIds.indexOf(p.id) > -1) {
        continue
      }
      if (p.tags && p.tags.indexOf(t) > -1) {
        recommendPosts.push(p)
        postIds.push(p.id)
      }
    }
  }

  if (recommendPosts.length > count) {
    recommendPosts = recommendPosts.slice(0, count)
  }
  return recommendPosts
}

/**
 * 确认slug中不包含 / 符号
 * @param {*} row
 * @returns
 */
export function checkSlugHasNoSlash(row) {
  let slug = row.slug
  if (slug.startsWith('/')) {
    slug = slug.substring(1)
  }
  return (
    (slug.match(/\//g) || []).length === 0 &&
    !checkStartWithHttp(slug) &&
    row.type.indexOf('Menu') < 0
  )
}

/**
 * 检查url中包含一个  /
 * @param {*} row
 * @returns
 */
export function checkSlugHasOneSlash(row) {
  let slug = row.slug
  if (slug.startsWith('/')) {
    slug = slug.substring(1)
  }
  return (
    (slug.match(/\//g) || []).length === 1 &&
    !checkStartWithHttp(slug) &&
    row.type.indexOf('Menu') < 0
  )
}

/**
 * 检查url中包含两个及以上的  /
 * @param {*} row
 * @returns
 */
export function checkSlugHasMorThanTwoSlash(row) {
  let slug = row.slug
  if (slug.startsWith('/')) {
    slug = slug.substring(1)
  }
  return (
    (slug.match(/\//g) || []).length >= 2 &&
    row.type.indexOf('Menu') < 0 &&
    !checkStartWithHttp(slug)
  )
}



/**
 * 处理文章数据
 * @param props
 * @param from
 * @returns {Promise<void>}
 */
export async function processPostData(props, from) {
  // 文章内容加载
  if (!props?.post?.blockMap) {
    props.post.blockMap = await getPostBlocks(props.post.id, from)
  }

  if (props.post?.blockMap?.block) {
    // 目录默认加载
    props.post.content = Object.keys(props.post.blockMap.block).filter(
      key => props.post.blockMap.block[key]?.value?.parent_id === props.post.id
    )
    props.post.toc = getPageTableOfContents(props.post, props.post.blockMap)
    const pageContentText = getPageContentText(props.post, props.post.blockMap)

  }

  // 生成全文索引 && JSON.parse(BLOG.ALGOLIA_RECREATE_DATA)
  if (BLOG.ALGOLIA_APP_ID) {
    uploadDataToAlgolia(props?.post)
  }

  // 推荐关联文章处理
  const allPosts = props.allPages?.filter(
    page => page.type === 'Post' && page.status === 'Published'
  )
  if (allPosts && allPosts.length > 0) {
    const index = allPosts.indexOf(props.post)
    props.prev = allPosts.slice(index - 1, index)[0] ?? allPosts.slice(-1)[0]
    props.next = allPosts.slice(index + 1, index + 2)[0] ?? allPosts[0]
    props.recommendPosts = getRecommendPost(
      props.post,
      allPosts,
      siteConfig('POST_RECOMMEND_COUNT')
    )
  } else {
    props.prev = null
    props.next = null
    props.recommendPosts = []
  }

  delete props.allPages
}
