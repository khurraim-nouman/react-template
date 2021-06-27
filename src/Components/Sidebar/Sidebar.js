import SidebarLink from './SidebarLink/SidebarLink'
import  './Sidebar.css'

const Sidebar = () => {
    return (
        <>
            <img
             src='https://icon-library.com/images/profile-icon-white/profile-icon-white-22.jpg'
             className='img-fluid pb-5 mt-5'
             alt='Not Found'
             />

            <div className='container'>
                <SidebarLink /> 
                <SidebarLink
                text='Profit' />
                <SidebarLink
                 text='Devis'/>
                <SidebarLink
                text='Features' />
            </div> 
            
        </>
    );
}

export default Sidebar;