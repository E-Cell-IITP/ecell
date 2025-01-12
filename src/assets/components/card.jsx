import "./All.css";
import 'font-awesome/css/font-awesome.min.css';

// Removed TypeScript-specific code (like the interface)

// Functional Card component accepting props
function Card({ ajay, img, description }) {
    return (
        <>
            <div className="card">
                <div className="content">
                    <div className="img"><img src={`${img}`} alt={ajay} /></div>
                    <div className="cardContent">
                        <h3>{ajay} <br /><span>{description}</span></h3>
                    </div>
                </div>
                <ul className="sci">
                    <li>
                        <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                    </li>
                    <li>
                        <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                    </li>
                    <li>
                        <a href="#"><i className="fa fa-github" aria-hidden="true"></i></a>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Card;
