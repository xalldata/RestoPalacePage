import burger from '../../assets/hamburger.png';
import bread from '../../assets/bread.png';


function BlogContent({ title1, title2, paragraph, index }) {
    var foodImage;
    switch (index) {
        case 0:
            foodImage = <img src={burger} alt="" />
            break;
        case 1:
            foodImage = <img src={bread} alt="" />
            break; 
        default:
            break;
    }

    return (
        <>
            <div className="blog-content" data-aos="fade-up">
                <div className={`blog-food-content-img food-img${index}`} >
                    {foodImage}
                </div>

                <div className={`blog-food-content-text content-text${index}`}>
                    <div className="title-paragraph">
                        <h2 className="discovery">{title1}</h2>
                        <h2>{title2}</h2>
                        <p>{paragraph}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogContent;