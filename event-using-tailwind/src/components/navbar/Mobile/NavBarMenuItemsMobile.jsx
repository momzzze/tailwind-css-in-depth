import NavBarMenuItemMobile from "./NavBarMenuItemMobile";

const NavBarMenuItemsMobile = ({ menuItems, handleMenuClick }) => {
    return (
        <div className='absolute top-[62px] bg-gradient-to-r from-rose-500 to-pink-500  peer-open:block w-full left-0'>
            <NavBarMenuItemMobile label={'Home'} subMenu={false} scrollToId="home"/>
            <NavBarMenuItemMobile label={'Lineup'} subMenu={false} scrollToId="lineup"/>
            <NavBarMenuItemMobile label={'Tickets'} subMenu={true} scrollToId="tickets"/>
            <NavBarMenuItemMobile label={'Headliners'} subMenu={false} scrollToId="headliners"/>
        </div>
    )
}

export default NavBarMenuItemsMobile;