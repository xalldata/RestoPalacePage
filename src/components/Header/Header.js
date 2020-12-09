import './Header.css';
import logo from '../../assets/logo.png';
import img1 from '../../assets/food/food1.jpg';
import img2 from '../../assets/food/food2.jpg';
import img3 from '../../assets/food/food3.jpg';
import SwiperCore, { Autoplay, Navigation, Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.scss';

SwiperCore.use([Virtual, Autoplay]);
SwiperCore.use([Navigation]);


function burger() {
    var nav = document.querySelector('.nav-links');
    nav.classList.toggle('nav-active')
}

function Header() {
    const slides = [
        <SwiperSlide key="img1"><img src={img2} alt="hero-img" className="hero-img" /></SwiperSlide>,
        <SwiperSlide key="img2"><img src={img1} alt="hero-img" className="hero-img" /></SwiperSlide>,
        <SwiperSlide key="img3"><img src={img3} alt="hero-img" className="hero-img" /></SwiperSlide>
    ];

    return (
        <>
            <nav>
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <ul className="nav-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <div className="burger" onClick={burger}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </nav>
            <header>

                <div className="hero-imgs">
                    <div className="title">
                        <h2 className="welcome">Welcome</h2>
                        <h1>Resto Palace</h1>
                        <h2 className="specialities">MEDITERRANEAN SPECIALITIES</h2>
                    </div>
                    <Swiper
                        spaceBetween={0}
                        slidesPerView={1} direction="vertical" navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        loop
                        navigation
                        speed={1000} autoplay>{slides}</Swiper>
                </div>

            </header>
        </>
    )
}

export default Header;


