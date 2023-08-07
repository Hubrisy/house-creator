import './projects.css'

import projectOne from '../../images/projectOne.svg';
import projectTwo from '../../images/projectTwo.svg';
import projectThree from '../../images/projectThree.svg';
import projectFour from '../../images/projectFour.svg';
import projectFive from '../../images/projectFive.svg';
import arrowRightWhite from '../../images/arrowRight-white.svg'

const Projects = () => {
    return (
        <div className='projects_main-container'>
            <div className='projects_title'>Наши проекты</div>
            <div className='prjects_photo-block'>
                <div className='photo_first'>
                    <div className='first_content-block' style={{backgroundImage: `url(${projectOne})`}}>
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