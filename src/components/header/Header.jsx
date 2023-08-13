import './header.css';
import Logo from '../../images/Logo.svg';
import { useRef } from 'react';

const Header = () => {

    const myElementRef = useRef(null);

    const hideBlock = () => {

        const myElement = myElementRef.current;

        if(myElement.style.display === 'none'){
            myElement.style.display = 'block';
            document.body.style.overflow = 'hidden'
        }else{
            myElement.style.display = 'none';
            document.body.style.overflow = 'scroll'
        }
    }
    return (
        <div className='header_main-container' id='#header'>
            <div className='header_logo'>
                <img src={Logo} alt="logo" />
            </div>
            <div className='header_nav' id='myElement' ref={myElementRef}>
                <div><a href='#header'>ГЛАВНАЯ</a></div>
                <div><a href='#gallery'>ГАЛЕРЕЯ</a></div>
                <div><a href='#projects'>ПРОЕКТЫ</a></div>
                <div><a href='#sertificates'>СЕРТИФИКАТЫ</a></div>
                <div><a href='#contacts'>КОНТАКТЫ</a></div>
            </div>
            <div className='header_hamburger-block' onClick={hideBlock}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Header;