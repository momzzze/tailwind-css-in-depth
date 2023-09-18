import NavBarMenuItemMobile from "./NavBarMenuItemMobile";

const NavBarMenuItemsMobile = ({ menuItems, handleMenuClick }) => {
    return (
        <div className='absolute top-[62px] bg-gradient-to-r from-rose-500 to-pink-500  peer-open:block w-full left-0'>
            <NavBarMenuItemMobile label={'Home'} subMenu={false}/>
            <NavBarMenuItemMobile label={'Lineup'} subMenu={false}/>
            <NavBarMenuItemMobile label={'Tickets'} subMenu={true}/>
            <NavBarMenuItemMobile label={'Support'} subMenu={false}/>
        </div>
    )
}

export default NavBarMenuItemsMobile;