import { siteConfig } from '@/lib/config'
import Link from 'next/link'

/**
 * AfterHero组件 - 支持多张图片定制的组件
 * @param {*} param0
 * @returns
 */
export const AfterHero = () => {
  const enableAfterHero = siteConfig('STARTER_AFTER_HERO_ENABLE');
  const images = siteConfig('STARTER_AFTER_HERO_IMAGES') || [];

  if (!enableAfterHero || images.length === 0) return null;

  return (
    <>
      {/* <!-- ====== AfterHero Section Start --> */}
      <section className='bg-white pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]'>
        <div className='container mx-auto'>
          {/* 图片列表 - 一行3张图片 */}
          <div className='-mx-4 flex flex-wrap'>
            {images.filter(item => item && typeof item.path === 'string' && item.path.trim() !== '').map((item, index) => (
              <div key={index} className='w-full px-4 md:w-1/2 lg:w-1/3'>
                <div className='wow fadeInUp group mb-10' data-wow-delay={`${0.1 * (index + 1)}s`}>
                  <div className='mb-8 overflow-hidden rounded-[5px]'>
                    <Link href={item.link?.trim() || '#'} target={item.target || '_self'} className='block'>
                      <img
                        src={item.path.trim()}
                        alt={item.alt || `AfterHero Image ${index + 1}`}
                        className='w-full h-[258px] object-cover overflow-hidden transition group-hover:rotate-6 group-hover:scale-125'
                      />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <!-- ====== AfterHero Section End --> */}
    </>
  )
}