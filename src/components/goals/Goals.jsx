import './goals.css'

import goalOne from '../../images/goalOne.svg';
import goalTwo from '../../images/goalTwo.svg';

const Goals = () => {
    return (
        <div className='goals_main-container'>
            <div className='goals_title'>Основные задачи</div>
            <div className='goals_content-block'>
                <div className='goals_content first'>
                    <img src={goalOne} alt="goalOne" />
                    <div>Создание комфортных условий и повышение качества обслуживания клиентов</div>
                </div>
                <div className='goals_content second'>
                    <img src={goalTwo} alt="goalTwo" />
                    <div>Постоянно совершенствовать качество предоставляемых услуг путем обучения персонала, закупки нового оборудования и усиленной рекламы на рынке</div>
                </div>
            </div>
        </div>
    )
}

export default Goals;