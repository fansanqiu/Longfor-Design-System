import { LayoutBase } from '@/themes/gitbook'
import Experience from '@/themes/gitbook/components/Experience'
import { getGlobalData } from '@/lib/db/getSiteData'

export async function getStaticProps() {
  const data = await getGlobalData({ from: 'experience' })
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

export default function ExperiencePage(props) {
  return (
    <LayoutBase {...props}>
      <Experience />
    </LayoutBase>
  )
}
