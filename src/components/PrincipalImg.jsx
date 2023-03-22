import Img from "../img/image-hero-desktop.png";

import "./PrincipalImg.css"

const PrincipalImg = () => {
    return (
        <div className="PrincipalImg">
            <img src={Img} alt="Principal"/>
        </div>
    );
}

export default PrincipalImg;