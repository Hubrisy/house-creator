import './header.css';
import Logo from '../../images/Logo.svg';

const Header = () => {
    return (
        <div className='header_main-container'>
            <div className='header_logo'>
                <img src={Logo} alt="logo" />
            </div>
            <div className='header_nav'>
                <div>ГЛАВНАЯ</div>
                <div>ГАЛЕРЕЯ</div>
                <div>ПРОЕКТЫ</div>
                <div>СЕРТИФИКАТЫ</div>
                <div>КОНТАКТЫ</div>
            </div>
        </div>
    )
}

export default Header;