import './gallery.css'
import HousePhotoOne from '../../images/HousePhotoOne.svg'

import ArrowRight from '../../images/arrowRight.svg';
import ArrowLeft from '../../images/arrowLeft.svg'

const Gallery = () => {
    return (
        <div className='gallery_main-container'>
            <div className='gallery_description'>
                <div className='gallery_name title'>Project</div>
                <div className='gallery_name subtitle'>Home</div>
                <div className='gallery_arrows'>
                    <div className='arrow_container'>
                        <img src={ArrowLeft} alt="" />
                    </div>
                    <div className='arrow_container'>
                        <img src={ArrowRight} alt="" />
                    </div>
                </div>
                <div className='gallery_pages'>
                    <div className='page_element'>01</div>
                    <div className='page_stick'></div>
                    <div className='page_element'>02</div>
                </div>
            </div>
            <div className='gallery_photos' style={{backgroundImage:`url(${HousePhotoOne})`}}>
                <div className='gallery_button-block'>
                        <span>ВЗГЛЯНУТЬ</span>
                        <img src={ArrowRight} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Gallery;