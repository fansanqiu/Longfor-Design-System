import React, { useEffect, useRef, useState } from 'react';
import { useGlobal } from '@/lib/global';
import { siteConfig } from '@/lib/config';
import { useRouter } from 'next/router';
import NavPostList from './NavPostList';
import Catalog from './Catalog';
import JumpToTopButton from './JumpToTopButton';
import PageNavDrawer from './PageNavDrawer';
import BottomMenuBar from './BottomMenuBar';

const Components = (props) => {
  const {
    allNavPages = [],
    post,
    fullWidth: propFullWidth
  } = props;
  
  const { fullWidth: globalFullWidth } = useGlobal();
  const fullWidth = propFullWidth !== undefined ? propFullWidth : globalFullWidth;
  const router = useRouter();
  const isHomePage = router.pathname === '/';
  
  const [tocVisible, changeTocVisible] = useState(false);
  const [pageNavVisible, changePageNavVisible] = useState(false);
  const [filteredNavPages, setFilteredNavPages] = useState(allNavPages);
  
  const searchModal = useRef(null);

  useEffect(() => {
    setFilteredNavPages(allNavPages);
  }, [allNavPages]);

  return (
    <div className="w-full h-full">
      <div
        id='wrapper'
        className={`${siteConfig('LAYOUT_SIDEBAR_REVERSE') ? 'flex-row-reverse' : ''} relative flex justify-between gap-x-6 h-full mx-auto w-full`}>
        
        {/* 左侧边栏，仅在非全宽模式下且为桌面端时显示 */}
        {fullWidth || isHomePage ? null : (
          <div className={'hidden md:block relative z-10 '}>
            <div className='w-80 pt-14 pb-4 sticky top-0 h-screen flex justify-between flex-col'>
              <div className='overflow-y-scroll scroll-hidden pt-10 pl-5'>
                <NavPostList filteredNavPages={filteredNavPages} {...props} />
              </div>
            </div>
          </div>
        )}

        {/* 中间内容区域 */}
        <div
          id='center-wrapper'
          className={`flex flex-col justify-between w-full relative z-10 min-h-screen`}>
          <div
            id='container-inner'
            className={`w-full justify-center mx-auto ${isHomePage ? 'px-0' : (fullWidth ? 'px-5' : 'max-w-3xl px-3 lg:px-0')}`}>
            
            {/* 组件页面内容 */}
            <div className="w-full py-8">
              <h1 className="text-4xl font-bold mb-6 text-center">组件库</h1>
              <p className="text-lg text-gray-600 mb-8 text-center">这里是龙湖设计系统的组件库页面</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow dark:bg-gray-800">
                  <h2 className="text-xl font-semibold mb-2">按钮组件</h2>
                  <p className="text-gray-600 dark:text-gray-300">各种样式和功能的按钮组件</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow dark:bg-gray-800">
                  <h2 className="text-xl font-semibold mb-2">表单组件</h2>
                  <p className="text-gray-600 dark:text-gray-300">输入框、选择器等表单相关组件</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow dark:bg-gray-800">
                  <h2 className="text-xl font-semibold mb-2">导航组件</h2>
                  <p className="text-gray-600 dark:text-gray-300">导航栏、面包屑等导航相关组件</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>

        {/* 右侧边栏，仅在非全宽模式下且为大屏幕桌面端（2xl）时显示 */}
        {fullWidth || isHomePage ? null : (
          <div
            className={'w-72 hidden 2xl:block dark:border-transparent flex-shrink-0 relative z-10 '}>
            <div className='py-14 sticky top-0'>
              <Catalog {...props} />
            </div>
          </div>
        )}
      </div>

      {/* 返回顶部按钮 */}
      <JumpToTopButton />

      {/* 移动端导航抽屉（从左侧滑出） */}
      <PageNavDrawer {...props} filteredNavPages={filteredNavPages} />

      {/* 移动端底部菜单栏 */}
      <BottomMenuBar {...props} />
    </div>
  );
};

export default Components;