import "../components/all.css"
import img from './istockphoto-1337475689-612x612.jpg'
import Navbar from "../components/header";
import Footer from "../components/footer";
function Register(){
    return(
        <>
        <Navbar />
        <div className="Comming-image">
            <img src={img} alt="" />
        </div>
        <Footer />
        </>
    )
}

export default Register;