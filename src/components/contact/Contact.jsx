import './contact.css';

import contactUs from '../../images/contactUs.svg';
import arrowRight from '../../images/arrowRight-white.svg'

const Contact = () => {
    return (
        <div className='contact_main-container'>
            <div className='contact_title'>Связаться с нами</div>
            <div className='contact_content'>
                <div className='contact_input-block'>
                    <input className='input' placeholder='Имя' type="text" />
                    <input className='input' placeholder='Номер телефона*' type="text" />
                    <input className='input' placeholder='E-mail' type="text" />
                    <input className='input' placeholder='Интересующий товар/услуга' type="text" />
                    <textarea className='textarea' placeholder='Сообщение' name="" id="" cols="30" rows="10"></textarea>
                    <div className='contact_text'>Отправляя заявку Вы соглашаетесь с политикой конфиденциальности</div>
                </div>
                <div className='contact_image-block'>
                    <img src={contactUs} alt="contactUs" />
                </div>
            </div>
            <div className='contact_button-block'> 
                    <div className='contact_button'>
                        <div>ОТПРАВИТЬ</div>
                        <img src={arrowRight} alt="arrowRight" />
                    </div>
                </div>
        </div>
    )
}

export default Contact;