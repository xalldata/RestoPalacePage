import './About.css';
import AboutContent from './AboutContent';

function About() {

    const content = ["Amazing Crusted Chicken", "Amazing Crusted Chicken", "BoBun Light Odd", "Spicy Egg Paella"];

    return (
        <>
            <h1 className="about-title">Our Specialities</h1>
            <section className="bio-food">

                <div className="square"> </div>
                {
                    content.map((value, index) => {
                        return <AboutContent title={value} index={index} dataAos="flip-up" key={index} />
                    })
                }
            </section>
        </>
    )

}

export default About;
