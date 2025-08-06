import React from 'react';

const Experience = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center min-h-screen p-4">
      <h1 className="text-4xl font-bold mb-6">体验中心</h1>
      <p className="text-lg text-gray-600 mb-8">这里是龙湖设计系统的体验中心页面</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-2">交互案例</h2>
          <p className="text-gray-600">优秀的交互设计案例展示</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-2">动效演示</h2>
          <p className="text-gray-600">精彩的动效和过渡效果</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-2">用户反馈</h2>
          <p className="text-gray-600">用户体验优化和改进建议</p>
        </div>
      </div>
    </div>
  );
};

export default Experience;