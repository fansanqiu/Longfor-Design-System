import React from 'react';

const Resource = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center min-h-screen p-4">
      <h1 className="text-4xl font-bold mb-6">资源中心</h1>
      <p className="text-lg text-gray-600 mb-8">这里是龙湖设计系统的资源中心页面</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-2">设计规范</h2>
          <p className="text-gray-600">完整的设计规范和标准文档</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-2">图标库</h2>
          <p className="text-gray-600">丰富的图标资源和下载</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-2">模板文件</h2>
          <p className="text-gray-600">各种设计模板和示例文件</p>
        </div>
      </div>
    </div>
  );
};

export default Resource;