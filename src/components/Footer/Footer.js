import './Footer.css';


function Footer() {
    return (
        <>
            <footer>
                <div className="footer-text">
                    <div className="footer-content" data-aos="zoom-in">
                        <h2>THE FIASCO</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti dolorum, sint corporis nostrum, possimus unde eos vitae eius quasi saepe.</p>
                    </div>
                    <div className="footer-content" data-aos="zoom-in">
                        <h2>CONTACT INFO</h2>
                        <ul>
                            <li>1234 Altschul, New York, NY 10027-0000</li>
                            <li>+1 987 654 3210525</li>
                            <li>contact@thefiasco.com</li>
                        </ul>
                    </div>
                    <div className="footer-content" data-aos="zoom-in">
                        <h2>OPENINGS HOUR</h2>
                        <p>OPENINGS HOURS Monday to Friday | 10:00 AM - 11:00 PM</p>
                    </div>
                </div>
                <span className="copyright">2018 THE FIASCO. <span className="all-rights"> All rights reserved.</span> </span>
            </footer>
        </>
    )
}

export default Footer;