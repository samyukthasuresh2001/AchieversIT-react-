import logo from '../../../assets/images/logo.png'

const Header = () => {
    return (
        <header >
            <div>
                <img src={logo} alt='AchieversIT' />
            </div>
            <nav>
                <ul>
                    <li>
                        <a>Home</a>
                    </li>
                    <li>
                        <a>About</a>
                    </li>
                    <li>
                        <a>Products</a>
                    </li>
                    <li>
                        <a>Blog</a>
                    </li>
                    <li>
                        <a>Contact</a>
                    </li>
                </ul>
            </nav>

        </header>
    )
}
export default Header;