import './Interior.css';
import InteriorImg from './InteriorImg';


const text = ["Frozen Desserts", "Pastries", "Cookies", "Pies"];

function Interior() {

    return (
        <>
            <h1 className="interior-title">Desserts</h1>
            <div className="interior-imgs">
                {text.map((value, index) => {
                    return <InteriorImg number={index} text={value} key={index} />
                })}
            </div>
        </>
    )
}

export default Interior;