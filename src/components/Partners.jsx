import Databiz from "../img/client-audiophile.svg"
import Audiophile from "../img/client-databiz.svg"
import Maker from "../img/client-maker.svg"
import Meet from "../img/client-meet.svg"

import "./Partners.css";

const Partners = () => {
    return (
        <div className="Partners">
            <img src={Audiophile} alt="Audiophile Logo"/>
            <img src={Databiz} alt="Databiz Logo"/>
            <img src={Maker} alt="Maker Logo"/>
            <img src={Meet} alt="Meet Logo"/>
        </div>
    );
}

export default Partners;