import './description.css';

import companyOne from '../../images/companyOne.svg';
import companyTwo from '../../images/companyTwo.svg';
import companyThree from '../../images/companyThree.svg';
import arrowRight from '../../images/arrowRight.svg'

const Description = () => {
    return (
        <div className='description_main-container'>
            <div className='description_content-block'>
                <div className='description_image-block'>
                    <div className='image_first-block'>
                        <img src={companyOne} alt="companyOne" />
                        <img className='image_second' src={companyTwo} alt="companyTwo" />
                    </div>
                    <div className='image_second-block'>
                        <img src={companyThree} alt="companyTwo" />
                    </div>
                </div>
                <div className='description_description-block'>
                    <div className='description_title'>О компании</div>
                    <div className='description_text-content'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div>
                    <div className='descriptin_button'>
                        <span>ЧИТАТЬ</span>
                        <img src={arrowRight} alt="arrowRight" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Description;