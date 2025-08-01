// 禁用 eslint 的 no-unreachable 规则，因为文件中可能存在不可达代码
/* eslint-disable no-unreachable */

export const Home = props => {

    // 返回 JSX 元素
    return (
        < div className="w-full">

            {/* Hero */}
            <div className='flex w-fill flex-col items-center gap-[74px] [background:linear-gradient(180deg,#ECEDEE_0%,#FFF_51%,#FFF_100%,#F1F1F1_100%)] pt-[200px] pb-[145px] justify-center'>
                <div className='flex items-center gap-[23px]'>
                    <span className='[font-family:"Alibaba_PuHuiTi"] text-[68px] font-bold leading-[normal] text-transparent bg-clip-text bg-[linear-gradient(222deg,#275BFF_35.49%,#4ABFEF_65.05%,#6DECA6_84.35%)]'>LF</span>
                    <span className='text-black [font-family:"Alibaba_PuHuiTi"] text-[68px] font-bold leading-[normal]'>DESIGN 3.0</span>
                </div>
                <div className='flex flex-col items-center gap-5 self-stretch px-12 '>
                    <p className='text-[#111] [font-family:"PingFang_SC"] text-3xl font-medium leading-[normal] tracking-[2px]'>为用户提供简洁 一键直达的操作体验。</p>
                    <p className='text-[#1E1E1E] [font-family:"PingFang_SC"] text-xl leading-[normal] tracking-[2px] max-w-[872px]'>通过统一的全局框架及界面设计范式、克制降噪的信息呈现、一致可复用的组件化设计形成龙湖B端平台化产品生态，多系统间可无缝跳转，高易用性，低学习成本。通过一套统一可复用的标准规范来达到体验最优和研发最高效。</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className='flex h-12 justify-center items-center gap-1.5 rounded [background:var(--Main-Color,#165DFF)] px-9 py-0 text-[color:var(--White,#FFF)] text-center [font-family:"PingFang_SC"] text-base font-medium leading-[22px]'>
                        开始使用
                    </button>
                    <button className='flex h-12 justify-center items-center gap-1.5 rounded [background:var(--Secondary-Blue-Secondary-Blue--0,#F4F5F6)] px-9 py-0 text-[color:var(--Grey01,#111)] text-center [font-family:"PingFang_SC"] text-base font-medium leading-[22px]'>
                        设计语言
                    </button>
                </div>
            </div>

            {/* AI智能+ */}
            <div className='flex w-full h-[820px] flex-col items-center gap-20 shrink-0 [background:linear-gradient(213deg,#F1EEFD_15.59%,rgba(241,238,253,0.00)_61.45%)] pt-[100px] pb-[58px] px-12'>
                <div className='flex flex-col items-center gap-[18px] self-stretch'>
                    <div className='flex justify-center items-center gap-5'>
                        <img src="/images/starter/home/ailogo.svg" alt="" />
                        <p className='text-black [font-family:"Alibaba_PuHuiTi"] text-[50px] font-bold leading-[normal]'>AI智能+</p>
                    </div>
                    <div className='flex justify-center items-center gap-5'>
                        <span className='text-[#111] [font-family:"PingFang_SC"] text-3xl font-medium leading-[normal] tracking-[2px]'>AI助手 Copilot AI+范式</span>
                        <span className='[font-family:"PingFang_SC"] text-3xl font-medium leading-[normal] tracking-[2px] bg-[linear-gradient(81deg,#FF8491_16.72%,#5C8DFF_37.45%,#0086F9_55.32%,#0DBDFC_91.06%)] bg-clip-text text-transparent'>让系统更智能</span>
                    </div>
                </div>

                <div className='flex w-full items-center gap-10 max-w-[1200px]'>
                    <div className="h-[389px] self-stretch rounded-3xl w-full flex flex-col gap-[25px] items-center">
                        <img src="/images/starter/home/chatAi.jpg" alt="" />
                        <p className='self-stretch text-[#111] text-center [font-family:"PingFang_SC"] text-[23px] font-semibold leading-[normal] tracking-[2px]'>Chat AI</p>
                    </div>
                    <div className="h-[389px] self-stretch rounded-3xl w-full flex flex-col gap-[25px] items-center">
                        <img src="/images/starter/home/copilotAi.jpg" alt="" />
                        <p className='self-stretch text-[#111] text-center [font-family:"PingFang_SC"] text-[23px] font-semibold leading-[normal] tracking-[2px]'>Copilot AI</p>
                    </div>
                </div>
            </div>

            {/* 设计语言与模式 */}
            <div className='flex w-full flex-col items-center gap-1 [background:#FFF] pt-[100px] pb-[202px] px-12 gap-[80px]'>
                <div className='flex flex-col items-center gap-[18px]'>
                    <p className='text-black [font-family:"Alibaba_PuHuiTi"] text-[50px] font-bold leading-[normal]'>设计语言与模式</p>
                    <p className='text-[#111] [font-family:"PingFang_SC"] text-3xl font-medium leading-[normal] tracking-[2px]'>
                        体系化的组件、模式，帮助你快速搭建产品
                    </p>
                </div>
                <div className='flex w-full items-center gap-10 max-w-[1200px]'>
                    <div className="h-[389px] self-stretch rounded-3xl w-full flex flex-col gap-[25px] items-center">
                        <img src="/images/starter/home/designValue.jpg" alt="" />
                        <div className=" flex items-center flex-col gap-2">
                            <p className='self-stretch text-[#111] text-center [font-family:"PingFang_SC"] text-[23px] font-semibold leading-[normal] tracking-[2px]'>设计价值观</p>
                            <p className='self-stretch text-[#999] text-center [font-family:"PingFang_SC"] text-lg font-normal leading-[normal] tracking-[2px]'>确定之美 呼吸简洁 易用</p>
                        </div>
                    </div>
                    <div className="h-[389px] self-stretch rounded-3xl w-full flex flex-col gap-[25px] items-center">
                        <img src="/images/starter/home/designGuidelines.jpg" alt="" />
                        <div className=" flex items-center flex-col gap-2">
                            <p className='self-stretch text-[#111] text-center [font-family:"PingFang_SC"] text-[23px] font-semibold leading-[normal] tracking-[2px]'>设计指引</p>
                            <p className='self-stretch text-[#999] text-center [font-family:"PingFang_SC"] text-lg font-normal leading-[normal] tracking-[2px]'>设计语言全局设计模式</p>
                        </div>
                    </div>
                    <div className="h-[389px] self-stretch rounded-3xl w-full flex flex-col gap-[25px] items-center">
                        <img src="/images/starter/home/component.jpg" alt="" />
                        <div className=" flex items-center flex-col gap-2">
                            <p className='self-stretch text-[#111] text-center [font-family:"PingFang_SC"] text-[23px] font-semibold leading-[normal] tracking-[2px]'>组件库</p>
                            <p className='self-stretch text-[#999] text-center [font-family:"PingFang_SC"] text-lg font-normal leading-[normal] tracking-[2px]'>WEB端组件库、移动端组件库、数据看板</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
