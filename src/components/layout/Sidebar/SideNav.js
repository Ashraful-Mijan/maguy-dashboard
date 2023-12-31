'use client'
import PerfectScrollbar from 'react-perfect-scrollbar'

const SideNav = () => {
    return (
        <div className="w-[88px] h-full box-border">
            <div className="flex flex-col w-full h-full relative">
                <div className="h-[23px] mx-auto my-[24px] box-border">
                    <img src="/images/Logo.svg" />
                </div>
                <div style={{maxHeight: 'calc(100vh - 221px)', overflow: 'hidden'}}>
                <PerfectScrollbar options={{ wheelPropagation: false, }}>
                    <div className="flex flex-col items-center gap-5">
                        <div className="w-[40px] h-[40px] flex items-center justify-center hover:bg-[#F1F6FF] rounded-[6px]">
                            <img src="/images/hamburger.svg" />
                        </div>
                        <div className="w-[40px] h-[40px] flex items-center justify-center hover:bg-[#F1F6FF] rounded-[6px]">
                            <img src="/images/Notes.svg" />
                        </div>
                        <div className="w-[40px] h-[40px] flex items-center justify-center hover:bg-[#F1F6FF] rounded-[6px]">
                            <img src="/images/arrow-up.svg" />
                        </div>
                        <div className="w-[40px] h-[40px] flex items-center justify-center bg-[#F1F6FF] rounded-[6px]">
                            <img src="/images/calender.svg" />
                        </div>
                        <div className="w-[40px] h-[40px] flex items-center justify-center hover:bg-[#F1F6FF] rounded-[6px]">
                            <img src="/images/user.svg" />
                        </div>
                        <div className="w-[40px] h-[40px] flex items-center justify-center hover:bg-[#F1F6FF] rounded-[6px]">
                            <img src="/images/user-user.svg" />
                        </div>
                        <div className="w-[40px] h-[40px] flex items-center justify-center hover:bg-[#F1F6FF] rounded-[6px]">
                            <img src="/images/transport.svg" />
                        </div>
                        <div className="w-[40px] h-[40px] flex items-center justify-center hover:bg-[#F1F6FF] rounded-[6px]">
                            <img src="/images/dollar.svg" />
                        </div>
                        <div className="w-[40px] h-[40px] flex items-center justify-center hover:bg-[#F1F6FF] rounded-[6px]">
                            <img src="/images/list.svg" />
                        </div>
                        <div className="w-[40px] h-[40px] flex items-center justify-center hover:bg-[#F1F6FF] rounded-[6px]">
                            <img src="/images/alarm.svg" />
                        </div>
                    </div>
                </PerfectScrollbar>
                </div>
                <div className="absolute bottom-0 left-0 h-[150px] py-5 w-full bg-white box-border">
                    <div className="flex flex-col items-center gap-8">
                        <div className="w-[40px] h-[40px] flex items-center justify-center hover:bg-[#F1F6FF] rounded-[6px]">
                            <img src="/images/notification.svg" />
                        </div>
                        <div className="w-[40px] h-[40px] flex items-center justify-center bg-[#F1F6FF] rounded-[6px]">
                            <span className="text-black font-semibold">AR</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideNav;