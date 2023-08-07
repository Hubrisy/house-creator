import './footer.css'

import Logo from '../../images/LogoBlack.svg'
import Location from '../../images/location.svg'
import Phone from '../../images/phone.svg'
import Mail from '../../images/mail.svg'
import facebook from '../../images/facebook.svg'
import twitter from '../../images/twitter.svg'
import linkedin from '../../images/linkedin.svg'
import wtfisthat from '../../images/wtfisthat.svg'

const Footer = () => {
    return (
        <div className='footer_main-container'>
            <div className='footer_content-container'>
                <div className='footer_logo-block'>
                    <img src={Logo} alt="Logo" />
                </div>
                <div className='footer_info-block'>
                    <div className='info_title'>Информация</div>
                    <div className='info_subtitle'>Главная</div>
                    <div className='info_subtitle'>Галерея</div>
                    <div className='info_subtitle'>Проекты</div>
                    <div className='info_subtitle'>Сертификаты</div>
                    <div className='info_subtitle'>Контакты</div>
                </div>
                <div className='footer_contact-block'>
                    <div className='contact_title'>
                        <div>Контакты</div>
                    </div>
                    <div className='contact_address'>
                        <img src={Location} alt="Location" />
                        <div className='address_descripiton'>
                            <div>100000, Республика  Казахстан,</div>
                            <div>г. Караганда, ул. Телевизионная 10</div>
                        </div>
                    </div>
                    <div className='contact_number'>
                        <img src={Phone} alt="Phone" />
                        <div>+38 (000) 000 00 00</div>
                    </div>
                    <div className='contact_mail'>
                        <img src={Mail} alt="Mail" />
                        <div>mail@gmail.com</div>
                    </div>
                </div>
                <div className='footer_web-block'>
                    <div className='web_title'>
                        <div>Социальные сети</div>
                    </div>
                    <div className='web_image-block'>
                        <div className='web_image'>
                            <img src={facebook} alt="facebook" />
                        </div>
                        <div className='web_image'>
                            <img src={twitter} alt="twitter" />
                        </div>
                        <div className='web_image'>
                            <img src={linkedin} alt="linkedin" />
                        </div>
                        <div className='web_image'>
                            <img src={wtfisthat} alt="wtfisthat" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer_footer-block'>
                <div>© 2019 Digital Project. Все права защищены.</div>
            </div>
        </div>
    )
}

export default Footer;