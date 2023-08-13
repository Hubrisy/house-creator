import { useState } from 'react';

import './projects.css'

import projectOne from '../../images/projectOne.svg';
import projectTwo from '../../images/projectTwo.svg';
import projectThree from '../../images/projectThree.svg';
import projectFour from '../../images/projectFour.svg';
import projectFive from '../../images/projectFive.svg';
import arrowRightWhite from '../../images/arrowRight-white.svg'
import arrowRight from '../../images/arrowRight.svg'
import arrowLeft from '../../images/arrowLeft.svg'

const Projects = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToSlide = (index) => {
        if (index < 0) {
            index = images.length - 1;
        } else if (index >= images.length) {
            index = 0;
        }

        setCurrentIndex(index);
    };

    const images = [
        projectOne,
        projectTwo,
        projectThree,
        projectFour,
        projectFive
    ]

    return (
        <div className='projects_main-container' id='projects'>
            <div className='projects_title'>Наши проекты</div>
            <div className='prjects_photo-block'>
                <div className='photo_first'>
                    <div className='first_content-block' style={{ backgroundImage: `url(${projectOne})` }}>
                        <div className='content_info-block'>
                            <div className='content_title'>ДОСУГОВЫЙ ЦЕНТР</div>
                            <div className='content_more-info'>
                                <div>ПОДРОБНЕЕ</div>
                                <img src={arrowRightWhite} alt="arrowRightWhite" />
                            </div>
                        </div>
                    </div>
                    <img src={projectTwo} alt="projectTwo" />
                </div>
                <div className='photo_second'>
                    <img src={projectThree} alt="projectThree" />
                    <img src={projectFour} alt="projectFour" />
                    <img src={projectFive} alt="projectFive" />
                </div>
            </div>
            <div className='projects_photo-slider'>
                <button className="prev btn" onClick={() => goToSlide(currentIndex - 1)}>
                    <img src={arrowLeft} alt="" />
                </button>
                <div className="slider">
                    {images.map((image, index) => (
                        <div key={index} className={`slide ${index === currentIndex ? 'active' : ''}`}>
                            <img src={image} alt={`Slide ${index + 1}`} />
                        </div>
                    ))}
                </div>
                <button className="next btn" onClick={() => goToSlide(currentIndex + 1)}>
                    <img src={arrowRight} alt="" />
                </button>
            </div>
            <div className='project_button-block'>
                <div className='project_button'>
                    <div>ВСЕ ПРОЕКТЫ</div>
                    <img src={arrowRightWhite} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Projects;