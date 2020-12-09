import './InteriorImg.css';
import port0 from '../../assets/port5-1.jpg';
import port1 from '../../assets/port1-3.jpg';
import port2 from '../../assets/port2-2.jpg';
import port3 from '../../assets/port6-2.jpg';



function ret(e, number) {
    var interior = document.querySelector('.interior-imgs');
     switch (number) {
         case 0:
             interior.style.backgroundImage = `url(${port0})`;
             break;
         case 1:
             interior.style.backgroundImage = `url(${port1})`;
             break;
         case 2:
             interior.style.backgroundImage = `url(${port2})`;
             break;
         case 3:
             interior.style.backgroundImage = `url(${port3})`;
             break;
         default:
             break;
     }


    var white = document.querySelector(`.white-hide${number}`);

    if (white.offsetHeight < 150) {
        var newHeight = white.offsetHeight + 150;
    }
    white.classList.add('current');
    white.style.height = `${newHeight}px`;
}

function mouseLeave(e, number) {
    var white = document.querySelector(`.white-hide${number}`);
    var newHeight = 0;

    white.style.height = `${newHeight}px`;

    white.classList.remove('current');
}


function InteriorImg({ number, text }) {

    return (
        <>
            <div className={`img img-${number}`} onMouseEnter={(e) => ret(e, number)} onMouseLeave={(e) => mouseLeave(e, number)}>
                <div className={`white-hide white-hide${number}`}>
                    <h5>Desserts</h5>
                    <h6>{text}</h6>
                </div>
            </div>
        </>
    )
}

export default InteriorImg;