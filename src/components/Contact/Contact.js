import './Contact.css';
import Map from './Map/Map';


function Contact() {
    return (
        <>
            <section className="contact">
                <Map />
                <div className="contact-content" data-aos="fade-right">
                    <h2>Contagct Info.</h2>
                    <h3>Let's Talk</h3>
                    <span className="email">Email@example.com</span>
                    <span className="number">+245478 784 8787</span>
                    <h3>Visit Us</h3>
                    <span className="address">598 street, City, Country</span>
                    <div className="social">
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-youtube"></i></a>
                        <a href="#"><i className="fab fa-pinterest"></i></a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;