
const NavBarLogo = ({ logo }) => {
    return (
        <div className='flex items-center p-2 gap-2'>
            <img src={logo} width={50} />
            <div className='font-bold text-2xl'>
                tw:<span className='text-sky-900'>mf</span>
            </div>
        </div>
    )
}

export default NavBarLogo;