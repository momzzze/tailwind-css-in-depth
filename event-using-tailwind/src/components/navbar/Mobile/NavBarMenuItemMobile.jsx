import { useState } from "react";


const NavBarMenuItemMobile = ({ label, subMenu,scrollToId }) => {
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
    const toggleSubMenu = () => {
        setIsSubMenuOpen(!isSubMenuOpen);
    };

    const handleMenuItemClick = () => {
        const targetElement = document.getElementById(scrollToId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div
            className={`relative h-full cursor-pointer  ${subMenu ? '' : 'p-4 font-bold flex items-center justify-center'} text-pink-200 hover:text-zinc-200 transition-colors hover:bg-white/10`}
            onClick={subMenu ? toggleSubMenu : handleMenuItemClick}
        >
            <div className={`${subMenu ? 'p-4 text-center font-bold' : ''}`}>{label}</div>
            {isSubMenuOpen && subMenu && (
                <div onClick={subMenu ? handleMenuItemClick : ''}>
                    <div className="text-center p-4 relative text-pink-200 hover:text-zinc-200 hover:bg-white/5 transition-colors ease-in-out">
                        <span>Single day ticket</span>
                    </div>
                    <div className="text-center p-4 relative text-pink-200 hover:text-zinc-200 hover:bg-white/5 transition-colors ease-in-out">
                        <span>7 day ticket</span>
                    </div>
                </div>
            )}
        </div>
    )
}

export default NavBarMenuItemMobile;