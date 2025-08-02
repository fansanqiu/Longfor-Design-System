import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export const NormalMenu = props => {
  const { link } = props
  const router = useRouter()
  const [selected, setSelected] = useState(false)

  useEffect(() => {
    if (router.isReady) {
      setSelected(router.pathname === link.href || router.asPath === link.href)
    }
  }, [router.asPath, router.isReady, link])

  if (!link || !link.show) {
    return null
  }

  return (
    <Link
      key={link?.href}
      title={link.name}
      href={link.href}
      className={
        'py-0.5 duration-500 justify-between text-gray-500 dark:text-gray-300 hover:text-black hover:underline cursor-pointer flex flex-nowrap items-center ' +
        (selected ? 'text-black' : ' ')
      }>
      <div className='my-auto items-center justify-center flex '>
        <div className={'hover:text-black'}>{link.name}</div>
      </div>
      {link.slot}
    </Link>
  )
}
