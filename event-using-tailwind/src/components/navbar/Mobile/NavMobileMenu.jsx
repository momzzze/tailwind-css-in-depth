import NavBarMenuItemsMobile from "./NavBarMenuItemsMobile";

const NavMobileMenu = ({ toggleMobileMenu, isOpen }) => {
    return (
        <>
            <div className='block md:hidden ml-auto pr-4 my-auto cursor-pointer'>
                <div id='mobile-menu-button' className={`group ${isOpen ? 'open' : ''}`} onClick={toggleMobileMenu}>
                    <div className='top-0 transition-all group-open:top-2 relative group-open:rotate-45 bg-zinc-200 rounder-full w-8 h-1'></div>
                    <div className='transition-all opacity-100 group-open:opacity-0 bg-zinc-200 rounder-full w-8 h-1 mt-1'></div>
                    <div className='top-0 transition-all group-open:-top-2 relative group-open:-rotate-45 bg-zinc-200 rounder-full w-8 h-1 mt-1'></div>
                </div>
                {isOpen && (
                    <NavBarMenuItemsMobile />
                )}
            </div>
        </>
    )
}

export default NavMobileMenu;