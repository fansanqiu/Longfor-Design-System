import { LayoutBase } from '@/themes/gitbook'
import Components from '@/themes/gitbook/components/Components'
import { getGlobalData } from '@/lib/db/getSiteData'

export async function getStaticProps() {
  const data = await getGlobalData({ from: 'components' })
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

export default function ComponentsPage(props) {
  return (
    <LayoutBase {...props}>
      <Components />
    </LayoutBase>
  )
}