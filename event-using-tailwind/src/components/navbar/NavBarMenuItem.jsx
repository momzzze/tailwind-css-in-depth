
const NavBarMenuItem = ({ label, subMenu, scrollToId }) => {
    const handleMenuItemClick = () => {
        const targetElement = document.getElementById(scrollToId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div className={`menu-item ${subMenu ? 'group' : ''}`}
            onClick={handleMenuItemClick}
        >
            <span>{label}</span>
            {subMenu && (
                <div className="group-hover:block dropdown-menu-items">
                    <div className="dropdown-menu-item">
                        <span>Single day ticket</span>
                    </div>
                    <div className="dropdown-menu-item">
                        <span>7 day ticket</span>
                    </div>
                </div>
            )}
        </div>
    )
}

export default NavBarMenuItem;