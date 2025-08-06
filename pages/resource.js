import { LayoutBase } from '@/themes/gitbook'
import Resource from '@/themes/gitbook/components/Resource'
import { getGlobalData } from '@/lib/db/getSiteData'

export async function getStaticProps() {
  const data = await getGlobalData({ from: 'resource' })
  const { allNavPages, siteInfo } = data
  const post = allNavPages?.[0]
  const prev = null
  const next = allNavPages?.[1] || null

  return {
    props: {
      post,
      allNavPages,
      siteInfo,
      prev,
      next
    },
    revalidate: 1
  }
}

export default function ResourcePage(props) {
  return (
    <LayoutBase {...props}>
      <Resource />
    </LayoutBase>
  )
}
