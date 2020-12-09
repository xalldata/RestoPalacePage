import './Blog.css';
import BlogContent from './BlogContent';


function Blog() {

    const content = [
        {
            title1: "Discovery",
            title2: "OUR GASTRONOMY",
            paragraph: "Attending a trade show can be a very effective method of promoting your company and its products. And one of the most effective ways to optimize your trade show display and increase traffic to your booth is through the use of banner stands. "
        },
        {
            title1: "Tasteful",
            title2: "RECIPES MADE WITH PRECISION",
            paragraph: "Classified advertising is a form of advertising that is particularly common in newspapers and other periodicals. A classified is usually textually based and can consist of as little as the type of item being sold, and a contact number to call for more information"
        },
    ]

    return (
        <>
            <section className="blog" >
                <div className="blog-titles">
                    <h2 className="blog-title">Latest Dishes</h2>
                </div>

                {content.map((value, index) => {
                    return <BlogContent title1={value.title1} title2={value.title2} paragraph={value.paragraph} index={index} key={index} />
                })}

            </section>
        </>
    )
}
export default Blog;