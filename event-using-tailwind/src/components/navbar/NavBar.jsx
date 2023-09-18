import { useState } from 'react';
import logoInverted from '../../assets/logo-inverted.png';
import NavBarLogo from './NavBarLogo';
import NavBarMenuItem from './NavBarMenuItem';
import NavMobileMenu from './Mobile/NavMobileMenu';


const NavBar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }

    return (
        <nav className="sticky flex top-0 bg-gradient-to-r from-rose-500 to-pink-500">
            <NavBarLogo logo={logoInverted} />
            <NavMobileMenu toggleMobileMenu={toggleMobileMenu} isOpen={isMobileMenuOpen} />
            
            <div className='md:flex flex-1  hidden items-center justify-end'>
                <NavBarMenuItem label={'Home'} subMenu={false} />
                <NavBarMenuItem label={'Lineup'} subMenu={false} />
                <NavBarMenuItem label={'Thickets'} subMenu={true} />
                <NavBarMenuItem label={'Support'} subMenu={false} />
            </div>
        </nav>
    )
}

export default NavBar;