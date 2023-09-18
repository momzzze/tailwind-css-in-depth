
const NavBarMenuItem = ({ label, subMenu }) => {
    return (
        <div className={`menu-item ${subMenu ? 'group' : ''}`}>
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