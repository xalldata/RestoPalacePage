import './AboutContent.css';
import img1 from '../../assets/img1.png';
import img2 from '../../assets/img2.png';
import img3 from '../../assets/img3.png';
import img4 from '../../assets/img4.png';
import { useEffect } from 'react';
import Aos from 'aos';

function AboutContent({ title, index, dataAos }) {

    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, []);

    var image;
    switch (index) {
        case 0:
            image = <img src={img1} alt="" />
            break;
        case 1:
            image = <img src={img2} alt="" />
            break;
        case 2:
            image = <img src={img3} alt="" />
            break;
        case 3:
            image = <img src={img4} alt="" />
            break;
        default:
            break;
    }

    return (
        <>
            <div className={`bio-food-content content-${index}`}>
                <div className="bio-food-content-img">
                    {image}
                </div>

                <div className="bio-food-content-text">
                    <div className="title-paragraph">
                        <h2 >{title}</h2>
                        <p>Beryl Cook is one of Britain’s most talented and amusing artists .Beryl’s pictures feature women of all shapes and sizes enjoying themselves </p>
                    </div>
                    <span className="price">$20</span>
                </div>

            </div>
        </>
    )
}

export default AboutContent;