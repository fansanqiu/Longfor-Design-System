import React from 'react';

const Components = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center min-h-screen p-4">
      <h1 className="text-4xl font-bold mb-6">组件库</h1>
      <p className="text-lg text-gray-600 mb-8">这里是龙湖设计系统的组件库页面</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-2">按钮组件</h2>
          <p className="text-gray-600">各种样式和功能的按钮组件</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-2">表单组件</h2>
          <p className="text-gray-600">输入框、选择器等表单相关组件</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-2">导航组件</h2>
          <p className="text-gray-600">导航栏、面包屑等导航相关组件</p>
        </div>
      </div>
    </div>
  );
};

export default Components;