import SideNav from '@/components/layout/Sidebar/SideNav'
import SidebarRight from './Calendar';
const Sidebar = () => {
    return (
        <div className='w-[372px] box-border flex'>
            <div className='flex w-[372px] fixed top-0 left-0 bottom-0'>
            <SideNav />
            <SidebarRight />
            </div>
        </div>
    )
}

export default Sidebar;